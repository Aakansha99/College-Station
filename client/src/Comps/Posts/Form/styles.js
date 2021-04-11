import { makeStyles } from "@material-ui/core/styles";
import { gray } from "colors";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "0px",

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "6px",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,

    borderRadius: "30px",
    width: "150px",
    boxShadow: "2px 10px 20x gray",
    marginLeft: 25,
    boxShadow: "5px 10px 8px black",
  },

  floatcontainer: {
    border: "3px solid gray",
    padding: "25px",
    boxShadow: "2px 10px 20x gray",
    marginLeft: "25%",
    margin: "auto",
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
  },

  floatchild: {},
  floatchild1: {
    width: "50%",
    float: "left",
    padding: "0px",
    border: "3px solid gray",
    height: "300px",
  },
  postBg: {
    height: "100vh",
    width: "97vw",
    background: "no-repeat center center/cover",
  },
  postMainForm: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "600px",
    paddingTop: "110px",
    margin: "auto",
    gridGap: "0.5rem",
  },

  floatcontainer: {
    padding: "85px",
    borderRadius: "10px",
    boxShadow: "7px 7px 8px 6px gray",
    marginLeft: "15%",
    margin: "0 auto 2rem auto",
    width: "70%",
    height: "550px",
    justifyContent: "space-around",
    background:
      'url("https://images.unsplash.com/photo-1616926421423-8cf32ef4967d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60") no-repeat center center/cover',
  },

  floatchild1: {
    width: "30%",
    float: "left",
    padding: "40px",
    marginLeft: 30,
    height: "300px",
  },
  ask: {
    textSize: 5,
    textTransform: "uppercase",
    textAlign: "center",
    content: "attr(data-heading)",
    padding: "1rem",
    overflowX: "hidden",
    color: "#223f9c",
    mixBlendMode: "darken",
    width: "100%",
    textShadow:
      "1px 0px 0px #190c70, 0px 1px 0px #190c70, 2px 1px 0px #190c70, 1px 2px 0px #190c70, 3px 2px 0px #190c70, 2px 3px 0px #190c70, 4px 3px 0px #190c70, 3px 4px 0px #190c70, 5px 4px 0px #190c70",
  },

  land: {
    width: "100vw",
    height: "100vh",
    background: "no-repeat center center/cover",
  },
  about: {
    marginTop: "100px",

    height: "100vh",
    width: "100vw",

    background: "no-repeat center center/cover",
  },

  aboutt: {
    marginTop: "-450px",

    height: "100vh",
    width: "100vw",
    transform: "rotate(180deg)",
    background: "no-repeat center center/cover",
  },

  card: {
    padding: "70px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",

    height: "50vh",
    borderRadius: 0,
    boxShadow: "5px 5px 15px black",
    transition: "all 0.1s ease-in",
    zIndex: "1000",
    position: "relative",
    borderRadius: 20,
    display: "flex",
    textAlign: "center",
    fontSize: "23px",
    fontWeight: "bold",
    marginTop: "-0px",
  },
  tag: {
    textAlign: "center",
    fontSize: "33px",
    lineHeight: "20px",
    fontWeight: "bold",
    zIndex: "2000",
    position: "relative",
    color: "white",
    marginTop: "-480px",
    marginBottom: "70px",
  },

  row: {
    padding: 50,
    color: "rgba(52, 78, 150, 1)",
  },
  column: {
    float: "left",
    width: "20%",
    padding: "0 10px",
    borderRadius: 20,
  },

  connect: {
    marginTop: 10,

    height: "100vh",
    width: "100vw",

    padding: 0,
  },

  contact: {
    marginTop: 10,

    height: "90vh",
    width: "60vw",
    marginLeft: "20%",

    padding: 0,
  },

  land: {
    width: "100vw",
    height: "100vh",
    background: "no-repeat center center/cover",
    marginTop: 100,
  },

  cardf1: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "70px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    marginLeft: 16,
    width: "24vw",
    height: "50vh",
    borderRadius: 0,
    boxShadow: "5px 5px 15px gray",
    transition: "all 0.1s ease-in",
    zIndex: "1000",
    marginTop: "-30px",
    borderRadius: 20,
    display: "flex",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  cardf2: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "70px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    marginLeft: "-80px",
    width: "24vw",
    height: "50vh",
    borderRadius: 0,
    boxShadow: "5px 5px 15px gray",
    transition: "all 0.1s ease-in",
    zIndex: "1000",
    marginTop: "-30px",
    borderRadius: 20,
    display: "flex",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  cardf3: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "70px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    marginLeft: "-182px",
    width: "24vw",
    height: "50vh",
    borderRadius: 0,
    boxShadow: "5px 5px 15px gray",
    transition: "all 0.1s ease-in",
    zIndex: "1000",
    marginTop: "-30px",
    borderRadius: 20,
    display: "flex",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  },

  rowf: {
    padding: 0,
    color: "rgba(52, 78, 150, 1)",
  },
  columnf: {
    float: "left",
    width: "20vw",

    borderRadius: 20,
    marginLeft: 180,
  },

  connectbelow: {
    align: "center",
    marginLeft: "42%",
    marginBottom: 30,
  },

  signinbutton: {
    backgroundColor: "#3b4d9c",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: 10,
    boxShadow: "5px 5px 15px gray",
    marginRight: "30px",
  },
  signuppbutton: {
    backgroundColor: "#8761ad",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: 10,
    boxShadow: "5px 5px 15px gray",
  },

  rowfeatures: {
    padding: 50,
    color: "rgba(52, 78, 150, 1)",
    marginLeft: "0",
    marginTop: "50px",
    marginBottom: "100px",
  },
  columnimg: {
    float: "left",
    width: "50%",
    padding: "0 10px",
    borderRadius: 20,
    marginTop: "100px",
    marginBottom: "100px",
  },
  columncont: {
    float: "left",
    width: "50%",
    padding: "0 10px",
    borderRadius: 20,
    marginTop: "100px",
    marginBottom: "100px",
  },

  cardprod: {
    padding: "10px",
    textAlign: "center",

    height: "70vh",

    borderRadius: 20,
    display: "grid",
    textAlign: "center",
    textSize: "800px",
    fontWeight: "bold",
    lineHeight: "50px",
  },

  prod: {
    width: "90vh",
    height: "66vh",
  },

  prodhead: {
    fontSize: "3rem",
    height: "100px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  proddesc: {
    fontSize: "2rem",
    height: "100px",
    marginTop: "-150px",
  },
  features: {
    fontSize: "6rem",
    height: "100px",

    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "100px",
  },
}));
