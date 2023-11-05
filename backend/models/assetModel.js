const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    assetID: {
        type: String,
        required: true,
        unique: true
    },
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
    arePetsAllowed: {
        type: Boolean,
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
    isWifi: Boolean,
    isLaundryMachine: Boolean,
    isAirConditioner: Boolean,
    isKitchen: Boolean,
    isTV: Boolean,
    isWorkstation: Boolean,
    isPool: Boolean,
    isFreeParking: Boolean,
    isCradle: Boolean,
    isGym: Boolean,
    isBreakfast: Boolean,
    isSmokingAllowed: Boolean,
    isElectricCarCharger: Boolean,
    isSmokeDetector: Boolean,
    isCO2Detector: Boolean,
    isWithoutStairs: Boolean,
    isAccessibleParkingLot: Boolean,
    isEntranceAccessible: Boolean,
    isShowerHandrail: Boolean,
    isToiletHandrail: Boolean,
    isChairInShower: Boolean,
    hostLanguage: String,
    availability: [Date]
}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);
