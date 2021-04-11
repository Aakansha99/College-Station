import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  border: {
    border: "solid",
  },
  checkbox: {
    color: "#002884",
  },
  card: {
    borderRadius: "15px",
    marginTop: "100px",
    width: "600px",
    margin: "auto",

    color: "black",
    boxShadow: "5px 10px 10px 6px #444073",
    marginBottom: "100px",
    backgroundColor: "#e3e1fc",
    padding: "1rem",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },

  details: {
    paddingLeft: "1.5rem",
    marginLeft: "-10px",
    color: "black",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  posttitle: {
    color: "#44449c",
    fontWeight: "bold",
    fontSize: "40px",
  },
  posthead: {
    color: "black",
    fontWeight: "normal",
    fontSize: "20px",
  },
  posttime: {
    float: "right",
    marginBottom: 10,
  },
  poststat: {
    marginTop: 20,
    color: "black",
    fontWeight: "medium",
    fontSize: "30px",
    textDecoration: "underline",
  },
  postproblem: {
    color: "#44449c",
    fontWeight: "normal",
    fontSize: "20px",
  },
  postsolution: {
    color: "#44449c",
    fontWeight: "normal",
    fontSize: "20px",
  },
});
