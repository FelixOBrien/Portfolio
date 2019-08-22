import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import "../lib/projects";
import "../lib/certificates";


Accounts.config({
  forbidClientAccountCreation: true,
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
  }
});
