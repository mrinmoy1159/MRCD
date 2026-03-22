"use client";

import { useState } from "react";
import axios from "axios";
import type { PortfolioItem } from "@/types/portfolio";

type AdminFormProps = {
  onCreated: (item: PortfolioItem) => void;
};

export function AdminForm({ onCreated }: AdminFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please choose an image first.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/upload", formData);
      setImageUrl(response.data.url);
      setMessage("Image uploaded successfully.");
    } catch (error) {
      setMessage("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !category || !imageUrl) {
      setMessage("Please complete all fields and upload an image.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post("/api/portfolio", {
        title,
        category,
        image: imageUrl
      });

      onCreated(response.data.data);
      setTitle("");
      setCategory("");
      setFile(null);
      setImageUrl("");
      setMessage("Portfolio item saved.");
    } catch (error) {
      setMessage("Saving failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Admin</p>
        <h1 className="mt-3 font-[var(--font-display)] text-4xl text-white">
          Add Portfolio Work
        </h1>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm text-white/70">Project title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50"
            placeholder="Maison Elan Lookbook"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Category</label>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50"
            placeholder="Luxury Goods"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Image</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
              className="w-full rounded-2xl border border-dashed border-white/15 bg-black/40 px-4 py-3 text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black"
            />
            <button
              type="button"
              onClick={handleUpload}
              disabled={loading}
              className="rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-sm uppercase tracking-[0.25em] text-gold-soft transition hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Upload
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          Save Portfolio Item
        </button>
        {imageUrl ? (
          <p className="text-sm text-gold-soft">Uploaded image ready to save.</p>
        ) : null}
        {message ? <p className="text-sm text-white/70">{message}</p> : null}
      </form>
    </div>
  );
}


