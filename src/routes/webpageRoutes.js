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

    app.route('/indexBackground')
    .get(webpageRoutes.getBackgroundIndex)

    app.route('/signBackground')
    .get(webpageRoutes.getBackgroundSign)

    app.route('/postsBackground')
    .get(webpageRoutes.getBackgroundPost)

    app.route('/aboutMePicture')
    .get(webpageRoutes.getImageAboutMe)

    app.route('/rubenPerezPosts')
    .get(webpageRoutes.rubenPerezPosts)

    app.route('/aboutMe')
    .get(webpageRoutes.aboutMePage)
    
}

module.exports = { routes }