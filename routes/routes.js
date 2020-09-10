var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controller');

/* GET home page. */
router.route('/',)
.get(controllers.index);

router.route('/team')
.get(controllers.team);

router.route('/howto')
.get(controllers.howto);


router.route('/invest')
.get(controllers.invest);

router.route('/faq')
.get(controllers.faq);

router.route('/property')
.get(controllers.property);


router.route('/blog')
.get(controllers.blogs);


router.route('/contact')
.get(controllers.contactGET)
.post(controllers.contactPOST);

router.route('/accessibility')
.get(controllers.aaccessibility);

router.route('/terms')
.get(controllers.terms);

router.route('/privacy')
.get(controllers.privacy);





module.exports = router;
