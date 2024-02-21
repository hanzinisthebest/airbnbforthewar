const Asset = require('../models/assetModel');
const mongoose = require('mongoose');

const createAsset = async (req, res) => {
    try {
        const asset = await Asset.create(req.body);
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAssets = async (req, res) => {
    const { city, guests } = req.query; // Use req.query to access query parameters
  
    if (city) {
      const assetsWithFilter = await Asset.find({ city }).sort({ createdAt: -1 });
      res.status(200).json(assetsWithFilter);
    } else {
      const assets = await Asset.find({}).sort({ createdAt: -1 });
      res.status(200).json(assets);
    }
  };

  const getAssetByOwnerId = async (req, res) => {
    const {ownerId} = req.params; // Assuming the owner ID is passed as a URL parameter

    const assets = await Asset.find({  ownerId }).sort({ createdAt: -1 });
    res.status(200).json(assets);
}

const getAsset = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such asset' });
    }
    const asset = await Asset.findById(id);
    if (!asset) {
        return res.status(404).json({ mssg: 'No such asset' });
    }
    res.status(200).json(asset);
};

const deleteAsset = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such asset' });
    }
    const asset = await Asset.findOneAndDelete({ _id: id });
    if (!asset) {
        return res.status(404).json({ mssg: 'No such asset' });
    }
    res.status(200).json({ asset });
};

const updateAsset = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such asset' });
    }
    const asset = await Asset.findByIdAndUpdate({ _id: id }, req.body, { new: true });
    if (!asset) {
        return res.status(404).json({ mssg: 'No such asset' });
    }
    res.status(200).json({ asset });
};

// populate with junk data

const cities = ['New York', 'Jerusalem', 'Rome']; // Replace with your actual city options

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];

const getRandomTypeOfProperty = () => {
    const propertyTypes = ['house', 'apartment', 'separate unit', 'hotel'];
    return propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
};

const generateRandomAssetData = ownerId => {
    return {
        grownupsNum: getRandomInt(1, 5),
        childrenNum: getRandomInt(1, 5),
        babies: getRandomInt(1, 5),
        city: getRandomCity(),
        typeOfProperty: getRandomTypeOfProperty(),
        ownerId: ownerId,
        isBreakfast: Math.random() < 0.5, // 50% chance of true/false
        availability: [new Date()], // You may modify this based on your actual requirements
    };
};

const createRandomAssets = async (req , res) => {

    const {ownerId , numAssets} = req.body
    console.log(ownerId , numAssets)
    try {
        const assets = [];
        for (let i = 0; i < numAssets; i++) {
            const randomAssetData = generateRandomAssetData(ownerId);
            console.log(randomAssetData)
            const asset = await Asset.create(randomAssetData);
            assets.push(asset);
        }
        return res.status(200).json({assets});
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset,
    updateAsset,
    createRandomAssets,
    getAssetByOwnerId
};
