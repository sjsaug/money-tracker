import {Schema} from 'mongoose';
const TransactionSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
});