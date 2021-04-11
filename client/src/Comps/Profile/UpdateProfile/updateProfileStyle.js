import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "100px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  expBg: {
    height: "97vh",
    width: "97vw",
    background: "no-repeat center center/cover",
  },
  expMainform: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "768px",
    paddingTop: "125px",
    margin: "auto",
  },
  profBg: {
    height: "97vh",
    width: "97vw",
    background: "no-repeat center center/cover",
    padding: "6rem 10rem",
  },
  profMainForm: {
    width: "500px",
    background: "rgba(180,180,255, 0.5)",
    padding: "1rem",
    borderRadius: "0.5rem",
  },
  eduBg: {
    width: "70vw",
    height: "100vh",
    background: "no-repeat  10% 10%/cover",
    margin: "1rem auto",
  },
  eduMainForm: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "400px",
    paddingTop: "125px",
    margin: "0 7.5rem",
    paddingTop: "2.6rem",
  },
}));
