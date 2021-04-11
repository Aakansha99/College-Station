import React, { useContext ,useEffect ,useRef} from 'react'
import Navbar from '../Navbar/Header'
import Search from "../SearchBar/Search"

import PostContext  from '../../Post/PostContext'
import PostItem from './PostItem'
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from '../Posts/allpoststyle';


const Home = () => {
    const postContext=useContext(PostContext)
    console.log(postContext);
    const text = useRef("");
    const classes = useStyles();
    const {posts,GetAllPost,filtered,filterPost,clearFilter}=postContext
    useEffect(() => {
        GetAllPost()
        // if (filtered === null) {
        //     text.current.value = "";
        //   }
    }, [])
    if(posts.length===0 || !posts.length ){
        return  <CircularProgress />
      }
      const onChange = (e) => {
        console.log(text.current.value);
        if (text.current.value !== "" && text.current.value) {
          filterPost(e.target.value);
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
              placeholder="Search by title or name"
              id="inputLarge"></input>
        
         <div className={classes.container} >
      {filtered !==null ? filtered.map((post) => (
        <div key={post._id} >
          <PostItem post={post}  />
        </div>

      )):posts.map((post) => (
        <div key={post._id} >
          <PostItem post={post}  />
        </div>
      )) }
       </div>
            
        </>
    )
}

export default Home
