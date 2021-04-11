import { query } from "express-validator";
import { QueryCursor } from "mongoose";
import React, { useContext, useEffect } from "react";
import QuerryContext from "../../Query/QuerryContext";
import "../../Query/Querry.css";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const AskByMe = () => {
  const querryContext = useContext(QuerryContext);
  console.log(querryContext);
  const { AskByMe, querry, solution } = querryContext;
  useEffect(() => {
    AskByMe();
    console.log(solution);
  }, []);
  return (
    <>
      {solution.length &&
        solution.map((sol) =>
          sol.map((s) => (
            <div key={s._id} item xs={12} sm={6} md={6}>
              <div>
                <div className="query-list">
                  <div className="query-card">
                    <QuestionAnswerIcon color="primary" />
                    <h5>You Asked:</h5>
                    <h3 style={{ color: "#333" }}>{s.query}</h3>
                    <h5
                      style={{
                        color: `${
                          s.answeredBy === "No one" ? "red" : "steelblue"
                        }`,
                      }}
                    >
                      {" "}
                      &gt;
                      {s.answeredBy === "No one" ? "" : `(${s.answeredBy}): `}
                      {s.solution}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
    </>
  );
};

export default AskByMe;
