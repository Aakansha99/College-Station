import React, { useContext, useEffect, useState } from "react";
import QuerryContext from "./QuerryContext";
import useStyles from "../Comps/Posts/Form/styles";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Querry.css";
const QUERRY = ({ q }) => {
  const querryContext = useContext(QuerryContext);
  const history = useHistory();
  const { AskByPeer, user, querry, Answerquerry } = querryContext;

  const [solData, setsolData] = useState({
    solution: "",
    liked: false,
    disliked: false,
  });
  const { solution, liked, disliked } = solData;
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (solData.solution !== "") {
      Answerquerry(solData, history, q._id);
    }
  };
  return (
    <div>
      <div className="query-list">
        <div className="query-card">
          <QuestionAnswerIcon color="primary" />
          <h5>{q.askedBy} Asks: </h5>
          <h3 style={{ color: "#333" }}>{q.query}</h3>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Type Your Solution </Typography>

            <TextField
              value="solution"
              variant="outlined"
              label="solution"
              required
              fullWidth
              multiline
              rows={4}
              value={solution}
              onChange={(e) =>
                setsolData({ ...solData, solution: e.target.value })
              }
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QUERRY;
