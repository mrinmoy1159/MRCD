import Portfolio from "@/models/Portfolio";
import type { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { samplePortfolio } from "@/lib/constants";
import type { PortfolioItem } from "@/types/portfolio";

type PortfolioLeanItem = {
  _id: Types.ObjectId;
  title: string;
  image: string;
  category: string;
};

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    await connectToDatabase();
    const items = (await Portfolio.find({})
      .sort({ createdAt: -1 })
      .lean()) as unknown as PortfolioLeanItem[];

    return items.map((item) => ({
      _id: item._id.toString(),
      id: item._id.toString(),
      title: item.title,
      image: item.image,
      category: item.category,
      alt: `${item.title} portfolio image`,
      description: `${item.title} project presentation for ${item.category.toLowerCase()}.`,
      gallery: [item.image]
    }));
  } catch (error) {
    return [];
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  const localItem = samplePortfolio.find((item) => item.id === id);

  if (localItem) {
    return localItem;
  }

  try {
    await connectToDatabase();
    const item = (await Portfolio.findById(id).lean()) as unknown as PortfolioLeanItem | null;

    if (!item) {
      return null;
    }

    return {
      _id: item._id.toString(),
      id: item._id.toString(),
      title: item.title,
      image: item.image,
      category: item.category,
      alt: `${item.title} portfolio image`,
      description: `${item.title} project presentation for ${item.category.toLowerCase()}.`,
      gallery: [item.image]
    };
  } catch (error) {
    return null;
  }
}
