let isEnter = false;
let first, second, oper;
let arr = ["+", "-", "*", "/"]
let monitor = document.querySelector("#monitor");
let numbers = document.querySelector("#numbers");
let res = document.querySelector('.res')
numbers.addEventListener("click", show)

function show(e) {
    let elem = e.target.id;
    let inputTextValue;
    console.log(monitor.value)
    res.textContent += elem;

    if (elem == "C") {
        monitor.value = "";
        res.textContent = "";
        first, second, oper = null;
    }
    // if (elem == "=") {
        if (first && second && oper) {
            switch (oper) {
                case '*': 
                    monitor.value = first * second;
                    showResInInput(first, second, oper, monitor.value)
                    break;
                case '/': 
                    monitor.value = first / second;
                    showResInInput(first, second, oper, monitor.value)
                    break;
                case '-': 
                    monitor.value = first - second;
                    showResInInput(first, second, oper, monitor.value)
                    break;
                case '+': 
                    monitor.value = Number(first) + Number(second);
                    showResInInput(first, second, oper, monitor.value)
                    break;
            }
            isEnter = true;
        }
    // }

    if (isNaN(elem)) {
        if (arr.indexOf(elem) != -1) {
            if (!isEnter) {
                if (first && !second) {
                    oper = elem;
                    monitor.value = '';                    
                }
            } else {
                oper = elem;
                first = monitor.value;
                second = null;
                monitor.value = ''
            }
        }
    } else {
        monitor.value += elem;
        
        if (!second && !oper) {
            first = monitor.value;

        }
        if (first && oper) {
            second = monitor.value;
        }
    }
    function showResInInput(value1, value2, oper, sum) {
        inputTextValue = `${value1} ${oper} ${value2} = ${sum}`;
        return res.textContent = inputTextValue;
    }
}