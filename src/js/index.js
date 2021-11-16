import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/css/all.css";
import "../sass/style.scss";

$(function() {
    var copyright = "جميع حقوق محفوظة " + new Date().getFullYear() + " SamCode";
    $('.footer-end .copyright span').text(copyright);
});

// form validation in contact page
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();