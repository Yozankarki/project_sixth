require('dotenv').config();
const Booking = require('../Model/BookingSchema');

//Get all Booked Rooms By Users
module.exports.GetAllBookedRooms = async (req, res, next) => {
    try {
        const findAllBooking = await Booking.find();
        if (!findAllBooking) return res.status(404).send({ error: "No Rooms Booked by users." });
        else return res.status(201).json(findAllBooking);
    } catch (error) {
        return res.status(500).json("Internal Server Error", error);
    }
}


/**POST: Booking rooms */
module.exports.BookRoom = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (id) {
            const { CheckIn, CheckOut, No_of_rooms, Adults, Children, Booked_user_Id
            } = req.body;
            const bookRooms = await Booking.create({
                CheckIn, CheckOut, No_of_rooms, Adults, Children, Booked_room_Id: id, Booked_user_Id
            });
            return res.status(201).json({ message: "Room Booked Successfully.", bookRooms });
        } else {
            return res.status(500).send("No Room Id found for Booking.")
        }
    } catch (error) {
        return res.status(404).json({ error: "Cannot Book Rooms.", error });
    }
}

//Update BookedRooms
module.exports.UpdateBookedRoom = async (req, res, next) => {
    try {
        const id = req.query.id;
        if (id) {
            const { CheckIn, CheckOut, No_of_rooms, Adults, Children, Booked_user_Id
            } = req.body;
            const UpdateBookedRoom = await Booking.updateOne({ _id: id }, {
                CheckIn, CheckOut, No_of_rooms, Adults, Children, Booked_room_Id: id, Booked_user_Id
            }, { new: true });
            if (!UpdateBookedRoom) return res.status(404).send({ error: "Updating room unsuccessful." })
            else return res.status(201).json({ message: "Room updated Successfully.", UpdateBookedRoom });
        } else {
            return res.status(500).send("No Room Id found for Booking.")
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", error });
    }
}

//Cancel BookedRooms
module.exports.CancelBookedRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cancelBooking = await Booking.findByIdAndDelete(id);
        if (!cancelBooking) return res.status(404).send({ error: "Cannot cancel your booking." });
        else return res.status(201).send("Booking was canceled successfully");
    } catch (error) {
        return res.status(500).send({ error: "Internal server error", error });
    }
}