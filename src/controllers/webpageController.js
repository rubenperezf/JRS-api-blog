const mongoose = require('mongoose')
const path = require('path')


const getIndexPage = async (request,response)=>{
    try{
        console.log("SEND HOME PAGE")
        response.sendFile(path.join(__dirname + '/../views/index.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const userSignInPage = async (request,response)=>{
    try{
        console.log("SEND HTML TO SIGN IN")
        response.sendFile(path.join(__dirname + '/../views/userSignIn.html'))
    } catch(error){
        response.status(500).send(error)
    }
}
const aboutMePage = async (request,response)=>{
    try{
        console.log("SEND HTML TO ABOUT ME")
        response.sendFile(path.join(__dirname + '/../views/about-me.html'))
    } catch(error){
        response.status(500).send(error)
    }
}
const rubenPerezPosts = async (request,response)=>{
    try{
        console.log("SEND RUBEN PEREZ POSTS")
        response.sendFile(path.join(__dirname + '/../views/ruben-posts.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const createUserPage = async (request,response)=>{
    try{
        console.log("SEND HTML TO CREATE USERS")
        response.sendFile(path.join(__dirname + '/../views/createUser.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const blogPostPage = async (request,response)=>{
    try{
        console.log("SEND HTML TO GET BLOG POSTS")
        response.sendFile(path.join(__dirname + '/../views/blogposts.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const getCSS = async (request,response)=>{
    try{
        console.log("SEND CSS")
        response.sendFile(path.join(__dirname + '/../views/styles.css'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getBackgroundIndex = async (request,response)=>{
    try{
        console.log("SEND INDEX BACKGROUND PICTURE")
        response.sendFile(path.join(__dirname + '/../images/index-background-2.jpg'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getBackgroundSign = async (request,response)=>{
    try{
        console.log("SEND SIGN BACKGROUND PICTURE")
        response.sendFile(path.join(__dirname + '/../images/sign-background.jpg'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getBackgroundPost = async (request,response)=>{
    try{
        console.log("SEND POST BACKGROUND PICTURE")
        response.sendFile(path.join(__dirname + '/../images/posts-background.jpg'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getBackgroundAboutMe = async (request,response)=>{
    try{
        console.log("SEND ABOUT ME BACKGROUND PICTURE")
        response.sendFile(path.join(__dirname + '/../images/aboutMe-background.jpg'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getGithubLogo = async (request,response)=>{
    try{
        console.log("SEND GITHUB LOGO")
        response.sendFile(path.join(__dirname + '/../images/github-logo.png'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getLinkedinLogo = async (request,response)=>{
    try{
        console.log("SEND LINKEDIN LOGO")
        response.sendFile(path.join(__dirname + '/../images/linkedin-logo.png'))
    } catch(error){
        response.status(500).send(error)
    }
}
const getImageAboutMe = async (request,response)=>{
    try{
        console.log("SEND POST ABOUT ME PICTURE")
        response.sendFile(path.join(__dirname + '/../images/about-me.jpg'))
    } catch(error){
        response.status(500).send(error)
    }
}



const getJS = async (request,response)=>{
    try{
        console.log("SEND JS")
        response.sendFile(path.join(__dirname + '/../../main.js'))
    } catch(error){
        response.status(500).send(error)
    }
}

const getNav = async (request,response)=>{
    try{
        console.log("SEND NAVBAR")
        response.sendFile(path.join(__dirname + '/../views/nav.html'))
    } catch(error){
        response.status(500).send(error)
    }
}

const getFooter = async (request,response)=>{
    try{
        console.log("SEND FOOTER")
        response.sendFile(path.join(__dirname + '/../views/footer.html'))
    } catch(error){
        response.status(500).send(error)
    }
}


module.exports = { getGithubLogo, getLinkedinLogo,  getFooter, getBackgroundAboutMe, getImageAboutMe, aboutMePage, rubenPerezPosts, getBackgroundPost, getBackgroundSign, getBackgroundIndex, getIndexPage, userSignInPage, blogPostPage, createUserPage, getCSS, getJS, getNav }