const express = require('express');
const app = express();
const cors = require('cors')
//const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const multer = require('multer')


//app.use(fileUpload)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    port: 3306,
    password: "root123",
    database: "findanything",
    insecureAuth : true
})

db.connect((err)=>{
    if(err){
        console.log("error in connecting database", err)
    }else{
        console.log("database connected")
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })

const upload = multer({ storage: storage })


app.post("/savepost", upload.single('file'), function(req,res){
    const post = req.body;
    console.log(post)
    res.send("received");
});

const start = async()=>{
    try{app.listen(8000,()=>{
        console.log("im am connected")
    });
    } catch (error){
        console.log(err)
    }
}
start()