import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    }

},
{
    timestamps: true
});

export const Customer = mongoose.model('Customer', CustomerSchema)
