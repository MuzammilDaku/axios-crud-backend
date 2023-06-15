var express = require("express");
var router = express.Router();
const Student = require("../db/models/models");
const multer  = require('multer');
const upload = multer();
/* GET users listing. */

// router.get('/', function(req, res, next) {
//  console.log('testing');
// });

// Create a New Student
router.post("/",upload.any(), async (req, res) => {
  try {
    console.log(req.body);
    const user = await new Student(req.body);
    const result = await user.save().then(() => {
      res.status(201).send(user);
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await Student.find();
    res.send(getData);
  } catch (e) {
    console.log(e);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);
    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send()
  }
});
router.patch("/:id", async (req, res) => {
  try{
    const _id = req.params.id;
    console.log(_id)
    const updateStudent = await Student.findByIdAndUpdate({_id },req.body,{
      new:true
    });
    console.log(updateStudent);
       if (!updateStudent) {
      res.status(404).send();
    } else {
      res.send(updateStudent);
    }
   }
   catch(e){
    console.log('we are in catch',e)
   res.status(404).send()
  }
});

router.delete('/:id',async(req,res)=>{
  try{
    const _id = req.params.id
    const deleteStudent = await Student.findByIdAndDelete(req.params.id)
    if(!deleteStudent){
     return res.status(400).send()
    }else{
      res.send(deleteStudent)
    }
  }catch(e){
    res.status(500).send()
    console.log('We are in catch error' ,e)
  }

})


module.exports = router;
