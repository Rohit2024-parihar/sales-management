import { Request, Response } from "express";
import CompanyModel, { Company } from "../schema/CompanySchema.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js"

export const addCompany = asyncErrorHandler(async (req: Request, res: Response) => {
    const company: Company = req.body;
    console.log(company)
    if (!company.companyName) {
        console.log(' Company name cant be empty');
        res.json({ status: 'notOk' });
    }

    const newCompany = await CompanyModel.create(company);
    res.json({ status: 'ok', company: newCompany });
})

export const getAllCompany = asyncErrorHandler(async (req, res) => {
    const company = await CompanyModel.find();
    res.json({ company, status: 'ok' });
})

export const deleteCompanyById = asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const company = await CompanyModel.deleteOne({ _id: id });
    res.json({ company, status: 'ok' });
})