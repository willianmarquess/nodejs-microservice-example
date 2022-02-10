import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    balance: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
},
{
    timestamps: true
});

export const Account = mongoose.model('Account', AccountSchema)