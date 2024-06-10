const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
//const debug = require("debug")("dev:server");
const expressSession = require("express-session");
const flash = require("connect-flash");


console.log("NODE_ENV:", process.env.NODE_ENV);
require("dotenv").config();


const db = require("./config/mongoose-conn");
const ownerRouter = require("./routes/ownerRouter");
const usersRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/indexRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     next();
// });
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use("/", indexRouter);
app.use("/owners" , ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);

app.listen(3000);