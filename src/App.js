import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "../src/Components/DollarInput";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    textAlign: "center",
    width: "100vw",
    margin: "50px auto",
  },
  button: {
    backgroundColor: "black",
    color: "white",
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    width: "80%",
    margin: "50px auto",
  },
  loader: {
    textAlign: "center",
    width: "100%",
    margin: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({
    purchasedWith: "",
    item: "",
    datePurchased: new Date(),
    amount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = () => {
    console.log("hi");
    setIsSubmitting(true);
    // Go do your axios call
    setTimeout(() => setIsSubmitting(false), 5000);
  };

  useEffect(() => {
    function onLoad() {
      axios
        .get("/api/items")
        .then((res) => {
          setItems(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
    onLoad();
  }, []);

  const handleChange = (name) => (event) => {
    setNewItem({ ...newItem, [name]: event.target.value });
  };

  const handleSave = (e) => {
    axios.post("/api/items", { newItem });
    window.location.replace("/");
  };

  return (
    <div className={classes.container}>
      <h1>Expense Tracker</h1>
      <h4>Add an Expense</h4>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Purchased With</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newItem.purchasedWith}
            onChange={handleChange("purchasedWith")}
          >
            <MenuItem value={"Card"}>Card</MenuItem>
            <MenuItem value={"Cash"}>Cash</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Item"
          onChange={handleChange("item")}
        />
        <TextField
          id="date"
          label="Date Purchased"
          type="date"
          defaultValue={newItem.datePurchased}
          className={classes.textField}
          onChange={handleChange("datePurchased")}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-basic"
          label="Amount"
          onChange={handleChange("amount")}
        />

        <Button
          className={classes.button}
          disabled={isSubmitting}
          onClick={handleSave}
        >
          {isSubmitting ? "Loading.." : "Add"}
        </Button>
      </form>
      <div className={classes.tableContainer}>
        <h1>Expenses</h1>
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Purchased With</TableCell>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Date Purcased</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.purchasedWith}
                    </TableCell>
                    <TableCell align="right">{row.item}</TableCell>
                    <TableCell align="right">
                      {moment(row.datePurchased).format("MM/DD/YYYY")}
                    </TableCell>
                    <TableCell align="right">${row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default App;
