import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core/";
import { ListGroup, Form } from "react-bootstrap";

import Experience from "./Experience";
import Education from "./Education";
import Rating from "../../Rating/Rating";
import ProfileContext from "../../../Profile/ProfileContext";
import PostContext from "../../../Post/PostContext";
import "../profile.css";
const Profile = () => {
  const profileContext = useContext(ProfileContext);
  const {
    profile,
    GetProfile,
    setCurrent,
    createProfileReview,
  } = profileContext;

  const postContext = useContext(PostContext);
  const { post } = postContext;

  const { success: successProfileReview } = createProfileReview;

  const {
    _id,
    bio,
    name,
    tag,
    interests,
    skills,
    profile_img,
    cover_img,
  } = profile;
  const newprofile = {
    _id,
    bio,
    name,
    tag,
    interests,
    skills,
    profile_img,
    cover_img,
  };
  useEffect(() => {
    GetProfile(localStorage.id);
  }, []);

  const onEdit = () => {
    setCurrent(newprofile);
  };
  return (
    <>
      <div className="d-flex justify-content-center profile-bg">
        <div className="row profile-info">
          <div className="col-3">
            <div className="fakeimg">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
                alt={profile.name}
              />
            </div>
            <div className="username">
              <h1>{profile.name}</h1>
            </div>
            <div className="tag">
              <span>{profile.tag && profile.tag.map((tag) => `#${tag}`)}</span>
            </div>
            <div className="about">
              <h2>About</h2>
              {profile.bio}
            </div>
            <div className="skills">
              <h2>Skills</h2>

              {profile.skills && profile.skills.map((skills) => ` ${skills},`)}
            </div>
            <div className="interest">
              <h2>Interests</h2>
              {profile.interests &&
                profile.interests.map((interests) => `#${interests}`)}
            </div>
            {/* <Typography variant="h6" color="primary" component="p">
              Ratings
            </Typography>

            {profile.reviews &&
              profile.reviews.map((review) => (
                <ListGroup.Item key={review._id}>
                  <p>{review.name}</p>
                  <Rating value={review.rating} />
                  <p>{review.createdAt.substring(0, 10)}</p>
                </ListGroup.Item>
              ))}
            <Typography variant="h6" color="secondary" component="p">
              Rate a Profile
            </Typography>
            {successProfileReview && (
              <Typography variant="h3" color="secondary" component="p">
                Rating submitted successfully
              </Typography>
            )} */}
            <Link to="/profile-update">
              <button
                onClick={onEdit}
                type="button"
                className="btn btn-primary"
              >
                Edit Profile
              </button>
            </Link>
          </div>
          <div className="col-9">
            <div class="profile-tabs">
              <ul
                class="nav nav-pills nav-pills-icons justify-content-center"
                role="tablist"
              >
                <li class="nav-item">
                  <a class="nav-link" href="/posts">
                    <i class="material-icons"></i>
                    Activity
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/askQuery">
                    <i class="material-icons"></i>
                    Ask Your Query
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/askedByPeers">
                    <i class="fas fa-user-graduate"> </i>
                    Answer Peers Queries
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/askedByMe">
                    <i class="fas fa-tasks"> </i> Queries Asked By You
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/answeredByMe">
                    <i class="fas fa-heart"> </i>
                    Queries Answered By You
                  </a>
                </li>
              </ul>
            </div>
            <div className="expe">
              <h1>
                Experiences:
                <Link to="/add-exp">
                  <button className="btn btn-info">
                    <AddIcon />
                  </button>
                </Link>
              </h1>
              {profile.experience &&
                profile.experience.map((exp) => (
                  <div key={exp._id}>
                    <Experience exp={exp} />
                  </div>
                ))}
            </div>
            <div className="edu">
              <h1>
                Education:{" "}
                <Link to="/add-edu">
                  <button className="btn btn-info">
                    <AddIcon />
                  </button>
                </Link>
              </h1>
              {profile.education &&
                profile.education.map((edu) => (
                  <div key={edu._id}>
                    <Education edu={edu} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
