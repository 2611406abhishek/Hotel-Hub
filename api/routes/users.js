import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken ,verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next) =>{
      
//      res.send("Hello User, You are logged in ");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next) =>{
      
//     res.send("Hello User, You are logged in and you can delete your account ");
// }) 

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next) =>{
      
//     res.send("Hello User, You are logged in and you can delete any account ");
// }) 

// Update 
router.put('/:id',verifyUser,updateUser)
  
// DELETE
router.delete('/:id',verifyUser,deleteUser)

// GET
router.get('/:id',verifyUser,getUser)

// GETALL
router.get('/',verifyAdmin,getUsers)
export default router;