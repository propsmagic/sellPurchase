import React, { useContext, useState } from 'react';
import classes from "./Header.module.css";
//import Button from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import FilterContext from '../store/filterPosts/FilterContext';
import {AiOutlineLogin, AiOutlineLogout, AiOutlineSearch} from 'react-icons/ai';
import useGetApi from '../useGetApi';
//import AddPost from '../../admin/AddPost';
import { useSelector } from 'react-redux';

function Header() {
  const [searchKey, setSearchKey] = useState("")
  const navigate = useNavigate();
  const searchValue = useContext(FilterContext)

  //set the searched value 
  const searchHandler = (event) => {
    event.preventDefault();
    searchValue.setValue(searchKey)
    setSearchKey("")
  }
   
  const allPosts = useSelector((state)=>state.allPosts.posts);
  const userPosts = allPosts.filter((item)=>
    item.userID === sessionStorage.getItem("userID")
  );


  return (
    <header>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>
          <img src="./media/findAnythigLogo.png" alt="logo" />
        </div>
        <form onSubmit={searchHandler} className={classes.headerButtonPannel}>
          <input onChange={(event) => setSearchKey(event.target.value)} value={searchKey} placeholder='type here...' />
          <button type="submit" className={classes.searchButton}><AiOutlineSearch/></button>
        </form>
        <div className={classes.navigationPanel}>
          <ul>
            <li><Link to={"MyPosts"}>My Posts<sup>{sessionStorage.getItem("logedIn")? userPosts.length : ""}</sup></Link></li>
            <li ><Link to={"AddPost"}>Add Post</Link></li>
            <li><Link to={"./"}>My Wishlist</Link></li>
          </ul>
        </div>
        <div>
        {sessionStorage.getItem("logedIn") ? <a
            onClick={() => {
              sessionStorage.clear("");
              navigate("/")
            }}
          ><AiOutlineLogout/></a> :
            <a
            onClick={() => {
                navigate("/login")
              }}
            a>
              <AiOutlineLogin/>
            </a>
          }
        </div>
      </div>
    </header>
  )
}

export default Header