import React, { useReducer } from "react";
import PostContext from "./PostContext";
import PostReducer from "./PostReducer";
import axios from "axios";
import {
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    SET_CURRENT_POST,
    CLEAR_CURRENT_POST,
    GET_POSTBYUSER,
    LIKE,
    GET_POSTBYID,
    GETAllPOST,FILTER_POST,CLEAR_FILTER_POST,UPDATE_COLLAB
  } from "../Constants/actionTypes";


  const PostState = (props) => {
    const initialState = {
        posts: [],
        postId:null,
        current: null,
        filtered:null
      };
      const [state, dispatch] = useReducer(PostReducer, initialState);

      const AddPost = async (post,history) => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          await axios.post("/api/posts", post, config);
          dispatch({
            type: ADD_POST,
            payload: post,
          });
          history.push("/");
        } catch (error) {
          console.log(error);
        }
      };
      const GetPostByUser = async (id) => {
        console.log(id);
        try {
          const res = await axios.get(`/api/posts/${id}`);
          console.log(res.data);
          dispatch({
            type: GET_POSTBYUSER,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const GetPostById = async (id) => {
        console.log(id);
        try {
          const res = await axios.get(`/api/posts/${id}/post`);
          console.log(res.data);
          dispatch({
            type: GET_POSTBYID,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const GetAllPost = async () => {
      
        try {
          const res = await axios.get(`/api/posts`);
          console.log(res.data);
          dispatch({
            type: GETAllPOST,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const deletePost = async (_id) => {
        try {
          console.log(_id, "ahscjgasvcgav");
          await axios.delete(`/api/posts/${_id}`);
          dispatch({ type: DELETE_POST, payload: _id });
        } catch (error) {
          console.log(error);
        }
      };
      const setCurrent = (post,history) => {
        dispatch({ type: SET_CURRENT_POST, payload: post });
        history.push("/create-post");
      };
      const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT_POST });
      };
      const updatePost = async (post,history) => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          console.log(post._id, "ahscjgasvcgav");
          const res = await axios.patch(`/api/posts/${post._id}`, post, config);
          dispatch({ type: UPDATE_POST, payload: res.data });
          history.push(`post/${post._id}`);
        } catch (error) {
          console.log(error);
        }
      };
      const updateCollab = async (post,history) => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          console.log(post._id, "ahscjgasvcgav");
          const res = await axios.patch(`/api/posts/${post._id}/collab`, config);
          dispatch({ type: UPDATE_COLLAB, payload: res.data });
          history.push(`collab/${post._id}`);
        } catch (error) {
          console.log(error);
        }
      };
      const likePost = async (_id) => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          const res = await axios.patch(`/api/posts/${_id}/likePost`, config);
          dispatch({ type: LIKE, payload: res.data });
        } catch (error) {
          console.log(error);
        }
      };
      const filterPost=(text)=>{
        dispatch({ type: FILTER_POST, payload: text });
      }
      const clearFilter=(text)=>{
        dispatch({ type: CLEAR_FILTER_POST, payload: text });
      }
      return (
        <PostContext.Provider
        value={{
          posts: state.posts,
          postId: state.postId,
          current: state.current,
          filtered:state.filtered,
          AddPost,
          GetPostByUser,
          deletePost,
          setCurrent,
          clearCurrent,
          updatePost,
          likePost,
          GetPostById,
          GetAllPost,
          filterPost,
          clearFilter,
          updateCollab
        }}
      >
        {props.children}
      </PostContext.Provider>
      )
  }
  
  export default PostState
  