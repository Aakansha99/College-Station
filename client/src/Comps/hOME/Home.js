import ProfileItem from "./ProfileItem";
import React, { useContext, useEffect, useRef } from "react";
import ProfileContext from "../../Profile/ProfileContext";
import useStyles from "../Posts/allpoststyle";
import useStyl from "../Posts/Form/styles";
import landImage from "./assets/landingpage.png";
import aboutImage from "./assets/Waves.svg";
import aboutImag from "./assets/Wave.png";
import connectImage from "./assets/connectwithus.jpg";
import contactImage from "./assets/contact.png";
import footerImage from "./assets/footer.png";
import createProfile from "./assets/createprofile.png";
import askAndClear from "./assets/askandclear.png";
import studyTogether from "./assets/studytogethe.jpg";
import codeTogether from "./assets/codetogether.jpg";
import addNotes from "./assets/addnotes.png";
import getNote from "./assets/getnote.png";
import projectColab from "./assets/colab.png";
import rateProfiles from "./assets/rateprofiles.png";
import { Grid, CircularProgress } from "@material-ui/core";
import ContactForm from "../Contact-us-form/ContactUs"

const Home = () => {
  const profileContext = useContext(ProfileContext);
  console.log(profileContext);
  function MouseOver1(event) {
    event.target.style.background = "#5d7fcf";
  }
  function MouseOver2(event) {
    event.target.style.background = "#83b5d6";
  }
  function MouseOver3(event) {
    event.target.style.background = "#6fb0ad";
  }
  function MouseOver4(event) {
    event.target.style.background = "#bd9bcc";
  }
  function MouseOver5(event) {
    event.target.style.background = "#adcc9b";
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }
  const {
    profile,
    filtered,
    filterProfile,
    clearFilter,
    GetAllProfile,
  } = profileContext;

  const text = useRef("");
  const classes = useStyles();
  const classses = useStyl();
  useEffect(() => {
    GetAllProfile();
    // if (filtered === null) {
    //     text.current.value = "";
    //   }
  }, []);
  // if (profile.length === 0 || !profile.length) {
  //   return <CircularProgress />;
  // }
  const onChange = (e) => {
    console.log(text.current.value);
    if (text.current.value !== "" && text.current.value) {
      filterProfile(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <>
      <center>
        <input
          onChange={onChange}
          ref={text}
          class="form-control form-control-lg"
          type="text"
          placeholder="Search by username"
          id="inputLarge"
          autoComplete="off"
          style={{ width: "90%", borderRadius: "10px" }}
        ></input>
      </center>

      <div className={classes.container}>
        {filtered !== null ? (
          filtered.map((pro) => (
            <div key={pro._id}>
              <ProfileItem pro={pro} />
            </div>
          ))
        ) : (
          <div>
            <div
              className={classses.land}
              style={{
                backgroundImage: `url(${landImage})`,
                margin: "-5px 0 0 0",
              }}
            >
              <div
                style={{ position: "absolute", top: "300px", right: "250px" }}
              >
                <h1
                  style={{
                    color: "#253898",
                    fontWeight: "800",
                    fontSize: "3rem",
                    fontFamily: "emoji",
                  }}
                >
                  One stop solution for{" "}
                </h1>
                <h1
                  style={{
                    color: "#253898",
                    fontWeight: "800",
                    fontSize: "3rem",
                    fontFamily: "emoji",
                  }}
                >
                  all Developers
                </h1>
                <h4
                  style={{
                    color: "#5d85b0",
                    fontWeight: "600",
                    fontSize: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  #TheNewNormal
                </h4>
              </div>
            </div>

            <div>
              <img
                src={aboutImage}
                className={classses.about}
                alt="BigCo Inc. logo"
              />
              <div className={classses.row}>
                <div className={classses.tag}>
                  We connect developers and mentors to make your career stand
                  out from the noise
                </div>
                <div className={classses.column}>
                  <div
                    className={classses.card}
                    onMouseOver={MouseOver1}
                    onMouseOut={MouseOut}
                  >
                    Find Mentors And Teammates as per the Rating on their
                    profile
                  </div>
                </div>
                <div className={classses.column}>
                  <div
                    className={classses.card}
                    onMouseOver={MouseOver2}
                    onMouseOut={MouseOut}
                  >
                    Ask and Clear Doubts
                  </div>
                </div>
                <div className={classses.column}>
                  <div
                    className={classses.card}
                    onMouseOver={MouseOver3}
                    onMouseOut={MouseOut}
                  >
                    Join Projects Or Research Open for Collaboration
                  </div>
                </div>
                <div className={classses.column}>
                  <div
                    className={classses.card}
                    onMouseOver={MouseOver4}
                    onMouseOut={MouseOut}
                  >
                    Find Or Upload Notes
                  </div>
                </div>
                <div className={classses.column}>
                  <div
                    className={classses.card}
                    onMouseOver={MouseOver5}
                    onMouseOut={MouseOut}
                  >
                    Study And Code Together
                  </div>
                </div>
              </div>

              <img
                src={aboutImage}
                className={classses.aboutt}
                alt="BigCo Inc. logo"
              />
            </div>

            <img
              src={connectImage}
              className={classses.connect}
              alt="BigCo Inc. logo"
            />

            <div className={classses.connectbelow}>
              <a className={classses.signinbutton} href="#">
                Sign In
              </a>
              <a className={classses.signuppbutton} href="#">
                SignUp
              </a>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={createProfile}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>Create Your Profile</div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Create Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={classses.features}>Features</div>

            <div className={classses.rowfeatures}>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>ASK AND CLEAR DOUBTS</div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Ask or Clear Doubts
                    </a>
                  </div>
                </div>
              </div>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={askAndClear}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={studyTogether}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>STUDY TOGETHER</div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Study Together
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>CODE TOGETHER</div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Code Together
                    </a>
                  </div>
                </div>
              </div>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={codeTogether}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={addNotes}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>
                    ADD YOUR NOTES TO HELP OTHER MATES
                  </div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Add Notes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>
                    GET NOTES OF YOUR OWN UNIVERSITY
                  </div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Get Notes
                    </a>
                  </div>
                </div>
              </div>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={getNote}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={projectColab}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>
                    COLLAB IN PROJECTS OR RESEARCH OF YOUR FELLOW MATES OR
                    PROFESSORS
                  </div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Collab in Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={classses.rowfeatures}>
              <div className={classses.columncont}>
                <div className={classses.cardprod}>
                  <div className={classses.prodhead}>
                    RATE PROFILES FOR RECOMMENDATION
                  </div>

                  <div className={classses.proddesc}>
                    Easy Setup and Workflow in minutes
                    <a className={classses.signinbutton} href="#">
                      Rate Profiles
                    </a>
                  </div>
                </div>
              </div>
              <div className={classses.columnimg}>
                <div className={classses.cardprod}>
                  <img
                    src={rateProfiles}
                    className={classses.prod}
                    alt="BigCo Inc. logo"
                  />
                </div>
              </div>
            </div>

            <img
              src={contactImage}
              className={classses.contact}
              alt="BigCo Inc. logo"
            />
           
            <ContactForm />
            <center style={{ margin: "3rem 0 -3rem 0" }}>
              <h1>Upcoming Features:</h1>
            </center>
            <div
              className={classses.land}
              style={{ backgroundImage: `url(${footerImage})` }}
            >
              <div className={classses.rowf}>
                <div className={classses.columnf}>
                  <div
                    className={classses.cardf1}
                    onMouseOver={MouseOver1}
                    onMouseOut={MouseOut}
                  >
                    Write and View Blogs Here Itself
                  </div>
                </div>
                <div className={classses.columnf}>
                  <div
                    className={classses.cardf2}
                    onMouseOver={MouseOver2}
                    onMouseOut={MouseOut}
                  >
                    Integration Of Whiteboard, Chatbox and Videocalls during
                    Study and Code Together
                  </div>
                </div>
                <div className={classses.columnf}>
                  <div
                    className={classses.cardf3}
                    onMouseOver={MouseOver3}
                    onMouseOut={MouseOut}
                  >
                    Plagiarism will be checked before posting something
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
