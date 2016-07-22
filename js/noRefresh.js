$(document).ready(function() {
    $("#content").load("Amadora Grammar Builder 7pg1.html");
});
$('a').click(function() {
var page = $(this).attr('href');
$("#content").load("page");
return false;
});
