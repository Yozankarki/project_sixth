require('dotenv').config();
const Room = require('../Model/RoomSchema');

/**POST: http://localhost:3000/room/add */
module.exports.addRooms = async (req, res, next) => {
    try {
        const { type, price, description, location, image } = req.body;
        const room = await Room.create({ type, price, description, location, image });
        return res.status(201).json({ message: "Rooms added successfully.", room });
    } catch (error) {
        return res.status(404).json({ error: "Cannot add rooms.", error });
    }
}
/**GET all rooms in the database */
module.exports.getAllRooms = async (req, res, next) => {
    try {
        const findAllRooms = await Room.find();
        if (!findAllRooms) return res.status(404).send({ error: "No Rooms Found" });
        else return res.status(201).send(findAllRooms);
    } catch (error) {
        return res.status(500).send({ error: "COnnection Error" })
    }
}

/**GET OR View Rooms from thier id*/
module.exports.getSingleRooms = async (req, res, next) => {
    try {
        const { id } = req.params;
        const findRoom = await Room.findById(id);
        if (!findRoom) return res.status(404).send({ error: "No Room Found." });
        else return res.status(201).send(findRoom);

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error', error });
    }
}