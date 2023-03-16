import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IHsnDetails } from "../../types/hsndetails";
import { useDispatch } from "react-redux";
import { deleteHsn } from "../../api/hsnApis";
import { AppDispatch } from "../../reduxtoolkit/store";

type propsType = {
  tableRowData: IHsnDetails[];
};

const Hsntable = ({ tableRowData }: propsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<IHsnDetails[]>(tableRowData);

  useEffect(() => {
    setData(tableRowData);
  }, [tableRowData]);

  const handleClick = (e: React.MouseEvent, row: IHsnDetails) => {
    console.log(row);
    dispatch(deleteHsn(row));
  };

  const columns = [
    { field: "hsnNo", headerName: "HSN No.", width: 200, sortable: false },
    { field: "gst", headerName: "GST No.", width: 130, sortable: false },
    {
      field: "actions",
      headerName: "Actions",
      width: 400,
      renderCell: (params: any) => {
        return (
          <Button onClick={(e: React.MouseEvent) => handleClick(e, params.row)}>
            <DeleteIcon style={{ color: "black" }} />
          </Button>
        );
      }
    }
  ];

  return (
    <div style={{ height: 400, width: "100%", marginTop: "24px" }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
      />
    </div>
  );
};
export default Hsntable;
