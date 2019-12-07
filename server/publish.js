import { BlogPosts } from "../lib/blog";
import { Projects } from "../lib/projects";
import { Certificates } from "../lib/certificates";


Meteor.publish('projects', function () {
    return Projects.find({},{sort:{created: -1}})
});
Meteor.publish('certificates', function(){
    return Certificates.find({},{sort:{created: -1}})
});
Meteor.publish('project', function (id) {
    return Projects.find({_id: id});
});
Meteor.publish("certificate", function(id){
    return Certificates.find({_id: id});
});
Meteor.publish("blogposts", function(){
    return BlogPosts.find({}, {sort:{created:-1}});
});
Meteor.publish("blogpost", function(id){
    return BlogPosts.find({_id: id});
})