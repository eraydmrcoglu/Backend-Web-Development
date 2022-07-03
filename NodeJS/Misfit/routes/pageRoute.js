const express = require("express")
const pageContoller = require("../controllers/pageController")

const router = express.Router();


router.route('/').get(pageContoller.getIndexPage)
router.route('/about').get(pageContoller.getAboutPage)
router.route('/trainer').get(pageContoller.getTrainerPage)
router.route('/contact').get(pageContoller.getContactPage)
router.route('/gallery').get(pageContoller.getGalleryPage)

module.exports =router;