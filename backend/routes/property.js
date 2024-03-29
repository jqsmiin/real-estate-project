const express = require('express');
const { createProperty, getAllProperties, getProperty, deleteMyProperty, getPropertyByLocation, uploadPhoto, resizePhoto, getLocation, getPropertyByType, getAllPosts } = require('../controller/propertyController');
const { verifyToken, verifyUser } = require('../utils/verifyToken');
const upload = require('../utils/upload')

const router = express.Router()

router.route('/').post(verifyToken, uploadPhoto, resizePhoto, createProperty).get(getAllProperties)
router.route('/:id').get(getProperty)
router.route('/myProperty/property').get(getProperty)
router.route('/location/:location').get(getPropertyByLocation)
router.route('/type/:type').get(getPropertyByType)
router.route('/loc/:location').get(getLocation)
router.route('/:id/:propertyId').delete(verifyUser, deleteMyProperty)
router.route('/get/posts').get(getAllPosts)

module.exports = router