const mongoose=require('mongoose');
const captionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ImageUrl:{
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Caption = mongoose.model('Caption', captionSchema);
module.exports = Caption;