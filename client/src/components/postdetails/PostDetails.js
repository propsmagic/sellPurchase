import React from 'react'
import classes from './PostDetails.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useGetApi } from '../CustomeApi';

function PostDetails() {
  useGetApi('http://localhost:3000/posts');
  const allPosts  = useSelector((state)=>state.allPosts);
  //const[postData,setPostData]=useState()
  const {id} = useParams();
  const postById = allPosts.posts.filter((item)=>item.id ===id );
  return (
    <React.Fragment>
      {postById.map((item,index)=>
      <div key={index} className={classes.postDetailContaineer}>
        <div>
          <img src="../media/table.jpg" />
        </div>
        <div>
          <div className={classes.detailBox}>
            <h3>{item.title}</h3>
            <p>{item.briefDescription}</p>
            <table>
              <tbody>
                <tr>
                  <td>Price: <b>{item.price}</b></td>
                  <td>Posted Date: <b>{item.date}</b></td>
                </tr>
                <tr>
                  <td>Owner Name: <b>{item.ownerName}</b></td>
                  <td>Owner Name: <b>{item.ownerName}</b></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.chatBox}>
            
          </div>
          <div className={classes.chatpanel}>
            <input type /><button>Chat</button>
          </div>
        </div>
      </div>
      )}
    </React.Fragment>
  )
}

export default PostDetails