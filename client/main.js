import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bootstrap';
import 'popper.js';
import 'jquery';

import '../lib/blog';
import '../lib/certificates';
import '../lib/projects';

import './index.html';
import './nav.html';
import './contact.html';
import './admin.html';

import '../lib/router';
import './home.html';
import './index.scss';


Template.home.events({
    "click .portfolio-laptop-mockup": function(e){
        $("body").toggleClass("flipped");
    }
})



Template.admin.events({
 
  'submit #newProject'(e, template){
    e.preventDefault();
    var title = $("#projectTitle").val();
    var desc = $("#projectDesc").val();
    var link = $("#projectLink").val();
    var category = $("#projectCategory").val();
    
    Meteor.call("addProject",title, desc, link, category);
  },
  'submit #newCertificate'(e, template){
      e.preventDefault();
  var title = $("#certTitle").val();
  var desc = $("#certDesc").val();
  var link = $("#certLink").val();
  var file = $("#certImage").val();
  Meteor.call("addCertificate",title, desc, link, file)


}
});
Template.contact.events({
    "submit #contactForm"(e, template){
        e.preventDefault();
        Meteor.call("sendEmail", $("#name").val(), $("#subject").val(), $("#email").val(), $("#message").val());
    }
});