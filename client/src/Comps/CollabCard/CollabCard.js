import React from "react";
import { Paper, Typography } from "@material-ui/core/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./style";
import "./cardStyle.css";

const CollabCard = () => {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.sideRight}>
          <p>
            <i className="arrow left"></i>
          </p>
        </Paper>

        <Paper className={classes.main}>
          <Typography variant="h3" align="center" color="secondary">
            Title
          </Typography>
        </Paper>
        <Paper className={classes.sideLeft}>
          <p>
            <i className="arrow right"></i>
          </p>
        </Paper>
      </div>
    </>
  );
};

export default CollabCard;
