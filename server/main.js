import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { Email } from 'meteor/email';
import "../lib/projects";
import "../lib/certificates";

Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.methods({
  addProject: function(title, desc, url, category){
 

   Projects.insert({
      title: title,
      desc: desc,
      category: category,
      created: new Date(), 
      link: url
    });
  },
  addCertificate: function(title, desc, url, img){
   Certificates.insert({
      title: title,
      desc: desc,
      created: new Date(), 
      link: url,
      img: img
    });
  },
  sendEmail: function(name, subject, email, content){
    console.log("Email Sent");
    process.env.MAIL_URL = Meteor.settings.MAIL_URL;
    Email.send({
      from: "admin@felixob.com",
      to: "fobcode@gmail.com",
      subject: name + " " + subject + " " + email,
      text: content
      });
  }
});
