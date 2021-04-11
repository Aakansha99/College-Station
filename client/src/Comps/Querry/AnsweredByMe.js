import { query } from "express-validator";
import React, { useContext, useEffect } from "react";
import QuerryContext from "../../Query/QuerryContext";
import "../../Query/Querry.css";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";


const AnsweredByMe = () => {
  const querryContext = useContext(QuerryContext);
  console.log(querryContext);
  const { AnsByMe, solution } = querryContext;
  useEffect(() => {
    AnsByMe();
    console.log(solution);
  }, []);
  console.log(solution);

  return (
    <>
      {solution.map((s) => (
        <div key={s._id} item xs={12} sm={6} md={6}>
          <div className="query-list">
            <div className="query-card">
              <QuestionAnswerIcon color="primary" />
              <h3>To {s.query}</h3>
              <h5>You Answered</h5>
              <h3 style={{color: "#777"}}> -&gt; {s.solution}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnsweredByMe;
