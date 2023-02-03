import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import { getOrdersData } from "../../Services/OrderService";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
//import { bindActionCreators } from "redux";
//import { setOrdersData } from "../../Redux/Actions/action";

const columns = [
  { id: "OrderId", label: "OrderId", minWidth: 100 },
  { id: "DeviceName", label: "Device Name", minWidth: 100, align: "right" },
  { id: "cost", label: "Cost", minWidth: 100, align: "right" },
  { id: "update", label: "Update", minWidth: 100, align: "right" },
  { id: "delete", label: "Delete", minWidth: 100, align: "right" },
];

class StickyHeadTable extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(">>>>>>>>>>>>>..componentDidMount<<<<<<<<");
    //this.props.dispatch(setOrdersData({}));
    this.props.dispatch({ type: "setOrdersData" });
    //getOrdersData(this.props.dispatch);
  }

  render() {
    //console.log(this.props);
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.orders.length > 0 &&
                this.props.orders.map((row) => (
                  <TableRow
                    key={row.orderId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.orderId}
                    </TableCell>
                    <TableCell align="right">{row.deviceName}</TableCell>
                    <TableCell align="right">{row.billingCost}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained">Update</Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

// const mapDispatchToProps = {
//   appendData,
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ setOrdersData: "setOrdersData" }, dispatch);
// };

const mapStateToProps = (state) => {
  // console.log("mapStateToProps--", state);S
  return {
    orders: state.ordersReducer.orders,
  };
};

export default connect(mapStateToProps)(StickyHeadTable);
