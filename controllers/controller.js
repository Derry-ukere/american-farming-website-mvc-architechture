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
        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>phone: ${req.body.number}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `;
        console.log(output)
       // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "info@derryukere.me", // generated ethereal user
            pass: "Derryukere1256"  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });
      
      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Derry UKERE" <info@derryukere.me>', // sender address
        to: 'ukderry@gmail.com', // list of receivers
        subject: 'New Contact Request', // Subject line
        text: 'contact Request', // plain text body
        html: output // html body
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
      });
      
      
}
}