const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    grownupsNum: {
        type: Number,
        required: true
    },
    childrenNum: {
        type: Number,
        required: true
    },
    babies: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    typeOfProperty: {
        type: String,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isBreakfast: Boolean,
    availability: [Date]
}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);
