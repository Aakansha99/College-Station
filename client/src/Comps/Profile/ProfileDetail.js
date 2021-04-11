import React, { useEffect, useState, useContext, Profiler } from "react";
import ProfileContext from "../../Profile/ProfileContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Nav from "../Navbar/Navbar";
import Rating from "../Rating/Rating";
import { Button } from "@material-ui/core";
import { ListGroup, Form } from "react-bootstrap";

import useStyles from "./style";
import Experience from "./GetProfile/Experience";
import Education from "./GetProfile/Education";
import "./profile.css";

import moment from "moment";
const ProfileDetail = ({ match }) => {
  const [rating, setRating] = useState(0);
  const classes = useStyles();
  const profileContext = useContext(ProfileContext);
  const { profile, getProfileById, createProfileReview } = profileContext;
  console.log(match.params.id);
  console.log(profile);

  const { success: successProfileReview } = createProfileReview;

  const submitHandler = (e) => {
    e.preventDefault();

    createProfileReview(match.params.id, {
      rating,
    });
  };

  useEffect(() => {
    if (successProfileReview) {
      setRating(0);
    }
    if (!profile._id || profile._id !== match.params.id) {
      createProfileReview();
    }
    getProfileById(match.params.id);
  }, [match]);
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
            <div class="profile-tabs">
              <ul
                class="nav nav-pills nav-pills-icons justify-content-center"
                role="tablist"
              >
                <li class="nav-item">
                  <a class="nav-link" href="/posts">
                    <i class="material-icons"></i>
                    Recent Activity
                  </a>
                </li>
                {/* <li class="nav-item">
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
                  </li> */}
              </ul>
            </div>
            <div className="tag">
              <span>{profile.tag && profile.tag.map((tag) => `#${tag}`)}</span>
            </div>
            <div className="about">
              <h4>About</h4>
              {profile.bio}
            </div>
            <div className="skills">
              <h4>Skills</h4>

              {profile.skills && profile.skills.map((skills) => ` ${skills},`)}
            </div>
            <div className="interest">
              <h4>Interests</h4>
              {profile.interests &&
                profile.interests.map((interests) => `#${interests}`)}
            </div>
            <Typography variant="h6" color="primary" component="p">
              Ratings
            </Typography>

            <Rating value={profile.rating} />
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
          </div>
          <div className="col-9"  >
            <div className="expe">
              <h1>Experiences:</h1>
              {profile.experience &&
                profile.experience.map((exp) => (
                  <div key={exp._id}>
                    <Experience exp={exp} />
                  </div>
                ))}
            </div>
            <div className="edu">
              <h1>Education: </h1>
              {profile.education &&
                profile.education.map((edu) => (
                  <div key={edu._id}>
                    <Education edu={edu} />
                  </div>
                ))}
            </div>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="rating">
                <Form.Label>Submit a Rating</Form.Label>
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </Form.Control>
              </Form.Group>

              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
