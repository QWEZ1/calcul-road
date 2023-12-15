let road;
    function func() {
        let result;
        let num1 = Number(document.getElementById("distance").value);
        let num2 = Number(document.getElementById("rub/bens").value);
        let num3 = Number(document.getElementById("bens").value);
        switch(road) {
            case "=-=":
                result = (num1 / 100) * num2 * num3;
                break;
        }
        document.getElementById("result").innerHTML = result
}