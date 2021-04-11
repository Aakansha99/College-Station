import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";
import GroupIcon from "@material-ui/icons/Group";

import { Avatar } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import useStyles from "./poststyle";
import moment from "moment";
import PostContext from "../../Post/PostContext";

import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
const Post = ({ post }) => {
  const postContext = useContext(PostContext);
  const {
    setCurrent,
    deletePost,
    clearCurrent,
    likePost,
    updateCollab,
  } = postContext;
  console.log(post);
  const [isCollab, setIsCollab] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const onDelete = () => {
    deletePost(post._id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(post, history);
  };
  const onChange = (e) => {
    if (e.target.checked) {
      updateCollab(post, history);
    }
  };

  return (
    <Card style={{margin:"4rem auto"}} className={classes.card}>
      <CardContent>
        {/*<Typography variant="body2">{localStorage.name}</Typography>*/}

        <Typography
          variant="h5"
          color="secondary"
          component="p"
          className={classes.posttitle}
        >
          {post.title}
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          component="p"
          className={classes.posthead}
        >
          {post.heading}
        </Typography>
        <Typography variant="h6" className={classes.posttime}>
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Typography
          variant="h6"
          color="secondary"
          component="p"
          className={classes.poststat}
        >
          Problem Statement
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          className={classes.postproblem}
        >
          {post.problem}
        </Typography>
        <Typography
          variant="h6"
          color="secondary"
          component="p"
          className={classes.poststat}
        >
          Solution
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          className={classes.postsolution}
        >
          {post.solution}
        </Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant="h5" color="secondary" component="h2">
          <GroupIcon />
          &nbsp; Team Members: &nbsp; &nbsp;
          {post.team_member.map((team) => `#${team}`)}
        </Typography>
        <Typography variant="h5" color="secondary" component="h2">
          &nbsp; &nbsp; &nbsp;&nbsp;HashTags: &nbsp;
          {post.hashtags.map((tag) => `${tag}`)}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button onClick={onEdit} style={{ color: "black" }} size="small">
          Edit
          <MoreVertIcon fontSize="default" />
        </Button>
      </div>

      <CardActions className={classes.cardActions}>
        <Form>
          <Form.Group controlId="iscollab">
            <Form.Check
            style={{paddingRight: "190px"}}
              type="checkbox"
              label="Is Open for Collaboration?"
              checked={isCollab}
              onChange={onChange}
            />
          </Form.Group>
        </Form>

        <Button onClick={onDelete} size="large" color="secondary">
          <DeleteIcon fontSize="large" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
