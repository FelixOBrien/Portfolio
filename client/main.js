import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import uploadcare from 'uploadcare-widget';
import moment from 'moment';

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
import './manager.html';
import '../lib/router';
import './home.html';
import './blog.html';
import './index.scss';


Template.home.events({
    "click .portfolio-laptop-mockup": function(e){
        $("body").toggleClass("flipped");
    }
})
Template.registerHelper("shorten", function(content){
    content.length = 100;
    console.log(content)
    return content;
})
Template.registerHelper("dateHandler", function(date){

    return moment(date).format("DD/MM/YYYY");
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
  var file = document.getElementById("certImage")
  console.log(file);
  let widget = uploadcare.Widget(file)
console.log(widget.inputElement.value);
Meteor.call("addCertificate",title, desc, link, widget.inputElement.value);

e.target.reset();
               

    
    

},
'submit #newBlog'(e, template){
e.preventDefault();
var title = $("#blogTitle").val();
var content = $("#blogDesc").val();
Meteor.call("postBlog", title, content);
}
});
Template.contact.events({
    "submit #contactForm"(e, template){
        e.preventDefault();
        Meteor.call("sendEmail", $("#name").val(), $("#subject").val(), $("#email").val(), $("#message").val());
    }
});
Template.editCertificate.events({
    "submit #editCertificate"(e, template){
        e.preventDefault();
        var title = $("#certTitle").val();
        var desc = $("#certDesc").val();
        var link = $("#certLink").val();
        var file = $("#certImage").val();
        var id = $("#certId").val();
        Meteor.call("editCertificate",title, desc, link, file, id);
    }
});
Template.editProject.events({
    "submit #editProjectForm"(e, template){
        e.preventDefault();
        var title = $("#projectTitle").val();
        var desc = $("#projectDesc").val();
        var link = $("#projectLink").val();
        var category = $("#projectCategory").val();
        var id = $("#projectId").val();
        Meteor.call("editProject",title, desc, link, category, id);
    }
})