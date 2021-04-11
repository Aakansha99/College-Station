import "./styles/style.css";
import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "../Posts/Form/styles";
import { useHistory } from "react-router-dom";
import QuerryContext from "../../Query/QuerryContext";

import adImage from "./assets/askquery.png";

// import adImage from "./assets/ad.png";

const AskQuerry = () => {
  const querryContext = useContext(QuerryContext);
  const { Askquerry } = querryContext;
  const history = useHistory();
  const classes = useStyles();
  const [queryData, setQueryData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (queryData !== null) Askquerry({ query: queryData, history });
  };
  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography className={classes.ask} variant="h3">
          Type Your Query Below
        </Typography>

        <div
          className={classes.floatcontainer}
          style={{ backgroundImage: `url(${adImage})` }}
        >
          <div className={classes.floatchild}></div>

          <div className={classes.floatchild1}>
            <TextField
              name="query"
              variant="outlined"
              label="Query"
              fullWidth
              multiline
              rows={4}
              value={queryData}
              required="true"
              style={{ color: "white" }}
              onChange={(e) => setQueryData(e.target.value)}
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Add Query
            </Button>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AskQuerry;
