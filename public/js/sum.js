function myFunction() {
    const x1 = parseInt(document.getElementById("myInput1").value);
    const x2 = parseInt(document.getElementById("myInput2").value);
    const sum = x1 + x2;
    document.getElementById("calculatorOutput").innerHTML = "The sum is: " + sum;
}
