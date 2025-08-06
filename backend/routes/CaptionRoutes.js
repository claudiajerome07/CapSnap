const {createCaption,getCaptionById,getCaptions,deleteCaption,updateCaption} =require('../controllers/captionController')
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/createcaption', authMiddleware, createCaption);
router.get('/', authMiddleware,getCaptions);
router.get('/:id', authMiddleware, getCaptionById);
router.put('/:id', authMiddleware, updateCaption);
router.delete('/:id', authMiddleware, deleteCaption);

module.exports = router;

