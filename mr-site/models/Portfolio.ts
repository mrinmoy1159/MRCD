import { Schema, model, models } from "mongoose";

export interface PortfolioDocument {
  title: string;
  image: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const portfolioSchema = new Schema<PortfolioDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Portfolio =
  models.Portfolio || model<PortfolioDocument>("Portfolio", portfolioSchema);

export default Portfolio;


