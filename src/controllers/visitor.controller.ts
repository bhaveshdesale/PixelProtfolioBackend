import { Request, Response } from "express";
import Visitor from "../models/Visitor";

export const getAndIncrementVisitor = async (_: Request, res: Response) => {
  let visitor = await Visitor.findOne();

  if (!visitor) {
    visitor = await Visitor.create({ count: 1 });
  } else {
    visitor.count += 1;
    await visitor.save();
  }

  res.json(visitor.count);
};

export const getVisitorCount = async (_: Request, res: Response) => {
  const visitor = await Visitor.findOne();
  res.json(visitor?.count ?? 0);
};
