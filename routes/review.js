const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');

const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const {
  validateReview,
  isLoggedIn,
  isreviewAuthor,
} = require('../middleware.js');
const { createReview, deleteReview } = require('../controllers/reviews.js');

// Reviews
// Post Route
router.post(
  '/',
  isLoggedIn,
  validateReview,
  wrapAsync(createReview)
);

// Delete Review Route
router.delete(
  '/:reviewId',
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(deleteReview)
);

module.exports = router;
