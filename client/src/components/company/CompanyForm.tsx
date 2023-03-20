import { Button, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addCompany, getCompanyList } from "../../api/companyApis";
import { updateCompany } from "../../reduxtoolkit/reducers/company/companyFormSlice";
import { AppDispatch } from "../../reduxtoolkit/store";
import CompanyTable from "./CompanyTable";
import { validationSchemaCompany } from "./validations";

const initialstate = {
  companyName: "",
};

function CompanyForm() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCompanyList());
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialstate}
        validationSchema={validationSchemaCompany}
        onSubmit={(values , {resetForm}) => {
          dispatch(addCompany(values)).then(() =>{
            dispatch(getCompanyList())
          })
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
          return (
            <Form>
              <h1>COMPANY</h1>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="companyName"
                    name="companyName"
                    label="Company name"
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.companyName && Boolean(errors.companyName)}
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
