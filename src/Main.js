import * as React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Main() {
  return (
    <>
      <div className="main_box p-2 m-4 main_box_border">
        <p>
          Hospitals <span> 78 hospitals</span>
        </p>
        <div className="main_button">
          <div className="main_button_start">
            <Button variant="outline-secondary">View all</Button>
            <Button variant="outline-secondary">Active</Button>
            <Button variant="outline-secondary">Archieved</Button>
          </div>
          <div className="main_button_end">
            <Button variant="outline-secondary" className="main_button_search">
              <i class="fas fa-search"></i> Search
            </Button>
            <Button variant="success" className="ml-2">
              <i className="fas fa-archive"></i>Archive
            </Button>
          </div>
        </div>

        <div className="pt-4">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        
        </div>
      </div>
    </>
  );
}

export default Main;
