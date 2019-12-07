import { Projects } from "./projects";
import { BlogPosts } from "./blog";
import { Certificates } from "./certificates";

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'wrongPage'
});
Router.map(function(){
    this.route('home',{
        path: '/',
        template: 'home',
        waitOn: function(){
            return [Meteor.subscribe("projects"), Meteor.subscribe("certificates")];
        },
        data: function(){
            return {projects: Projects.find({}), certificates: Certificates.find({})}
        }
    });
    this.route('contact',{
        path: '/contact',
        template: 'contact'
    });
    this.route('admin',{
        path: '/admin',
        template: 'admin'
    });
    this.route('manager',{
        path: '/manager',
        template: 'manager',
        waitOn: function(){
            return [Meteor.subscribe("projects"), Meteor.subscribe("certificates")]
        },
        data: function(){
            return {projects: Projects.find({}), certificates: Certificates.find({})}
        }
    });
    this.route('editProject',{
        path: '/edit/project/:id',
        template: 'editProject',
        waitOn: function(){
            return [Meteor.subscribe("project", this.params.id)]
        },
        data: function(){
            return {project: Projects.findOne({_id: this.params.id})}
        }
    });
    this.route('deleteProject',{
        path: '/delete/project/:id',
        template: 'manager',
        waitOn: function(){
            Meteor.call("deleteProject", this.params.id);
            return [Meteor.subscribe("projects"), Meteor.subscribe("certificates")]
        },
        data: function(){
            return {projects: Projects.find({}), certificates: Certificates.find({})}
        }
    });
    this.route('editCertificate',{
        path: '/edit/certificate/:id',
        template: 'editCertificate',
        waitOn: function(){
            return [Meteor.subscribe("certificate", this.params.id)]
        },
        data: function(){
            return {certificate: Certificates.findOne({_id: this.params.id})}
        }
    });
    this.route('deleteCertificate',{
        path: '/delete/certificate/:id',
        template: 'manager',
        waitOn: function(){
            Meteor.call("deleteCertificate", this.params.id);
            return [Meteor.subscribe("projects"), Meteor.subscribe("certificates")]
        },
        data: function(){
            return {projects: Projects.find({}), certificates: Certificates.find({})}
        }
       
    });
    this.route('blog',{
        path: '/blog',
        template: 'blog',
        waitOn: function(){
            return Meteor.subscribe("blogposts");
        },
        data: function(){
            return {posts: BlogPosts.find({})}
        }
    });
    this.route('blogPost',{
        path: '/blog/post/:id',
        template: 'blogPost',
        waitOn: function(){
            return [Meteor.subscribe("blogpost", this.params.id)]
        },
        data: function(){
            return {post: BlogPosts.findOne({_id: this.params.id})}
        }
    });
});