$(document).ready(function () {
  $(".off-option").click(function () {
    console.log(1);
    $(".switcher__checkbox").prop("checked", false);
  });
  $(".on-option").click(function () {
    console.log(1);
    $(".switcher__checkbox").prop("checked", true);
  });
});
