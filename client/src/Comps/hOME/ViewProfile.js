import ProfileItem from './ProfileItem'
import React, { useContext ,useEffect ,useRef} from 'react'
import ProfileContext from '../../Profile/ProfileContext'
import useStyles from '../Posts/allpoststyle';
import { Grid, CircularProgress } from '@material-ui/core';
const Home = () => {
  
const profileContext=useContext(ProfileContext)
console.log(profileContext);
const {profile,filtered,filterProfile,clearFilter,GetAllProfile}=profileContext
  const text = useRef("");
  const classes = useStyles();
  useEffect(() => {
    GetAllProfile()
    // if (filtered === null) {
    //     text.current.value = "";
    //   }
}, [])
if(profile.length===0 || !profile.length ){
  return  <CircularProgress />
}
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
    <input onChange={onChange}
          ref={text}
          class="form-control form-control-lg"
          type="text"
          placeholder="Search by username"
          id="inputLarge"></input>
    
     <div className={classes.container} >
  {filtered !==null ? filtered.map((pro) => (
    <div key={pro._id} >
     <ProfileItem pro={pro}  />
    </div>

  )):profile.map((pro) => (
    <div key={pro._id} >
      <ProfileItem pro={pro}  />
    </div>
  )) }
   </div>
        
    </>
  )
}

export default Home
