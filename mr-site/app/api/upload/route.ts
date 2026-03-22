import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: "Image file is required." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
      folder: process.env.CLOUDINARY_FOLDER || "mr-catalog-designer"
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to upload image." },
      { status: 500 }
    );
  }
}


