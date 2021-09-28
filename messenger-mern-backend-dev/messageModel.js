import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    username: String,
    message: String,
    timetamp: String
});

export default mongoose.model('messages', messageSchema);