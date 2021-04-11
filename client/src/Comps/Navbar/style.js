import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    margin: "30px 0",
    marginTop: "0px",
    marginBottom: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#3d7eec",
  },
  heading: {
    color: "#ffffff",
    textDecoration: "none",
  },
  // image: {
  //   marginLeft: "15px",
  //   marginRight: "30px",
  // },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "600px",
    marginRight: "20px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "white",
    width: "150px",
    marginLeft: "15px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: "#3d7eec",
    backgroundColor: "#ffffff",
  },
  navLink: {
    color: "white",
    fontSize: "1 rem"
  },
  logout:{
    color: "white",
    backgroundColor: "#3d7eec",
  }
}));
