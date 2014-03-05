$(document).ready(function () {
    $.getScript("http://code.jquery.com/ui/1.9.2/jquery-ui.js").done(function (script, textStatus) { $(".alert-info").alert('close'); $(".alert-success").show(); });
    document.getElementById('.nav-pills>li[data-slide-to="3"]').style.display = "none";
});