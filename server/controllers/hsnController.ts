import { Request, Response } from "express";
import HsnModel from "../schema/HsnCodeSchema.js"
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

export const addHsnCode = asyncErrorHandler(async (req: Request, res: Response) => {
    const { hsnNo, gst } = req.body;
    const newHsn = await HsnModel.create({ hsnNo, gst });
    res.json({ status: 'ok', hsnCode: newHsn });
})

export const getHsnCode = asyncErrorHandler(async (req: Request, res: Response) => {
    const hsnCodes = await HsnModel.find();
    res.json({ hsnCodes, status: 'ok' });
})

export const getHsnCodeById = asyncErrorHandler(async (req: Request, res: Response) => {
    const { id } = req.query;
    const hsncode = await HsnModel.find({ _id: id });
    res.json({ hsncode, status: 'ok' });
})

export const deleteHsnCodeById = asyncErrorHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const hsncode = await HsnModel.deleteOne({ _id: id });
    res.json({ hsncode, status: 'ok' });
})