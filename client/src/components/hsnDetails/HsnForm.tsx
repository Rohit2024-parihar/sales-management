import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";
import * as yup from "yup";
import HsnTable from "./HsnTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import { getHsnList, addHsn } from "../../api/hsnApis";
import { IHsnDetails } from "../../types/hsndetails";

const validationSchemaHsn = yup.object().shape({
  hsnNo: yup
    .number()
    .required()
    .test(
      "len",
      "Must be exactly 5 characters",
      (val: any) => val && val.toString().length <= 8
    ),
  gst: yup.number().required("gst No is required")
});

const hsnPercentage: number[] = [0, 5, 12, 18, 28];
const HsnFormField: IHsnDetails = {
  hsnNo: "",
  gst: ""
};

const HsnForm = () => {
  const initialData = useSelector((state: RootState) => state.hsn.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHsnList());
  }, []);

  const handleSubmit = (values: IHsnDetails, actions: any) => {
    const hsnData: IHsnDetails = {
      hsnNo: values.hsnNo,
      gst: values.gst
    };
    console.log(actions);
    dispatch(addHsn(hsnData)).then(()=>{
      dispatch(getHsnList());
    })
    actions.resetForm({ values: "" });
  };

  return (
    <div>
      <Formik
        initialValues={HsnFormField}
        validationSchema={validationSchemaHsn}
        onSubmit={(values: IHsnDetails, actions: any) => {
          handleSubmit(values, actions);
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form>
            <h1>HSN</h1>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="hsnNo"
                  name="hsnNo"
                  label="Hsn No."
                  type="number"
                  value={values.hsnNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.hsnNo && Boolean(errors.hsnNo)}
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl
                  fullWidth
                  error={Boolean(errors.gst && touched.gst)}
                >
                  <InputLabel htmlFor="gst">Gst</InputLabel>
                  <Select
                    name="gst"
                    value={values.gst}
                    label="gst"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                  >
                    {hsnPercentage.map((hsn:number) => {
                      return (
                        <MenuItem key={hsn} value={hsn}>
                          {hsn}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
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
        )}
      </Formik>
      <HsnTable tableRowData={initialData} />
    </div>
  );
};

export default HsnForm;
