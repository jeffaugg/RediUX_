import express from 'express';
var router = express.Router();
import ContentServices from "../services/contents.firebase.services"

/* GET users listing. */

router.get('/list', function(req, res, next) {
    ContentServices.list(req,res)
  });
  
  router.post(  "/register",  (req,res,next)=>{
      ContentServices.register(req,res)
    }
  )
  
  router.get( "/retrieve/:id" , (req,res,next)=>{
      ContentServices.retrieve(req,res)
    }
  );
  
  router.put( "/update/:id" , (req,res,next)=>{
      ContentServices.update(req,res)
    }
  )
  
  router.delete( "/delete/:id" , (req,res,next)=>{
      ContentServices.delete(req,res)
    }
  )

  router.get('/search', (req, res, next) => {
    ContentServices.search(req, res);
  });

    
  //module.exports = router;
  export default router 