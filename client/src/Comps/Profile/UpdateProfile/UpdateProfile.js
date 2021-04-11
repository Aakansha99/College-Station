import React, { useContext, useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./updateProfileStyle";
import Navbar from "../../Navbar/Navbar";
import ProfileContext from "../../../Profile/ProfileContext";
import profImage from "./assets/profImage.png";

const UpdateProfile = () => {
  const profileContext = useContext(ProfileContext);
  const { currentProfile, updateProfile, clearCurrent } = profileContext;
  console.log(currentProfile);
  const [profileData, setProfileData] = useState({
    bio: "",
    cover_img: "",
    interests: "",
    profile_img: "",
    skills: "",
    tag: "",
  });
  const { bio, interests, tag, skills, profile_img, cover_img } = profileData;
  const history = useHistory();
  useEffect(() => {
    if (currentProfile) {
      setProfileData(currentProfile);
    } else {
      setProfileData({ bio: "", interests: "", tag: "", skills: "" });
    }
  }, [profileContext, currentProfile]);

  const classes = useStyles();
  const clear = () => {
    //setCurrentId(0);
    setProfileData({ bio: "", interests: "", tag: "", skills: "" });
    clearCurrent();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    updateProfile(profileData, history, currentProfile._id);
  };
  return (
    <>
      <Navbar />
      <center>
        <h1>Update Your Profile</h1>
      </center>
      <div
        className={classes.profBg}
        style={{ backgroundImage: `url(${profImage})` }}
      >
        <div>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form} ${classes.profMainForm} `}
          >
            <TextField
              name="tag"
              variant="outlined"
              label="Tags (coma separated)"
              value={tag}
              placeholder=""
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  tag: e.target.value.split(","),
                })
              }
              fullWidth
            />
            <TextField
              name="skills"
              variant="outlined"
              label="Skills"
              fullWidth
              value={skills}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  skills: e.target.value.split(","),
                })
              }
            />
            <TextField
              name="interests"
              variant="outlined"
              label="Interests"
              fullWidth
              value={interests}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  interests: e.target.value.split(","),
                })
              }
            />

            {/*<TextField name="title" variant="outlined" label="Title" fullWidth />*/}

            <div className={classes.fileInput}>
              Upload Avatar : <input type="file" />
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              size="large"
              type="submit"
              fullWidth
            >
              Update
            </Button>
            <Button
              onClick={clear}
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
            >
              Clear
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
