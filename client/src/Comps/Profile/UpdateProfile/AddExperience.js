import React, { useContext, useState, useEffect } from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./updateProfileStyle";
import ProfileContext from "../../../Profile/ProfileContext";
import expImage from "./assets/expImage.png";

const AddExperience = () => {
  const profileContext = useContext(ProfileContext);
  const {
    currentExp,
    AddExperience,
    clearCurrentExp,
    EditExperience,
  } = profileContext;

  const classes = useStyles();
  const [expData, setExpData] = useState({
    title: "",
    employment_type: "",
    company: "",
    location: "",
    startdate: "",
    enddate: "",
    description: "",
    link: "",
  });
  useEffect(() => {
    if (currentExp) {
      setExpData(currentExp);
    } else {
      setExpData({
        title: "",
        employment_type: "",
        company: "",
        location: "",
        description: "",
        link: "",
      });
    }
  }, [profileContext, currentExp]);
  const history = useHistory();
  const {
    title,
    employment_type,
    company,
    location,
    startdate,
    enddate,
    description,
    link,
  } = expData;
  const clear = () => {
    //setCurrentId(0);
    setExpData({
      title: "",
      employment_type: "",
      company: "",
      location: "",
      description: "",
      link: "",
    });
    clearCurrentExp();
  };
  const onChange = (e) => {
    setExpData({
      ...expData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (currentExp === null) {
      AddExperience(expData, history, localStorage.id);
    } else {
      EditExperience(expData, history, currentExp._id);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <center>
        <h1>{currentExp ? `Update Experience ` : "Add Experience"}</h1>
      </center>
      <div
        className={classes.expBg}
        style={{ backgroundImage: `url(${expImage})` }}
      >
        <div>
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form} ${classes.expMainform}`}
          >
            <TextField
              value={title}
              onChange={onChange}
              name="title"
              variant="outlined"
              label="Title"
              fullwidth
            />
            <TextField
              name="employment_type"
              variant="outlined"
              label="Employment Type"
              fullwidth
              value={employment_type}
              onChange={onChange}
            />
            <TextField
              name="company"
              variant="outlined"
              label="Company Name"
              fullwidth
              value={company}
              onChange={onChange}
            />
            <TextField
              name="location"
              variant="outlined"
              label="Company Location"
              fullwidth
              value={location}
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
            >
              {currentExp ? `Update Experience ` : "Add Experience"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
            >
              Clear
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExperience;
