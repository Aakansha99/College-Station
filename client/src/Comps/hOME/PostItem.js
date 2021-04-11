import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import GroupIcon from "@material-ui/icons/Group";

import moment from "moment";
import useStyles from "./style";

const PostItem = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.posttime}>
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Typography variant="h5">{post.creatorName}</Typography>

          <Typography
            variant="h5"
            color="textSecondary"
            component="p"
            className={classes.posttitle}
          >
            {post.title}
          </Typography>

          <Typography
            variant="h5"
            color="textSecondary"
            component="p"
            className={classes.posthead}
          >
            {post.heading}
          </Typography>

          <Typography
            variant="body1"
            color="textPrimary"
            component="p"
            className={classes.postproblem}
          >
            {post.problem}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Typography variant="h5" color="secondary" component="h2">
            <GroupIcon /> Team Members:{" "}
            {post.team_member.map((team) => `${team}, `)}
          </Typography>
          <Typography variant="h5" color="secondary" component="h2">
            # HashTags: {post.hashtags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        <CardActions className={classes.cardActions}>
          <Link to={`/collab/${post._id}`}>
            <Button color="primary" size="large">
              Know More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default PostItem;
