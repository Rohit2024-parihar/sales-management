import mongoose, { Model, Schema, Types } from 'mongoose';

// Document interface
export interface HsnCode {
    hsnNo: Number;
    gst: Number;
}
 

const hsnCodeSchema = new Schema<HsnCode, Model<HsnCode>>({
    hsnNo: {
        type: Number,
        unique: true,
        required: true
    },
    gst:{
        required: true,
        type: Number
    }
});


const HsnModel = mongoose.model("HsnCode",hsnCodeSchema );

export default HsnModel;


