const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

// temporary storage (you can later connect MongoDB)
let bookings = [];

// Booking API
app.post("/book", (req, res) => {

    const booking = {
        name: req.body.name,
        phone: req.body.phone,
        service: req.body.service,
        date: req.body.date
    };

    bookings.push(booking);

    console.log("New Booking:", booking);

    res.send("Booking saved");
});


// Admin API to get all bookings
app.get("/admin/bookings", (req, res) => {

    res.json(bookings);

});



app.listen(3000, () => {

    console.log("Server running on http://localhost:3000");

});


