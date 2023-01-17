let isEnter = false;
let first, second, oper;
let arr = ["+", "-", "*", "/"]
let monitor = document.querySelector("#monitor");
let numbers = document.querySelector("#numbers");
let res = document.querySelector('.res');

numbers.addEventListener("click", show)

function show(e) {
    let elem = e.target.id;
    let inputTextValue;
    console.log(monitor.value)
    res.textContent += elem;

    if (elem == "C") {
        resetValue()
        animation('#613737')
    }

    if (first && second && oper) {
        if (elem == "=") {
            createResult(first, oper, second);
            animation()
        }
        else if (arr.indexOf(elem) != -1){
            createOtherResult(first, oper, second);
        }
        isEnter = true;
    }

    if (elem == '-' && !first) {
        checkFirst = true;

    }

    if (isNaN(elem)) {

    if (arr.indexOf(elem) != -1) {
        if (!isEnter) {

            if (first && !second) {
                oper = elem;
                monitor.value = '';                    
            }
        } 
        else {
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
    

    function resetValue() {
        monitor.value = null;
        res.textContent = '';
        // first = null;
        // second = null;
        first = undefined;
        second = undefined;
        oper = undefined;
    }
    
    function createResult(first, operator, second) {
        switch (operator) {
            case '*': 
                monitor.value = first * second;
                showResInInput(first, second, operator, monitor.value)
                return monitor.value
            case '/': 
                monitor.value = first / second;
                showResInInput(first, second, operator, monitor.value)
                return monitor.value
            case '-': 
                monitor.value = first - second;
                showResInInput(first, second, operator, monitor.value)
                return monitor.value
            case '+': 
                monitor.value = Number(first) + Number(second);
                showResInInput(first, second, operator, monitor.value)
                return monitor.value
        }
        
    }

    function createOtherResult(first, operator, second) {
        switch (operator) {
            case '*': 
                monitor.value = first * second;
                second = monitor.value;
                ShowCreateOtherResultInInput()
                animation()
                

                return monitor.value
            case '/': 
                monitor.value = first / second;
                second = monitor.value;
                ShowCreateOtherResultInInput()
                animation()

                return monitor.value
            case '-': 
                monitor.value = first - second;
                second = monitor.value;
                ShowCreateOtherResultInInput()
                animation()

                return monitor.value
            case '+': 
                monitor.value = Number(first) + Number(second);
                second = monitor.value;
                ShowCreateOtherResultInInput()
                animation()

                if (operator == 'C') {
                    resetValue()
                }
                return monitor.value
        }
    }

    function showResInInput(value1, value2, oper, sum) {
        inputTextValue = `${value1} ${oper} ${value2} = ${sum} `;
        return res.textContent = inputTextValue;
    }
    function ShowCreateOtherResultInInput() {
        return res.textContent = monitor.value + ' ' + elem + ' ';
    }
}
function animation(color = '#2f533c') {
    // res.style.background = '#bab6b6'
    res.style.background = color

    setTimeout(()=> {
        res.style.background = '#3e3e3e'
        // res.style.background = '#fff'
    }, 150)
    setTimeout
}
