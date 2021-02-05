var express = require('express');
var router = express.Router();
var Contact=require('../models/contact');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('contact');
});



router.post('/addcontact', function(req, res, ) {
 var input=JSON.parse(JSON.stringify(req.body));
  
  console.log(input.name);
  console.log(input.mobile);
  console.log(input.email);
  console.log(input.password);
 
 console.log(req.body);
  Contact.create(req.body,function(err,post){
    if (err){
      console.log(err);
    }else{
      res.send(post);//or res.JSON can be used
      res.render('/about',{data : post});
    }
  });
});



router.post('/login', function(req, res, ) {
  var input=JSON.parse(JSON.stringify(req.body));
   
   
   console.log(input.email);
   console.log(input.password);
  
  console.log(req.body);
   Contact.findOne({email:req.body.email,password:req.body.password},function(err,post){
     if (err){
       console.log(err);
     }else{
       //res.send(post);//or res.JSON can be used
      // res.render('editcontact',{data : post});
      req.session.email=post.email;
      
      res.render('appointments'
      );
     }
   });
 });



 router.post('/booking', function(req, res, ) {
  var input=JSON.parse(JSON.stringify(req.body));
   
   console.log(input.name);
   console.log(input.mobile);
   console.log(input.gender);
   console.log(input.service);
   console.log(input.date);
   console.log(input.time);
   
  console.log(req.body);  
    Contact.create(req.body,function(err,post){
     if (err){
       console.log(err);
     }else{
       if(req.session.email!=''){
        res.render('appointment1');
       }
       else{     
          res.render('appointment2');
      }
    }     
   });
 });


 router.get('/logout', function(req, res, ){
   req.session.destroy(err=>
    { console.log(err);
      res.redirect('/');
    })
 });

router.post('/add',function(req,res){
  var img=req.files.pic;
  console.log(sampleFile.name)
  img.mv('public/upload/'+img.name ,function(err){
    if(err)
    return res.status(500).send(err);
    res.send('File Uploaded!');
  })
})

/*pptsorcecode bpl.185.trainer14@gmail.com*/











  module.exports = router;