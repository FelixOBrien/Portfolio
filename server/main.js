import { Meteor } from 'meteor/meteor';
import "../lib/projects";
Meteor.methods({
  addProject: function(title, desc, url, category){
   /* if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'you are not signed in');
    }*/


   Projects.insert({
      title: title,
      desc: desc,
      category: category,
      created: new Date(), 
      link: url
    });
  },
    
});
