import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMedicine,
  getAllmedicine,
  updateMedicine,
} from "../../api/ProductDetailApi";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import ProductDetailForm from "./ProductDetailForm/Form";
import ProductDetailTable from "./ProductDetailTable/ProductTable";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ImedicineDetail } from "../../types/ProductDetail";
import { medicineInitialState } from "./ProductDetailForm/model";

export type productColumn = {
  field: string;
  headerName: string;
  width?: number;
};

const ProductDeatilSetup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.medicine
  );
  const columns = [
    { field: "medicineName", headerName: "Company", width: 400 },
    { field: "saltName", headerName: "Company", width: 400 },
    { field: "companyName", headerName: "Company", width: 400 },
    { field: "hsnCode", headerName: "Company", width: 400 },
    { field: "gst", headerName: "Company", width: 400 },
    {
      field: "actions",
      headerName: "Actions",
      width: 400,
      renderCell: (params: any) => {
        return (
          <>
            <Button onClick={() => dispatch(deleteMedicine(params.row))}>
              <DeleteIcon style={{ color: "black" }} />
            </Button>
            <Button onClick={() => onEditProductdetailForm(params.row)}>
              <EditIcon style={{ color: "black" }} />
            </Button>
          </>
        );
      },
    },
  ];

  const [showProductForm, setShowProductForm] = useState(false);
  const [isEditProductForm, setIsEditProductForm] = useState(false);
  const [formData, setFormData] = useState(medicineInitialState);

  useEffect(() => {
    dispatch(getAllmedicine());
  }, []);

  const onEditProductdetailForm = (params: ImedicineDetail) => {
    console.log(params);
    setFormData(params);
    setIsEditProductForm(true);
    openProductDetailModel();
  };

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
    openProductDetailModel();
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
          <ProductDetailForm
            isEdit={isEditProductForm}
            closeModel={closeModel}
            formData={formData}
          />
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
