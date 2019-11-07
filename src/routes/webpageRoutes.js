const webpageRoutes = require('../controllers/webpageController')

const routes = (app) => {

    app.route('/')
    .get(webpageRoutes.getIndexPage)

    app.route('/userSignIn')
    .get(webpageRoutes.userSignInPage)

    app.route('/createUser')
    .get(webpageRoutes.createUserPage)

    app.route('/blogposts')
    .get(webpageRoutes.blogPostPage)

    app.route('/css')
    .get(webpageRoutes.getCSS)

    app.route('/js')
    .get(webpageRoutes.getJS)

    app.route('/nav')
    .get(webpageRoutes.getNav)

    app.route('/backgroundPicture')
    .get(webpageRoutes.getBackground)

    app.route('/rubenPerezPosts')
    .get(webpageRoutes.rubenPerezPosts)
}

module.exports = { routes }