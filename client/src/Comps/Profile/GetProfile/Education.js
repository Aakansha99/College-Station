import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ProfileConetxt from '../../../Profile/ProfileContext'



import "./experience.css";

const Education = ({ edu }) => {
const profileContext=useContext(ProfileConetxt)
const {setCurrentEdu}=profileContext
console.log(edu);
  const onEdit = () => {
    setCurrentEdu(edu);
   
  };
  return (
    <>
      <div className="exp" style={{padding: "0.8rem 1.2rem"}} >
        <div className="icon">
          <Link to="/add-edu">
            <button onClick={onEdit}>
              <EditIcon />
            </button>
          </Link>
        </div>
        <h2>
          School:<span>{edu && edu.school}</span>
        </h2>
        <h5>Field Of Study:{edu &&edu.field_of_study}</h5>
        <h5>
          Degree:{edu &&edu.degree} , Grade:{edu &&edu.grade}
        </h5>
        <h5>
          Start Date:{edu &&edu.startdate} End Date:{edu &&edu.enddate}
        </h5>
        <h5>
          Description:{edu &&edu.description} 
        </h5>
      </div>
    </>
  );
};

export default Education;
