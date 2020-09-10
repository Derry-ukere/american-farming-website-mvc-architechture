module.exports = {
    index: function(req, res) {
        res.render('default/home');
    },

team: function(req, res) {
    res.render('default/team');
},
 howto: function(req, res) {
    res.render('default/howto');
},
 invest: function(req, res) {
    res.render('default/invest');
},
faq: function(req, res) {
    res.render('default/faq');
},
privacy: function(req, res) {
    res.render('default/privacy');
},
terms: function(req, res) {
    res.render('default/terms');
},
aaccessibility: function(req, res) {
    res.render('default/accessibility');
},
property: function(req, res) {
    res.render('default/property');
},
blogs: function(req, res) {
    res.render('default/blog');
},
contactGET: function(req, res) {
    res.render('default/contact');
},
contactPOST: function(req, res) {
    res.send("<h1>Contact Page post</h1>")
}
}