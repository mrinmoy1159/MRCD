import { NextResponse } from "next/server";
import type { Types } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

type PortfolioLeanItem = {
  _id: Types.ObjectId;
  title: string;
  image: string;
  category: string;
};

export async function GET() {
  try {
    await connectToDatabase();
    const items = (await Portfolio.find({})
      .sort({ createdAt: -1 })
      .lean()) as unknown as PortfolioLeanItem[];

    return NextResponse.json({
      success: true,
      data: items.map((item) => ({
        _id: item._id.toString(),
        title: item.title,
        image: item.image,
        category: item.category
      }))
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch portfolio items." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, image, category } = body;

    if (!title || !image || !category) {
      return NextResponse.json(
        { success: false, message: "Title, image, and category are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const item = await Portfolio.create({ title, image, category });

    return NextResponse.json(
      {
        success: true,
        data: {
          _id: item._id.toString(),
          title: item.title,
          image: item.image,
          category: item.category
        }
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create portfolio item." },
      { status: 500 }
    );
  }
}
