import React, { useContext, useEffect } from "react";
import PostContext from "../../Post/PostContext";
import { Grid, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./allpoststyle";
import Nav from "../Navbar/Header";

import POST from "./Post";

const AllPostByUser = () => {
  const postContext = useContext(PostContext);
  console.log(postContext);
  const { posts, GetPostByUser } = postContext;

  const classes = useStyles();

  useEffect(() => {
    GetPostByUser(localStorage.id);
  }, []);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
      {/* <Nav /> */}
      <div>
        {posts.map((post) => (
          <div key={post._id} >
            <POST post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPostByUser;
