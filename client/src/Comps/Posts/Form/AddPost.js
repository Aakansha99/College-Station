import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import PostContext from "../../../Post/PostContext";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import newPostImage from "./assets/newPostImage.png";

const AddPost = () => {
  const postContext = useContext(PostContext);
  console.log(postContext);
  const { AddPost, current, updatePost } = postContext;
  const history = useHistory();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    heading: "",
    links: "",

    problem: "",

    solution: "",
    hashtags: "",
    team_member: "",
  });
  const {
    title,
    heading,
    links,
    problem,
    solution,
    hashtags,
    team_member,
  } = postData;
  useEffect(() => {
    if (current) {
      setPostData(current);
    } else {
      setPostData({
        title: "",
        heading: "",
        links: "",
        problem: "",
        solution: "",
        hashtags: "",
        team_member: "",
      });
    }
  }, [postContext, current]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (current === null) {
      AddPost(postData, history);
    } else {
      updatePost(postData, history);
    }
  };
  return (
    <>
      {/* <Nav /> */}
      <Paper className={classes.paper}>
        <center>
          <Typography variant="h2">
            {current ? `Update a post ` : "Create a post"}
          </Typography>
        </center>
        <div
          className={classes.postBg}
          style={{ backgroundImage: `url(${newPostImage})` }}
        >
          <div>
            <form
              autoComplete="off"
              noValidate
              className={`${classes.root} ${classes.form} ${classes.postMainForm}`}
              onSubmit={handleSubmit}
            >
              <TextField
                value={title}
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
              <TextField
                name="heading"
                variant="outlined"
                label="Heading"
                fullWidth
                value={heading}
                onChange={(e) =>
                  setPostData({ ...postData, heading: e.target.value })
                }
              />
              {/* <TextField
            name="problem_heading"
            variant="outlined"
            label="Problem_Heading"
            fullWidth
            value={problem_heading}
            onChange={(e) => setPostData({ ...postData, problem_heading: e.target.value })}
          /> */}
              <TextField
                name="problem"
                variant="outlined"
                label="Problem"
                fullWidth
                multiline
                rows={4}
                value={problem}
                onChange={(e) =>
                  setPostData({ ...postData, problem: e.target.value })
                }
              />
              {/* <TextField
            name="solution_heading"
            variant="outlined"
            label="Solution_Heading"
            fullWidth
            value={solution_heading}
            onChange={(e) => setPostData({ ...postData,solution_heading: e.target.value })}
          /> */}
              <TextField
                name="solution"
                variant="outlined"
                label="Solution"
                fullWidth
                multiline
                rows={4}
                value={solution}
                onChange={(e) =>
                  setPostData({ ...postData, solution: e.target.value })
                }
              />
              <TextField
                name="hashtags"
                variant="outlined"
                label="Hash Tag (coma separated)"
                fullWidth
                value={hashtags}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    hashtags: e.target.value.split(","),
                  })
                }
              />
              <TextField
                name="links"
                variant="outlined"
                label="url (coma separated)"
                fullWidth
                value={links}
                onChange={(e) =>
                  setPostData({ ...postData, links: e.target.value.split(",") })
                }
              />
              <TextField
                name="team_member"
                variant="outlined"
                label="Team Members (coma separated)"
                fullWidth
                value={team_member}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    team_member: e.target.value.split(","),
                  })
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
                {current ? `Update Post ` : "Add Post"}
              </Button>
              <Button
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
      </Paper>
    </>
  );
};

export default AddPost;
