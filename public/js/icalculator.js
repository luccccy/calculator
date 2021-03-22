function cleanNum() {
    document.getElementById("display").value = "";
}
document.getElementById("clear").addEventListener("click", cleanNum);

function get(value) {
    if( value === "%" ) {
        document.getElementById("display").value += Math.round(document.getElementById("display").value)/100
    }
    else if( value === "+/-") {
        document.getElementById("display").value += -Math.abs(document.getElementById("display").value);
    }
    else{
        document.getElementById("display").value  += value;
    }
}

function calculates() {
    let result = document.getElementById("display").value;
    document.getElementById("display").value = ""
    document.getElementById("display").value = eval(result);
}





