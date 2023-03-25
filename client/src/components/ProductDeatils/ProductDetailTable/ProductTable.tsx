import * as React from "react";
import Paper from "@mui/material/Paper";
import { ImedicineDetail } from "../../../types/ProductDetail";
import { productColumn } from "../ProductDetailSetup";
import { DataGrid } from "@mui/x-data-grid";

type ProductDetailTable = {
  data: ImedicineDetail[];
  columns: productColumn[];
};

export default function ProductDetailTable({
  data,
  columns,
}: ProductDetailTable) {
  
  return (
    <Paper sx={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
      />
    </Paper>
  );
}
