const table = document.querySelector('table');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');

let currentOperation = false;

const operations = ['+', '-', '/', '*'];


document.getElementById('c').addEventListener('click', (e) => {
    modal.classList.add('show');
});



table.addEventListener('click', (e) => {
    // gombra klikkeltem?

    if(e.target.tagName === 'BUTTON') {
        const val = e.target.innerText;

        if (operations.includes(val)) {
            //operation
            currentOperation = val;
        } else {
            // tuti szam

            switch(currentOperation) {
                case '+':
                    result.innerText = +result.innerText + +val;
                    currentOperation = false;
                    break;
                case '-':
                    result.innerText = +result.innerText - +val;
                    currentOperation = false;
                    break;
                case '*':
                    result.innerText = +result.innerText * +val;
                    currentOperation = false;
                    break;
                case '/':
                    result.innerText = +result.innerText / +val;
                    currentOperation = false;
                    break;
                default:
                    result.innerText = val;
                    break;
            }
        }
    }

});
