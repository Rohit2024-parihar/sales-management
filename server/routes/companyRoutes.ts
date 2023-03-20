import express from "express";
import { addCompany, deleteCompanyById, getAllCompany } from "../controllers/companyController.js";

export const companyRouter = express.Router();

companyRouter.route('/company').get(getAllCompany).post(addCompany);
companyRouter.route('/companyByName').get(getAllCompany);
companyRouter.route('/companyById/:id').delete(deleteCompanyById)
