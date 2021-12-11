$(document).ready(function () {
  $(".off-option").click(function () {
    console.log(1);
    $(".switcher__checkbox").prop("checked", false);
  });
  $(".off-option").click(function () {
    console.log(1);
    $(".switcher__checkbox").prop("checked", true);
  });
});
