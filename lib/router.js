Router.configure({
    layoutTemplate: 'layout'
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
    this.route('blog',{
        path: '/blog',
        template: 'blogPosts',
        data: function(){
            return {posts: BlogPosts.find({}, {sort:{created:-1}})}
        }
    });
    this.route('blogPost',{
        path: '/blog/:_id',
        template: 'post'
    });
});