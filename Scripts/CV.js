﻿$(document).ready(function () {
    $.getScript("http://code.jquery.com/ui/1.9.2/jquery-ui.js").done(function (script, textStatus) { $(".alert-danger").alert('close'); $(".alert-success").show(); });
    $('.nav-pills>li[data-slide-to="1"]').addClass('active');
});