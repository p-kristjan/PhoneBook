const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

exports.getMainPage = (req, res)=> {
    Contact.find((error, contacts) => {
        if(!error){
            const cont = [];
            contacts.forEach(item => {
                const personString = `${item.firstName} ${item.lastName} (${item.phoneNumber})`;
                cont.push(personString);
            });
            res.render('index.ejs', {
                contactItemsArray: cont,
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
    const contactId = req.body.contactId;
    Contact.findByIdAndRemove(contactId, (error) =>{
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to remove an item.");
        }
    });
}