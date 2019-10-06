Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'wrongPage'
});
Router.map(function(){
    this.route('home',{
        path: '/',
        template: 'home',
        data: function(){
            return {projects: Projects.find({},{sort:{created: -1}}), certificates: Certificates.find({},{sort:{created: -1}})}
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
        data: function(){
            return {projects: Projects.find({}, {sort:{created: -1}}), certificates: Certificates.find({}, {sort:{created:-1}})}
        }
    });
    this.route('editProject',{
        path: '/edit/project/:id',
        template: 'editProject',
        data: function(){
            return {project: Projects.findOne({_id: this.params.id})}
        }
    });
    this.route('deleteProject',{
        path: '/delete/project/:id',
        template: 'manager',
        waitOn: function(){
            Meteor.call("deleteProject", this.params.id);
        },
        data: function(){
            return {projects: Projects.find({}, {sort:{created: -1}}), certificates: Certificates.find({}, {sort:{created:-1}})}
        }
    });
    this.route('editCertificate',{
        path: '/edit/certificate/:id',
        template: 'editCertificate',
        data: function(){
            return {certificate: Certificates.findOne({_id: this.params.id})}
        }
    });
    this.route('deleteCertificate',{
        path: '/delete/certificate/:id',
        template: 'manager',
        waitOn: function(){
            Meteor.call("deleteCertificate", this.params.id);
        },
        data: function(){
            return {projects: Projects.find({}, {sort:{created: -1}}), certificates: Certificates.find({}, {sort:{created:-1}})}
        }
       
    });
    this.route('blog',{
        path: '/blog',
        template: 'blog',
        data: function(){
            return {posts: BlogPosts.find({}, {sort:{created:-1}})}
        }
    });
    this.route('blogPost',{
        path: '/blog/post/:_id',
        template: 'blogPost',
        data: function(){
            return {post: BlogPosts.findOne({_id: this.params._id})}
        }
    });
});