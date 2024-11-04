const $numSigns = [...document.querySelectorAll('.numbers, .sign')]; 
const $clearButton = document.querySelector('.clear');
const $calculateButton = document.querySelector('.equals');
const $input = document.querySelector('#input');

let result = ""

$clearButton.addEventListener('click', clearResult)
$calculateButton.addEventListener('click', calculateResult)

function clearResult() {
    result = ""
    $input.value = "0"
}
$numSigns.forEach(($numSign) => {
$numSign.addEventListener('click' , handleButtonClick)
})

function handleButtonClick(event) {
    const value = event.target.value;
    if ($input.value === 0 && value === 0) {
        return
    }
    if (result.length === 0) {
        $input.value = ""
    }
    const operators = ['/', '*', '+', '-'] 
    if (operators.includes(result[result.length - 1]) && operators.includes(value)) {
        $input.value = $input.value.replace(/.$/, value)
        result.value = $input.value.replace(/.$/, value)

        return
    }

    result += value ;
    $input.value += value;
}
function calculateResult() {
    try {
        $input.value = eval(result)
    } catch (e) {
        $input.value = "ERROR"
        setTimeout( () => {
            if (confirm("wahya ax katkarb9")) {
                clearResult()
            }
        }, 1000)
    }
}