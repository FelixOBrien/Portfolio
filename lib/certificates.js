Certificates = new Mongo.Collection('certificates');

Meteor.methods({
  addCertificate: function(title, desc, url){
    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized', 'you are not signed in');
    }

    var id = Meteor.userId();

   Certificates.insert({
      title: title,
      desc: desc,
      created: new Date(), 
      img: url
    });
  },
    
});
