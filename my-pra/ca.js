$(document).ready(function() {
  let displayValue = "";

  $(".btn").on("click", function() {
    const value = $(this).text();
    if (value === "=") {
      displayValue = eval(displayValue);
    } else if (value === "C") {
      displayValue = "";
    } else {
      displayValue += value;
    }
    $("#display").val(displayValue);
  });
});
