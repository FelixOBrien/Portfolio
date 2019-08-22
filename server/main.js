import { Meteor } from 'meteor/meteor';
import Images from "../lib/files"
import "../lib/projects";
import "../lib/certificates";
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
  addCertificate: function(title, desc, url){
   Certificates.insert({
      title: title,
      desc: desc,
      created: new Date(), 
      link: url
    });
  }
});
