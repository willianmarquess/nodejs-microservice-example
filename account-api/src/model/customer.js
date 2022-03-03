import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    document_number: {
        type: String,
        required: true
    },
    
    customer_service_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},
{
    timestamps: true
});

export const Customer = mongoose.model('Customer', CustomerSchema)
