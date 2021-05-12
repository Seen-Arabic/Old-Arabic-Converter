input_str = document.getElementById("input_str");
output_str = document.getElementById("output_str");


function convertText() {
  let value = input_str.value;
  if (value != "") {
    console.log(input_str.value);
    output_str.value = input_str.value;
  }

}