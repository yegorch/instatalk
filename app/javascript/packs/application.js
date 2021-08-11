import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "jquery"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(function(){
  console.log('Rails chat');
});

$(document).on("turbolinks:load", function() {
  console.log('Document is loaded (turbolinks:load)');
})
