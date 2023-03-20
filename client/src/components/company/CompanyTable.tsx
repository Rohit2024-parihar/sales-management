import React  from "react";
import { DataGrid  } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import { deleteCompany } from "../../api/companyApis";

function CompanyTable() {
    const dispatch = useDispatch<AppDispatch>()
    const state = useSelector(( state : RootState ) => state.companyFormReducer.companyName  ) 
    const columns = [
        { field: "company", headerName: "Company" ,    width: 400 },
        {
          field: "actions",
          headerName: "Actions",
          width: 400,
          renderCell: (params : any ) => {
            return (
              <Button onClick={() => dispatch(deleteCompany(params.row))}>
                <DeleteIcon style={{ color: "black" }} />
              </Button>
            );
          },
        },
      ];

      

  return (
    <div style={{ height: 400, width: "100%", marginTop: "24px" }}>
    <DataGrid
      rows={state}
      columns={columns}
    />
  </div>
  )
}

export default CompanyTable