import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as yup from "yup";
import HsnTable from "./HsnTable";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../reduxtoolkit/reducers/app/appSlice";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import { getHsnList, updateHsnList } from "../../api/hsnApis";
import { IHsnDetails } from "../../types/hsndetails";


const validationSchemaHsn = yup.object().shape({
  hsnNo: yup
    .string()
    .matches(
      /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
      "not valid"
    )
    .max(8),
  gst: yup.string().trim().required("gst No is required"),
});

const hsnPercentage: number[] = [0, 5, 12, 18, 28];
const HsnFormField = {
  hsnNo: "",
  gst: "",
};

const HsnForm = () => {
  const initialData = useSelector((state: RootState) => state.hsn.data);
  const [hsnDetails, setHsnDetails] = useState<IHsnDetails[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHsnList());
  }, []);

  const handleSubmit = (values: IHsnDetails, actions: any) => {
    setHsnDetails([
      ...hsnDetails,
      { id: values.hsnNo, hsnNo: values.hsnNo, gst: values.gst },
    ]);
    console.log(actions);
    actions.resetForm({ values: "" });
    dispatch(setNotification(true));
    dispatch(updateHsnList());
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
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <h1>HSN</h1>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="hsnNo"
                  name="hsnNo"
                  label="Hsn No."
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
                // onClick={()=>dispatch(setNotification(true))}
              >
                Add
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      <HsnTable rowData={hsnDetails.length===0?initialData:hsnDetails} />
    </div>
  );
};

export default HsnForm;
