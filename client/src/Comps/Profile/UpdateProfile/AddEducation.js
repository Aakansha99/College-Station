import React, { useContext, useState, useEffect } from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./updateProfileStyle";
import ProfileContext from "../../../Profile/ProfileContext";
import eduImage from "./assets/eduImage.png";

const AddEducation = () => {
  const profileContext = useContext(ProfileContext);
  const {
    currentEdu,
    AddEducation,
    clearCurrentEdu,
    EditEducation,
  } = profileContext;
  console.log(profileContext);
  const classes = useStyles();
  const [eduData, setEduData] = useState({
    school: "",
    field_of_study: "",
    degree: "",
    grade: "",
    startdate: "",
    enddate: "",
    description: "",
    link: "",
  });
  useEffect(() => {
    if (currentEdu) {
      setEduData(currentEdu);
    } else {
      setEduData({
        school: "",
        field_of_study: "",
        degree: "",
        grade: "",
        description: "",
        link: "",
      });
    }
  }, [profileContext, currentEdu]);
  const history = useHistory();
  const {
    school,
    field_of_study,
    degree,
    grade,
    startdate,
    enddate,
    description,
    link,
  } = eduData;
  const clear = () => {
    //setCurrentId(0);
    setEduData({
      school: "",
      field_of_study: "",
      degree: "",
      grade: "",
      description: "",
      link: "",
    });
    clearCurrentEdu();
  };
  const onChange = (e) => {
    setEduData({
      ...eduData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentEdu === null) {
      AddEducation(eduData, history, localStorage.id);
    } else {
      EditEducation(eduData, history, currentEdu._id);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <center>
        <h1> {currentEdu ? `Update Education ` : "Add Education"}</h1>
      </center>
      <div
        className={classes.eduBg}
        style={{ backgroundImage: `url(${eduImage})` }}
      >
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form} ${classes.eduMainForm}`}
          >
            <TextField
              value={school}
              onChange={onChange}
              name="school"
              variant="outlined"
              label="School"
              fullwidth
            />
            <TextField
              name="field_of_study"
              variant="outlined"
              label="Field of Study"
              fullwidth
              value={field_of_study}
              onChange={onChange}
            />
            <TextField
              name="degree"
              variant="outlined"
              label="Degree"
              fullwidth
              value={degree}
              onChange={onChange}
            />
            <TextField
              name="grade"
              variant="outlined"
              label="Grade"
              fullwidth
              value={grade}
              onChange={onChange}
            />
            <TextField
              name="description"
              variant="outlined"
              label="Description"
              fullwidth
              multiline
              rows={4}
              value={description}
              onChange={onChange}
            />
            <TextField
              value={link}
              onChange={onChange}
              name="link"
              variant="outlined"
              label="Link"
              fullwidth
            />

            <form className={classes.container} noValidate>
              <TextField
                id="start-date"
                label="Start Date"
                type="date"
                name="startdate"
                value={startdate}
                onChange={onChange}
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="end-date"
                label="End Date"
                type="date"
                name="enddate"
                value={enddate}
                onChange={onChange}
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullwidth
            >
              {currentEdu ? `Update Education ` : "Add Education"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
      </div>
    </>
  );
};

export default AddEducation;
