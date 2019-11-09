const mongoose = require('mongoose')
const newsletterSchema = require('../models/newsletterModel')
const path = require('path')
const newsletterModel = mongoose.model('newsletter', newsletterSchema.newsletter)

const postNewsletter = async (request, response) => {
    try {
        console.log("POST NEWSLETTER")
        var userInstance = new newsletterModel(request.body)
        console.log(userInstance)
        const created = await newsletterModel.create(userInstance)
        response.send(created)
    } catch (error) {
        response.status(500).send(error)
    }
}

module.exports = { postNewsletter }