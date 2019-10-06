import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { Email } from 'meteor/email';
import "../lib/projects";
import "../lib/certificates";
import "../lib/blog";
import "./user"

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
  editProject: function(title, desc, url, category, id){
 

    Projects.update({_id: id},{
       title: title,
       desc: desc,
       category: category,
       link: url
     });
   },
   deleteProject: function(id){
 

    Projects.remove({_id: id});
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
  editCertificate: function(title, desc, url, img, id){
  
    Certificates.update({_id: id},{
      title: title,
      desc: desc,
      link: url,
      img: img
    });
 


},
deleteCertificate: function(id){
  
  Certificates.remove({_id: id});



},
  sendEmail: function(name, subject, email, content){
    process.env.MAIL_URL = Meteor.settings.MAIL_URL;
    Email.send({
      from: "admin@felixob.com",
      to: "fobcode@gmail.com",
      subject: name + " " + subject + " " + email,
      text: content
      });
  },
  postBlog: function(title, content){
    BlogPosts.insert({
      title: title,
      content: content,
      created: new Date()
    })
  }
});
