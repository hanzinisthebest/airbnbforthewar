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
    const assets = await Asset.find({}).sort({ createdAt: -1 });
    res.status(200).json(assets);
};

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

module.exports = {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset,
    updateAsset,
};
