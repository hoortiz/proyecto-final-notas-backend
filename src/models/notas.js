import mongoose from "mongoose";
import moongoose from "mongoose";

const schema = moongoose.Schema({
    title: String,
    content: String
})

export default mongoose.model('Notas', schema)