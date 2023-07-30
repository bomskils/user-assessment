const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { router } = require("./routes/users"); // Move this line after the router creation

const app = express();
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const person = {
        firstName: "Boma",
        lastName: "Da-ala",
    };

    res.render("index", { person });
});

app.use("/app/v1/", router);
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});