import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
const router = express.Router();


router.post('/:hotelid',verifyAdmin,createRoom);
  
// Update 
router.put('/:id',verifyAdmin,updateRoom)
router.put('/availability/:id',updateRoomAvailability)
  
// DELETE
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom) 

// GET
router.get('/:id',getRoom)

// GETALL
router.get('/',getRooms)


export default router;