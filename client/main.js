import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Images from '../lib/files';

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


Template.admin.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.admin.helpers({
  currentUpload() {
    return Template.instance().currentUpload.get();
  }
});

Template.admin.events({
  'change #fileInput'(e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = Images.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
            console.log(fileObj)
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  },
  'submit #newProject'(e, template){

  },
  'submit #newCertificate'(e, template){

}
});