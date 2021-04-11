const router = require('express').Router()
const commentCtrl = require('../controllers/commentController')

router.get('/:id', commentCtrl.getComments)

module.exports = router