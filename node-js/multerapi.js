// To upload a file using MULTER NPM package

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
     storage:multer.diskStorage({
         destination: function (req, file, cb){
            cb(null, "views")
        },
         filename:function(req, file, cb) {
             cb(null, file.filename+"-"+Date.now()+ ".jpg")
             }
         })
    }).single("user_file");

app.post("/upload",upload,(req, resp) => {
    resp.send("file Uploaded")
});

app.listen(5000);