'use srtict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name:String,
})

module.exports = mongoose.model('User', UserSchema)