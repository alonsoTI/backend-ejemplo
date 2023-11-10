const mongoose = require("mongoose")

const ventasModel = mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Ventas", ventasModel);