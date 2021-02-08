const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

exports.getMainPage = (req, res)=> {
    Contact.find((error, contacts) => {
        if(!error){
            res.render('index.ejs', {
                contactItems: contacts
            })
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.getAddUserPage = (req, res) => {
    res.render('add-user.ejs');
}

exports.postnewContact = (req, res) => {
    console.log("!!!");

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let phoneNumber = req.body.phoneNumber;

    let newContact = new Contact();

    newContact.firstName = firstName;
    newContact.lastName = lastName;
    newContact.phoneNumber = phoneNumber;

    newContact.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log('Failed to save data.');
        }
   });
}

exports.deleteContact = (req, res) => {
    const checkedContactId = req.body.checkbox;
    Contact.findByIdAndRemove(checkedContactId, (error) =>{
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to remove an item.");
        }
    });
}