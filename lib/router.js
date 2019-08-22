Router.configure({
    layoutTemplate: 'layout'
});
Router.map(function(){
    this.route('home',{
        path: '/',
        template: 'home',
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
});