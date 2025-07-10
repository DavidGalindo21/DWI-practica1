import mongoose from "mongoose";

const palapaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
    },
    capacidad: {
        type: Number,
        required: true,
    },
    existencia: {
        type: Number,
        default: 10,
    },
})

export const Palapa = mongoose.model('bebidas', palapaSchema);