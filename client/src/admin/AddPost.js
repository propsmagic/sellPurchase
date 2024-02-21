import React, {useState } from 'react'
import classes from  './AddPost.module.css'
import Button from '../components/ui/Button';
import axios from 'axios';

function AddPost() {
  // ========input fields=======
  const[title,setTitle]= useState("");
  const[briefDescription,setBriefDesctription]= useState("");
  const[price,setPrice]= useState("");
  const[ownerName,setOwnerName]= useState("");
  

  //=========validation=========
  const[titleValidation,setTitleValidation] = useState(false);
  const[briefDescriptionValidation,setBriefDescriptionValidation] = useState(false);
  const[priceValidation,setPriceValidation]= useState(false);
  const[ownerNameValidation,setOwnerNameValidation]= useState(false);

  //=======image upload============

  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')


  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  //========constructing form data======
  const postSubmitHandler =(event)=>{
    event.preventDefault();


    // let formData = new FormData()
    // formData.append('file', image.data)

    
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const post = {
      //id: Math.floor(Math.random()*10000),
      title : title,
      briefDescription: briefDescription,
      price: price,
      file: image,
      ownerName: ownerName,
      userID: sessionStorage.getItem("userID"),
      date: day+" "+months[month]+" "+year
    }

    console.log(sessionStorage.getItem("logedIn"))

    //posting file========
    let formData = new FormData()
    formData.append('file', image.data)
    // const postFile = async()=>{
    // let formData = new FormData()
    // formData.append('file', image.data)
    // const response = await(axios.post('http://localhost:8000/savepost',formData))
    // if (response) setStatus(response.statusText)
    // }
    // postFile()


    //========posting data==========

    const postData = async(post,formData)=>{
      formData.append('post',post)
      console.log(post,formData)
      //const response = await(axios.post("http://localhost:3000/posts",post)
      const response = await(axios.post("http://localhost:8000/savepost",formData)
        .then(res=>{
          console.log(res.post);
      
        })
      )
      
    } 
    postData(post,formData);

    //=======reset input fields=====
    setTitle('');
    setBriefDesctription('') 
    setPrice("")
    setOwnerName("")
  }

  return (
    <div>
        <div className={classes.formContainer}>
          <form className={classes.postForm} onSubmit={postSubmitHandler} encType="multipart/form-data">
            <h3>Add a Post</h3>
            <div className={classes.inputGroup}>
              <label>Title</label>
              <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={(event)=>{setTitle(event.target.value);
                title.length<3 || title.length>25?setTitleValidation(false):setTitleValidation(true)
              }}
              className={titleValidation ? classes.validationTrue : classes.validationFalse}
              />
            </div>
            <div className={classes.inputGroup}>
              <label>Description</label>
              <textarea 
              type="text" 
              name="description" 
              rows="5"
              value={briefDescription} 
              onChange={(event)=>{setBriefDesctription(event.target.value)
                briefDescription.length<10 || briefDescription.length>250 ? setBriefDescriptionValidation(false) : setBriefDescriptionValidation(true)
              }} 
              className={briefDescriptionValidation ? classes.validationTrue : classes.validationFalse}
              />
            </div>
            <div className={classes.inputGroup}>
              <label>Price</label>
              <input 
              type="number" 
              name="price" 
              value={price} 
              onChange={(event)=>{setPrice(event.target.value)
                price<99 || price>10000000 ? setPriceValidation(false) : setPriceValidation(true)
              }} 
              className={priceValidation ? classes.validationTrue : classes.validationFalse}
              />
            </div>
            <div className={classes.inputGroup}>
              <label>Owner Name</label>
              <input 
              type="text" 
              name="ownerName" 
              value={ownerName} 
              onChange={(event)=>{setOwnerName(event.target.value)
                ownerName.length<3 || ownerName.length>25?setOwnerNameValidation(false):setOwnerNameValidation(true)
              }} 
              className={ownerNameValidation ? classes.validationTrue : classes.validationFalse}
              />
            </div>
            <div className={classes.inputGroup}>
              <label>Upload Picture</label>
              {image.preview && <img src={image.preview} width='100' height='100' />}
              <input type='file' name='file' onChange={handleFileChange}></input>
            </div>
            <div className={classes.inputGroup}>
              <Button
              type="submit"
              buttonName = {"submit"}
            />
            </div>
          </form>
          {status && <h4>{status}</h4>}
        </div>
    </div>
  )
}

export default AddPost