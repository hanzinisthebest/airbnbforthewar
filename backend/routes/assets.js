const express = require('express');
const {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset,
    updateAsset,
    createRandomAssets,
    getAssetByOwnerId
} = require('../controllers/assetController');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get('/', getAssets);
router.get('/:id', getAsset);

router.use(verifyJWT)
router.get('/myassets/:ownerId', getAssetByOwnerId);


router.post('/', createAsset);

router.delete('/:id', deleteAsset);

router.patch('/:id', updateAsset);

router.post('/createrandomassets' , createRandomAssets);

module.exports = router;
