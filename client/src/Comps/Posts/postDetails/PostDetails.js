import React, { useContext, useEffect } from "react";
import Goback from "../../utils/GoBack";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, CircularProgress } from "@material-ui/core";
import PostContext from "../../../Post/PostContext";
import useStyles from "../allpoststyle";
import GroupIcon from "@material-ui/icons/Group";
import "./style.css";
import moment from "moment";

const PostDetails = ({ match }) => {
  const postContext = useContext(PostContext);
  const { postId, GetPostById } = postContext;
  console.log(postContext);
  console.log(postId);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  useEffect(() => {
    GetPostById(match.params.id);
  }, [match]);
  return postId && !postId.length ? (
    <CircularProgress />
  ) : (
    <div>
      {postId &&
        postId.map(
          (post) => (
            (<Goback />),
            (
              <div className="container-fluid d-flex justify-content-center post-container">
                <div className="row">
                  <div className="col-9">
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong>{post.title}</strong>
                      </h2>
                      <p class="card-text">
                        Posted {moment(post.createdAt).fromNow()}
                      </p>
                    </div>
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong>Problem Statement</strong>
                      </h2>
                      <p class="card-text">{post.problem}</p>
                    </div>
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong>Proposed Solution</strong>
                      </h2>
                      <p class="card-text">{post.heading}</p>
                    </div>
                    <h1>COMMENTS</h1>
                  </div>
                  <div className="col-3">
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong>About</strong>
                      </h2>
                      <p class="card-text">
                        Checkout the links below to
                        additional content and project details.<br/>
                        {post.links.map((link) => `${link} `)}
                      </p>
                    </div>
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong>
                          <GroupIcon /> Team Members{" "}
                        </strong>
                      </h2>
                      <p class="card-text">
                        {post.team_member.map((team) => `${team}, `)}
                      </p>
                    </div>
                    <div class="card-body post-details">
                      <h2 class="card-title">
                        <strong># HashTags</strong>
                      </h2>
                      <p class="card-text">
                        {post.hashtags.map((tag) => `${tag} `)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}
    </div>
  );
};

export default PostDetails;