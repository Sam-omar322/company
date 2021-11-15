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