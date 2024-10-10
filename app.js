//importazione moduli
const path = require("path");
const express = require("express");
const morgan = require("morgan");

//Creazione app Express
const app = express();
const port = 3000;

//Importazione router per le rotte dei post
const postsRouter = require("./routers/posts.js");
const errorsFormatter = require("./middlewares/errorsFormatter.js");
const routeNotFound = require("./middlewares/routeNotFound.js");

//Generic middleware
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Definizione rotte
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);
});

app.use("/posts", postsRouter);

app.use(routeNotFound);
app.use(errorsFormatter);

//Avvio server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
