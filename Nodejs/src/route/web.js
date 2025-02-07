import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    //rest api
    router.get('/hoidanit', (req, res) => {
        return res.send("hell word with hoidanit")
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;