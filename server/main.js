import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import "../lib/projects";
import "../lib/certificates";
import "../lib/blog";
import "./user"

Meteor.methods({
  addProject: function(title, desc, url, category){
    if(Meteor.userId()){



   Projects.insert({
      title: title,
      desc: desc,
      category: category,
      created: new Date(), 
      link: url
    });
  }
  },
  editProject: function(title, desc, url, category, id){
    if(Meteor.userId()){

    Projects.update({_id: id},{
       title: title,
       desc: desc,
       category: category,
       link: url
     });
    }
   },
   deleteProject: function(id){
 
    if(Meteor.userId()){
    Projects.remove({_id: id});
    }
   },
  addCertificate: function(title, desc, url, img){
  if(Meteor.userId()){
      Certificates.insert({
        title: title,
        desc: desc,
        created: new Date(), 
        link: url,
        img: img
      });
    }
   
 

  },
  editCertificate: function(title, desc, url, img, id){
    if(Meteor.userId()){
    Certificates.update({_id: id},{
      title: title,
      desc: desc,
      link: url,
      img: img
    });
  }
 


},
deleteCertificate: function(id){
  if(Meteor.userId()){
  Certificates.remove({_id: id});
  }
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
  sendErrorEmail: function(error){
    process.env.MAIL_URL = Meteor.settings.MAIL_URL;
    Email.send({
      from: "admin@felixob.com",
      to: "fobcode@gmail.com",
      subject: "[ERROR] Red Alert",
      text: "Error message: " + error
      });
  },
  postBlog: function(title, content){
    if(Meteor.userId()){
    BlogPosts.insert({
      title: title,
      content: content,
      created: new Date()
    })
  }
}
});
