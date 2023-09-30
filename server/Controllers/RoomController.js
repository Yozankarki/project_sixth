require('dotenv').config();
const Room = require('../Model/RoomSchema');

/**POST: http://localhost:3000/room/add */
module.exports.addRooms = async (req, res, next) => {
    try {
        const { Name, Price, Location, Rating, Reviews, Type, Images, Pool, Gym, Spa } = req.body;
        const room = await Room.create({ Name, Price, Location, Rating, Reviews, Type, Images, Pool, Gym, Spa });
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
        return res.status(500).send({ error: "Connection Error" })
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

/**delete room from thier id */
module.exports.deleteRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteRoom = await Room.findByIdAndDelete(id);
        if (!deleteRoom) {
            return res.status(404).send({ error: "Cannot delete Room." });
        } else {
            return res.status(201).send("Room Deleted Successfully");
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal server error", error });
    }
}

/**Update single Room */
module.exports.UpdateRoom = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (id) {
            const { Name, Price, Location, Rating, Reviews, Type, Images, Pool, Gym, Spa } = req.body;
            const updateRoom = await Room.updateOne({ _id: id }, { Name, Price, Location, Rating, Reviews, Type, Images, Pool, Gym, Spa }, { new: true });
            if (!updateRoom) {
                return res.status(404).send({ error: "Room not found." });
            } else {
                return res.status(200).send({msg: "Room updated successfully", updateRoom});
            }
        } else {
            return res.status(500).send("No Id found for deletion");
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", error });
    }
}
