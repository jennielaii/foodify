import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.info.main,
    fontSize: 20,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
    },
  },
  body: {
    fontSize: 16,
    fontWeight: 600,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    // width: "100%",
    maxHeight: 440,
    maxWidth: 800,
    margin: "20px auto",
  },
});
const CustomTable = ({ rows, cells, labelName, quantityName, unitName }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            {cells?.map((cell) => (
              <StyledTableCell key={cell} align="center">
                {cell}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row[labelName]}>
              <StyledTableCell component="th" scope="row">
                {row[labelName]}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row[quantityName]}
              </StyledTableCell>
              <StyledTableCell align="center">{row[unitName]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
