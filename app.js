require("@babel/register");

const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const getUser = require("./middleware/getUser");
const renderComponent = require("./middleware/renderComponent");

const sessionConfig = require("./config/session");
const mainRouter = require("./routes/views/main.routes");
const authRouter = require("./routes/views/auth.routes");
const authApiRouter = require("./routes/api/auth.routes");
const cardsApiRouter = require("./routes/api/cardsApi.routes");
// const basketRouter = require("./routes/views/basket.routes");

// настраиваем сервер с помощью плагинов (миддлварок)
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(getUser);
app.use(renderComponent);

//роутинг
app.use(mainRouter);
app.use("/auth", authRouter);
app.use("/api/auth", authApiRouter);
app.use("/api/cards/", cardsApiRouter);
// app.use("/basket", basketRouter);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`вытри слезы ${PORT} порт заработал`));
