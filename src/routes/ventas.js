const express = require("express");
const router = express.Router();
const ventasModel = require("../models/ventas");

//get
router.get("/ventas", (req, res) => {
    ventasModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))
});

//getbyId
router.get("/ventas/:id", (req, res) => {
    const {id} = req.params;
    ventasModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))
});

//post
router.post("/ventas", (req, res) => {
    const venta = ventasModel(req.body);
    console.log(req.body)
    venta.save()
        .then((data) => res.json({mensaje:"Objeto guardado"}))
        .catch((error) => res.json({mensaje:error}))
});

//put
router.put("/ventas/:id", (req, res) => {
    const {id} = req.params; 
    const {item, price, quantity, date} = req.body;

    ventasModel.updateOne({_id:id}, {$set:{item, price, quantity, date}})
        .then((data) => res.json({mensaje:"Objeto actualizado"}))
        .catch((error) => res.json({mensaje:error}))
});

//delete
router.delete("/ventas/:id",(req, res) => {
    const {id} = req.params;
    ventasModel.deleteOne({_id:id})
        .then((data) => res.json({mensaje:"Objeto eliminado"}))
        .catch((error) => res.json({mensaje:error}))
});

module.exports = router;