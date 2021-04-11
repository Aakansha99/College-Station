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
import "./style.css";

import moment from "moment";
import useStyles from "./style";
const ProfileItem = ({ pro }) => {
  const classNamees = useStyles();
  return !pro ? (
    <CircularProgress />
  ) : (
    <>
      <Card classNameName={classNamees.card}>
        <CardContent>

        <Typography variant="h6" className={classNamees.posttime}>
        {moment(pro.createdAt).fromNow()}
      </Typography>
          
  
          <Typography variant="h5" color="textSecondary" component="p" className={classNamees.posttitle}>
            {pro.name}
          </Typography>


          <Typography variant="h5" color="textSecondary" component="p" className={classNamees.posthead}>
          {pro.bio}
        </Typography>
          <div className={classNamees.details}>
            <Typography variant="h5" color="secondary" component="h2">
              &nbsp; Rating: &nbsp; &nbsp;
              {pro.rating}
            </Typography>
          </div>
          
          
          
        
       
         
       

          

        </CardContent>
        
       

        <CardActions classNameName={classNamees.cardActions}>
          <Link to={`/profile/${pro._id}`}>
            <Button color="primary" size="large">
              Know More
            </Button>
          </Link>
        </CardActions>
      </Card>
      {/*<div className="container">
      <div className="card">
      <p class="card__name">{pro.name}</p>
      </div>
      <button class="btn draw-border">View Profile</button>
      
    </div>*/}
    </>
  );
};

export default ProfileItem;
