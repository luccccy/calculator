function operateFunc() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    const o = document.getElementById("operator").value;
    a = Number(a);
    b = Number(b);
    switch (o) {
        case"+":
            document.getElementById("c").value = a + b;
            break;
        case"-":
            document.getElementById("c").value = a - b;
            break;
        case"*":
            document.getElementById("c").value = a * b;
            break;
        case"/":
            document.getElementById("c").value = a / b;
            break;
    }
}


