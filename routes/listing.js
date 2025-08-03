const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');

const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const {
  index,
  renderNewFrom,
  showListing,
  createListing,
  renderEditForm,
  updateListing,
  destroy,
} = require('../controllers/listings.js');
const multer = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });

router
  .route('/')
  .get(wrapAsync(index)) // Index route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(createListing)
  ); //create route

// new route
router.get('/new', isLoggedIn, renderNewFrom);

router
  .route('/:id')
  .get(wrapAsync(showListing)) //Show route
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(updateListing)
  ) //update route
  .delete(isLoggedIn, isOwner, wrapAsync(destroy)); //delete route

// Edit Route
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(renderEditForm));

module.exports = router;
