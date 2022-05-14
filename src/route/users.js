const express = require('express')
const Router = express.Router()
const { usersController } = require('../controller/users')
const uploadImg = require('../middleware/upload')
const { isAdmin, protect } = require('../middleware/auth')

Router.get('/', usersController.getUsers)
  .get('/filter', usersController.getUsersByFilter)
  .get('/search', usersController.getSearchUsers)
  .post('/', isAdmin, protect, usersController.createUsers)
  // .put('/:id', usersController.update)
  .put('/:id', isAdmin, protect, usersController.update)
  .patch(
    '/updateProfil/:id',
    uploadImg.singleUpload,
    usersController.updateProfil
  )
  .delete('/:id', isAdmin, protect, usersController.deleteUsers)
module.exports = Router
