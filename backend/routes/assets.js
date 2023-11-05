const express = require('express');
const {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset,
    updateAsset
} = require('../controllers/assetController');

const router = express.Router();

router.get('/', getAssets);

router.get('/:id', getAsset);

router.post('/', createAsset);

router.delete('/:id', deleteAsset);

router.patch('/:id', updateAsset);

module.exports = router;
