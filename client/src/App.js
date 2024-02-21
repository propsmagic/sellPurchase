import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddPost from './admin/AddPost';
import Login from './pages/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUserPosts } from './redux/actions/userAction';
import MyPosts from './pages/MyPosts';
import Header from './components/header/Header';
import PostDetails from './components/postdetails/PostDetails';

function App() {
  const dispatch = useDispatch()

  // const fetchData = async()=>{
  //   const response = await(axios.get("http://localhost:3000/posts")
  //   .catch(err => console.log(err)))
  //   dispatch(getAllUserPosts(response.data))
  // }
 
  // useEffect(()=>{
  //   fetchData();
  // },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {sessionStorage.getItem("logedIn") ? <Route path="/addpost" element={<AddPost/>}/>: <Route path="addpost" element={<h1>Please login First</h1>}/>}
        <Route path="/postdetails/:id" element={<PostDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/MyPosts" element={<MyPosts/>}/>
      </Routes>
    </div>
  );
}

export default App;