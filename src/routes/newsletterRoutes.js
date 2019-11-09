const newsletterRoutes = require('../controllers/newsletterController')

const routes = (app) => {


    app.route('/newsletter')
    .post(newsletterRoutes.postNewsletter)

}

module.exports = { routes }