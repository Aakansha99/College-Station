import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ProfileConetxt from '../../../Profile/ProfileContext'



import "./experience.css";

const Experience = ({ exp }) => {
const profileContext=useContext(ProfileConetxt)
const {setCurrentExp}=profileContext
console.log(exp);
  const onEdit = () => {
    setCurrentExp(exp);
   
  };
  return (
    <>
      <div className="exp" style={{padding: "0.8rem 1.2rem"}}>
        <div className="icon">
          <Link to="/add-exp">
            <button onClick={onEdit}>
              <EditIcon />
            </button>
          </Link>
        </div>
        <h1>
          Title:<span>{exp && exp.title}</span>
        </h1>
        <h3>Employment Type:{exp &&exp.employment_type}</h3>
        <h3>
          Company:{exp &&exp.company},{exp &&exp.location}
        </h3>
        <h5>
          Start Date:{exp &&exp.startdate} End Date:{exp &&exp.enddate}
        </h5>
      </div>
    </>
  );
};

export default Experience;
