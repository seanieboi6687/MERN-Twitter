const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateTweetInput = [
    check('text')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 140 })
        .withMessage('Tweet must be between 1 and 360 characters'),
    handleValidationErrors
];

module.exports = validateTweetInput;