import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Comps/hOME/Home";
import Mentor from "./Comps/Auth/MentorAuth";
import Student from "./Comps/Auth/UserAuth";
import Investor from "./Comps/Auth/InvestorAuth";
import Profile from "./Comps/Profile/GetProfile/Profile";
import ProfileUpdate from "./Comps/Profile/UpdateProfile/UpdateProfile";
import EditExp from "./Comps/Profile/UpdateProfile/EditExperience";
import AddExp from "./Comps/Profile/UpdateProfile/AddExperience";
import AuthToken from "./Auth/AuthToken";
import AddEdu from "./Comps/Profile/UpdateProfile/AddEducation";
import AddPost from "./Comps/Posts/Form/AddPost";
import Posts from "./Comps/Posts/Posts";
import PostDetails from "./Comps/Posts/postDetails/PostDetails";
import ProfileDetails from "./Comps/Profile/ProfileDetail";
import Navbar from "./Comps/Navbar/Header";
import Collab from "./Comps/CollabCard/CollabCard";
import AuthState from "./Auth/AuthState";
import ProfileState from "./Profile/ProfileState";
import PostState from "./Post/PostState";
import AskQuerry from "./Comps/Querry/AskQuerry";
import QuerryState from "./Query/QuerryState";
import AskByPeer from "./Comps/Querry/AskByPeers";
import askedByMe from "./Comps/Querry/AskByMe";
import answeredByMe from "./Comps/Querry/AnsweredByMe";
import Project from "./Comps/hOME/Projects";
import UploadNotes from "./Comps/Notes/UploadNotes";
import GetNotes from "./Comps/Notes/GetNotes";
import Chat from "./Comps/chat/Chat";
import Editor from "./Editor/Editor";
import Footer from "./Comps/Footer/Footer";

if (localStorage.token) {
  AuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <QuerryState>
        <PostState>
          <ProfileState>
            <BrowserRouter>
              <Fragment>
                <Navbar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/projects" exact component={Project} />
                  <Route path="/student-auth" exact component={Student} />
                  <Route path="/investor-auth" exact component={Investor} />
                  {/* <Route path="/mentor-auth" exact component={Mentor} /> */}
                  <Route path="/profile" exact component={Profile} />
                  <Route
                    path="/profile-update"
                    exact
                    component={ProfileUpdate}
                  />
                  <Route path="/edit-exp" exact component={EditExp} />
                  <Route path="/add-exp" exact component={AddExp} />
                  <Route path="/add-edu" exact component={AddEdu} />
                  <Route path="/posts" exact component={Posts} />
                  <Route path="/collab/:id" component={PostDetails} />
                  <Route path="/profile/:id" component={ProfileDetails} />
                  <Route path="/create-post" exact component={AddPost} />
                  <Route path="/collab" exact component={Collab} />
                  <Route path="/askQuery" exact component={AskQuerry} />
                  <Route path="/askedByPeers" exact component={AskByPeer} />
                  <Route path="/askedByMe" exact component={askedByMe} />
                  <Route path="/answeredByMe" exact component={answeredByMe} />
                  <Route path="/uploadNotes" exact component={UploadNotes} />
                  <Route path="/getNotes" exact component={GetNotes} />
                  <Route path="/editor" exact component={Editor} />
                  <Route path="/chat" exact component={Chat} />
                </Switch>
                <Footer />
              </Fragment>
            </BrowserRouter>
          </ProfileState>
        </PostState>
      </QuerryState>
    </AuthState>
  );
}

export default App;
