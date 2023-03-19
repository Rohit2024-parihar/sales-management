import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMedicine, getAllmedicine, updateMedicine } from "../../api/ProductDetailApi";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import ProductDetailForm from "./ProductDetailForm/Form";
import ProductDetailTable from "./ProductDetailTable/ProductTable";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { ImedicineDetail } from "../../types/ProductDetail";
import { medicineInitialState } from "./ProductDetailForm/model";

export type productColumn = {
  id: string,
  label: string,
  minWidth?: number,
  renderCell: any
};

const ProductDeatilSetup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.medicine
  );

  const columns: productColumn[] = [
    { id: "medicineName", label: "Medicine Name", minWidth: 170, renderCell: (row: any, id: any) => <>{row[id]}</> },
    { id: "saltName", label: "Salt Name", minWidth: 100, renderCell: (row: any, id: any) => <>{row[id]}</> },
    {
      id: "companyName",
      label: "Company Name",
      minWidth: 170,
      renderCell: (row: any, id: any) => <>{row[id]}</>
    },
    {
      id: "hsnCode",
      label: "HSN Code",
      minWidth: 170,
      renderCell: (row: any, id: any) => <>{row[id]}</>
    },
    {
      id: "gst",
      label: "GST",
      minWidth: 170,
      renderCell: (row: any, id: any) => <>{row[id]}</>
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 170,
      renderCell: (params: ImedicineDetail) => {
        return (
          <>
            <Button onClick={() => dispatch(deleteMedicine(params))}>
              <DeleteIcon style={{ color: "black" }} />
            </Button>
            <Button onClick={() => onEditProductdetailForm(params)}>
              <EditIcon style={{ color: "black" }} />
            </Button>
          </>
        );
      },
    }
  ];

  const [showProductForm, setShowProductForm] = useState(false);
  const [isEditProductForm, setIsEditProductForm] = useState(false);
  const [formData, setFormData] = useState(medicineInitialState);

  useEffect(() => {
    dispatch(getAllmedicine());
  }, []);

  const onEditProductdetailForm = (params: ImedicineDetail) => {
    console.log(params)
    setFormData(params);
    setIsEditProductForm(true);
    openProductDetailModel()
  }

  const closeProductDetailModel = (_: any, reason: any) => {
    if (reason && reason === "backdropClick" && "escapeKeyDown") return;
    setShowProductForm(false);
  };
  const closeModel = () => {
    setShowProductForm(false);
  };

  const openProductDetailModel = () => {
    setShowProductForm(true);
  };
  const addMedicine = () => {
    setFormData(medicineInitialState);
    setIsEditProductForm(false);
    openProductDetailModel()
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  return (
    <>
      <Modal
        open={showProductForm}
        onClose={closeProductDetailModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductDetailForm isEdit={isEditProductForm} closeModel={closeModel} formData={formData} />
        </Box>
      </Modal>
      <ProductDetailTable columns={columns} data={data} />
      <Button variant="contained" onClick={addMedicine}>
        Add Product
      </Button>
    </>
  );
};

export default ProductDeatilSetup;
