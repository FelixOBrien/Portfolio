import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { Email } from 'meteor/email';
import S3 from 'aws-sdk/clients/s3'; 
import "../lib/projects";
import "../lib/certificates";



Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.methods({
  addProject: function(title, desc, url, category){
 

   Projects.insert({
      title: title,
      desc: desc,
      category: category,
      created: new Date(), 
      link: url
    });
  },
  addCertificate: function(title, desc, url, img, imgInfo){
    console.log(imgInfo);
    var s3Conf = Meteor.settings.s3;
    const s3 = new S3({
      secretAccessKey: s3Conf.secret,
      accessKeyId: s3Conf.key,
      region: s3Conf.region,
      // sslEnabled: true, // optional
      httpOptions: {
        timeout: 6000,
        agent: false
      }
    });
  
    const params = {
      StorageClass: 'STANDARD',
      Bucket: s3Conf.bucket, // pass your bucket name
      Key: imgInfo, // file will be saved as testBucket/contacts.csv
      Body: img
    }
  s3.putObject(params, function(s3Err, data) {
      if (s3Err) throw s3Err;
      console.log(`File uploaded successfully at ${data.Location}`)
      Certificates.insert({
        title: title,
        desc: desc,
        created: new Date(), 
        link: url,
        img: data.Location
      });
  });

  },
  sendEmail: function(name, subject, email, content){
    console.log("Email Sent");
    process.env.MAIL_URL = Meteor.settings.MAIL_URL;
    Email.send({
      from: "admin@felixob.com",
      to: "fobcode@gmail.com",
      subject: name + " " + subject + " " + email,
      text: content
      });
  }
});
