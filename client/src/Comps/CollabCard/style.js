import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width:"100%"
   
  },
  sideRight: {
    width: "150px",
    height: "max",
    paddingTop:"250px"
    
  },
  main: {
    width: "900px",
    height: "max",
  },
  sideLeft: {
   marginRight:"0px",
    height: "max",
    paddingTop:"250px"
  }
  
}));
