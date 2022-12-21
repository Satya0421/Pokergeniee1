import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import AdminHeader from "./AdminHeader";
import { fetchEnquires, deleteEnquiries } from "../../actions/otherActions";
import { ExportToExcel } from "./ExportToExcel";

class Enquires extends Component {
  state = {
    fileName:
      "MG Contacts Report " +
      new Date().getDate() +
      "-" +
      parseInt(new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear() +
      " " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds(),
  };

  componentDidMount() {
    trackPromise(this.props.fetchEnquires());
  }
  renderTable() {
    return this.props.subscriptions.map((subscriber, index) => {
      return (
        <tr key={subscriber._id}>
          <td>{index + 1}</td>
          <td>{subscriber.userName}</td>
          <td>{subscriber.email}</td>
          <td>{subscriber.mobile}</td>
          <td>{new Date(subscriber.date).toLocaleString()}</td>
          <td>{subscriber.state}</td>
          <td>{subscriber.address}</td>
          <td>
            <a href={`mailto:${subscriber.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
            <span> </span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <a href={`tel:${subscriber.mobile}`}>
              <i className="fa fa-phone"></i>
            </a>
          </td>
          <td>
            <i
              className="fa fa-trash"
              onClick={() => {
                trackPromise(this.props.deleteEnquiries(subscriber._id));
              }}
              style={{ cursor: "pointer" }}
            ></i>
          </td>
        </tr>
      );
    });
  }

  renderExcelData() {
    // Excel Info
    const enquires = [];
    this.props.subscriptions.map((contact, index) => {
      enquires.push({
        "Sl. No": index + 1,
        "Customer Name": contact.userName,
        "Customer Email": contact.email,
        "Customer Mobile Number": contact.mobile,
        "Date of enquiry": new Date(contact.date).toLocaleString(),
      });
    });
    return enquires;
  }

  render() {
    // console.log(this.props.subscriptions);
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Product Enquires</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <AdminHeader />

        <div className="table-responsive">
          <ExportToExcel
            apiData={this.renderExcelData()}
            fileName={this.state.fileName}
          />

          <table className="table table-striped  styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Date</th>
                <th>State</th>
                <th>Address</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions,
  };
};
export default connect(mapStateToProps, { fetchEnquires, deleteEnquiries })(
  Enquires
);
