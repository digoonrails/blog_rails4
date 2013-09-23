// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery-fileupload/basic
//= require_tree .

$(document).ready(function () {
  $("#fileupload").fileupload({
    dataType: 'script',
    type: 'POST',

    add: function (e, data) {
      data.context = $('<button/>').text('UPLOAD FILES')
          .appendTo(document.body)
          .click(function() {
            data.context = $('<p/>').text('Uploading...').replaceAll($(this));
            data.submit();
          })
    },
    done: function (e, data) {
      data.context.text('Upload finished.');
    }
  });
});
