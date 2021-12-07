import React from "react";
import "./App.css";
import { Button, Table, InputGroup } from "react-bootstrap";

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
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    id="hospitalname"
                    name="hospitalname"
                    value="hospitalname"
                  />
                  Hospital Name
                </th>
                <th>Email address</th>
                <th>Contact</th>
                <th>
                  Data Modified <i class="fas fa-arrow-down"></i>
                </th>
                <th>
                  Status<i class="fas fa-arrow-down"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="hospitalname"
                    name="hospitalname"
                    value="hospitalname"
                  />
                  SUM Hospital <br></br>
                  <span>PVT.</span>
                </td>
                <td>soasom@gmail.com</td>
                <td>
                  +916371832434<br></br>+916371832434
                </td>
                <td>22 January, 2021</td>
                <td>
                  <i class="fas fa-circle"></i>
                  Active
                </td>
                <td>
                  <i class="far fa-trash-alt"></i>
                  {"  "}
                  {"  "}
                  <i class="fas fa-pencil-alt"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Main;
