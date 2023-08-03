import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE 
router.post('/',verifyAdmin,createHotel);
// Update 
router.put('/:id',verifyAdmin,updateHotel)
// DELETE
router.delete('/:id',verifyAdmin,deleteHotel)
// GET
router.get('/find/:id',getHotel)
// GETALL
router.get('/',getHotels)
// count property by city like berlin , madrid
router.get('/countByCity',countByCity);
// count property by type like hotels,apartments,villas
router.get('/countByType',countByType);
router.get("/room/:id",getHotelRooms);



export default router;