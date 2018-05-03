const project = require('../controllers/projectController.js')
const contact = require('../controllers/contactController.js')
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = function (router) {
    router        
        .route('/api/projects/:limit')
        .get(project.findProjects)

    router        
        .route('/api/addprojects')
        .post(project.addProjects)

    router
        .route('/api/contact')
        .post([
            //name validation
            check('name').exists(),
            check('name', 'Please enter your name.').isLength({min: 1, max: 150}),
            //email validation
            check('email').exists(),
            check('confirmEmail', 'Emails do not match, please try again')
                .exists()
                .custom((value, {req}) => value === req.body.email),
            check('email', 'Please enter a valid email address').isEmail(),
            check('textBody').exists(),
            check('textBody', "Message must be at least 50 characters long").isLength({min: 50})

        ],contact.contact)
}