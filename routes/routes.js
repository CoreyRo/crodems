const project = require('../controllers/projectController.js')

module.exports = function (router) {
    router        
        .route('/api/projects/:limit')
        .get(project.findProjects)

    router        
        .route('/api/addprojects')
        .post(project.addProjects)
}