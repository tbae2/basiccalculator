var number1Array = [];
var number2Array = [];
var operator = null;
$display = $(".display");
var solved = false;

$(".equals").click(function() {

  var result = null;
  var number1 = +number1Array.join("");
  var number2 = +number2Array.join("");

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "*":
      result = number1 * number2;
      break;
  }

  $display.html(result);

})

$(".numpad").click(function() {

  var input = $(this).html();

  if (!operator) {
    number1Array.push(input);
    $display.html(number1Array.join(""));
  } else {
    number2Array.push(input);
    $display.html(number1Array.join("") + operator + number2Array.join(""));
  }

});

$(".operator").click(function() {
  operator = $(this).html();
  $display.html(number1Array.join("") + operator);
});

$(".clear").click(function() {
  number1Array = [];
  number2Array = [];
  operator = null;
  $display.html(0);
})