import { Button, Grid, TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, getCompanyList } from "../../api/companyApis";
import { getHsnList } from "../../api/hsnApis";
import { AppDispatch } from "../../reduxtoolkit/store";
// import { updateCompany } from "../../reduxtoolkit/reducers/company/companyFormSlice";
import CompanyTable from "./CompanyTable";
import { validationSchemaCompany } from "./validations";

const initialstate = {
  company: "",
};

function CompanyForm() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCompanyList());
  }, []);
  return (
    <div>
      <Formik
        initialValues={initialstate}
        validationSchema={validationSchemaCompany}
        onSubmit={(values , {resetForm}) => {
          dispatch(addCompany({ ...values, id: nanoid() }));
          resetForm()
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
        }) => {
          console.log(values);
          return (
            <Form>
              <h1>COMPANY</h1>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="company"
                    name="company"
                    label="Company name"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.company && Boolean(errors.company)}
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ height: "56px", top: 30, left: 20 }}
                >
                  Add
                </Button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      <CompanyTable />
    </div>
  );
}

export default CompanyForm;
