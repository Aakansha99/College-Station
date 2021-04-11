import React, { useReducer } from "react";
import axios from "axios";
import QuerryContext from "./QuerryContext";
import QuerryReducer from "./QuerryReducer";
import { ASK_QUERY,ANS_QUERY,ASK_BY_PEERS,ASK_BY_ME,ANS_BY_ME,LIKE_QUE,DISLIIKE_QUE } from "../Constants/actionTypes";


const QuerryState = (props) => {

    const initialState = {
        querry: [], 
        user:null,
        solution:[]
      };
      const [state, dispatch] = useReducer(QuerryReducer, initialState)

      const Askquerry =async(que,history)=>{
        const config = {
            headers: {
              "Conten-Type": "application/json",
            },
          };
          try {
            const res = await axios.post(`/api/querry/askQuery`, que, config);
            dispatch({
              type: ASK_QUERY,
              payload: que,
            });
            history.push('/profile')
          } catch (error) {
            console.log(error);
          }
      }
      const AskByMe = async () => {

        try {
          const res = await axios.get(`/api/querry/askedByMe`);
        console.log(res);
          dispatch({
            type: ASK_BY_ME,
            payload: res,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const AskByPeer = async () => {

        try {
          const res = await axios.get(`/api/querry/askedByPeers`);
        console.log(res);
          dispatch({
            type: ASK_BY_PEERS,
            payload: res,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const Answerquerry =async(ans,history,id)=>{
          console.log(ans,id);
        const config = {
            headers: {
              "Conten-Type": "application/json",
            },
          };
          try {
            const res = await axios.post(`/api/querry/answered/${id}`, ans, config);
            dispatch({
              type: ANS_QUERY,
              payload: ans,
            });
            history.push('/askedByPeer')
          } catch (error) {
            console.log(error);
          }
      }
      const AnsByMe = async () => {

        try {
          const res = await axios.get(`/api/querry/answeredByMe`);
        console.log(res);
          dispatch({
            type: ANS_BY_ME,
            payload: res,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const Like = async (id,history) => {

        try {
          const res = await axios.get(`/api/querry/like/${id}`);
        console.log(res);
          dispatch({
            type:LIKE_QUE,
            payload: res,
          });
          history.push('/askedByMe')
        } catch (error) {
          console.log(error);
        }
      };
      const DisLike = async (id,history) => {

        try {
          const res = await axios.get(`/api/querry/dislike/${id}`);
        console.log(res);
          dispatch({
            type: DISLIIKE_QUE,
            payload: res,
          });
          history.push('/askedByMe')
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <QuerryContext.Provider
      value={{
        querry: state.querry,
        user:state.user,
        solution:state.solution,
        Askquerry,
        AskByMe,
        AskByPeer,
        Answerquerry,
        AnsByMe,
        Like,
        DisLike
      
       
       
      }}
    >
      {props.children}
    </QuerryContext.Provider>
    )
}

export default QuerryState
