import * as yup from "yup";
export const validationSchemaCompany =  yup.object({
        companyName :  yup.string().required('hsn No is required')
})