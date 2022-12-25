const result = document.getElementById('result');
const clickBtn = document.querySelectorAll('.btn');
const clear = document.getElementById('clear')
const plusOrMinus = document.getElementById('plus-minus')
const percentage = document.getElementById('%')
const numBtn = document.querySelectorAll('.num-btn');
const signs = document.querySelectorAll('.sign');
const equal = document.getElementById('equal')
const resultBtn = document.querySelector('.result-btn');



let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = "";
let isSign = false;
let plusMinus = true;
let isMinus = false;
let isPlus = true;
let minus = ''
let isResult = false;
let resultValue = [0];
let initialDisplay = ['0']



result.innerHTML = initialDisplay;

function getCalculate() {
    
    getValues();
    getMinus();
    getResult();
    getPercentage();
    clearValues();
}




// get first value, sign, & second value

function getValues() {
    numBtn.forEach((num) => (
        num.addEventListener('click', (e) => {
        clear.innerText = 'C'

    if(isResult) {
            firstValue = []
            let value = num.value;
            firstValue += value
            result.innerHTML = firstValue;
            isFirstValue = true;

        secondValue = '';
        isSecondValue = false;
        sign = "";
        resultValue = 0;
        
        result.classList.remove('result-one')
        result.classList.remove('result-two')

    isResult = false;

    } else {

        if(sign === '' && firstValue.length <= 13) {
             
            if(!plusMinus && !isFirstValue) {
                let value = num.value;
                firstValue += value; 
                firstValue =  '-' + firstValue;
                result.innerHTML = firstValue;
                isFirstValue = true;
            
            } else {
                let value = num.value;
                firstValue += value; 
                result.innerHTML = firstValue;
                isFirstValue = true;
            
            }

             
            // result value length adjust
        
            if(firstValue.length >= 8) {
                result.classList.add('result-one')
            } if(firstValue.length >= 11) {
                result.classList.add('result-two')
            }

            
    }

        } if (firstValue !== '') {
        
            signs.forEach((btn) => (
                
                btn.addEventListener('click', (e) => {
                    isMinus = false
                    isSign = true;
                    sign =  e.target.value;
                    btn.classList.toggle('active-sign'); 

                })
            ))
        
        } if(firstValue !== '' && sign !== '' && !isResult && secondValue.length <= 13) {

            // result value reset length adjust

            result.classList.remove('result-one')
            result.classList.remove('result-two')

            if(isMinus && !isSecondValue) {
                isMinus = false
                let value = num.value;
                secondValue += value; 
                secondValue = '-' + secondValue;
                result.innerHTML = secondValue;
            } else {
                let value = num.value;
                secondValue += value
                result.innerHTML = secondValue;

            }

           
            if(secondValue.length >= 8) {
                result.classList.add('result-one')
            } if(secondValue.length >= 11) {
                result.classList.add('result-two')
            }
        
            signs.forEach((btn) => (
                btn.classList.remove('active-sign')   
            ))  

               
            isSecondValue = true;
           
        }
        
            })
        ))
    
}

getValues();


// get operator

function getResult() {
    
        equal.addEventListener('click', () => {
            
            if(sign === "+") {
                resultValue = (+firstValue) + (+secondValue);
            } else if(sign === "-") {
                resultValue = (+firstValue) - (+secondValue);
            } else if(sign === "*") {
                resultValue = (+firstValue) * (+secondValue);
            } else if(sign === "/") {
                resultValue = (+firstValue) / (+secondValue);
            }

           
        
            result.innerHTML = resultValue

            if(result.innerHTML.length > 14) {
                result.innerHTML = result.innerHTML.slice(0, 13)
            } else {
                result.innerHTML = result.innerHTML
            }

            if(result.innerHTML.length >= 8) {
                result.classList.add('result-one')
            } if(result.innerHTML.length >= 11) {
                result.classList.add('result-two')
            }

        isFirstValue = false;
        isSecondValue = false;
        isSign = false;
        isMinus = false;
        isResult = true;
        firstValue = '';
        secondValue = '';
        sign = '';

        })
    
}

getResult()


function getPercentage() {

    percentage.addEventListener('click', () => {
        if(isFirstValue && !secondValue) {
            resultValue = +firstValue / 100
            result.innerHTML = resultValue
        } if (isResult) {
            result.innerHTML = resultValue/100 
        }

       
    })
}

getPercentage()


// plus Or Minus

function getMinus() {

    plusOrMinus.addEventListener('click', (e) => {
            plusMinus = plusOrMinus.toggleAttribute('value')
            console.log(plusMinus)
            if(plusMinus === false) {
                minus = '-'
                isMinus = true;
                isPlus = false;
            } else {
                minus = ''
                isMinus = false;
                isPlus = true;
            }
            

            if(!isFirstValue && !isSign && !isSecondValue) {
                result.innerHTML = `${minus}0`;

            } if(isFirstValue && !isSign) {
                if(!plusMinus) {
                    firstValue = `${minus}${firstValue}`;
                } else {
                    firstValue = firstValue.slice(1);
                }
                
                result.innerHTML = firstValue;
             

            }   if(isSign) {
                
                result.innerHTML = `${minus}0`;
             
               
            }  if(isSecondValue) {
                if(!plusMinus) {
                    secondValue = `${minus}${secondValue}`;
                } else {
                    secondValue = secondValue.slice(1);
                }
                result.innerHTML = secondValue; 

            } 
    })
    
}

getMinus()


//  Clear

function clearValues() {
    clear.addEventListener('click', ()=> {

        firstValue = '';
        isFirstValue = false;
        secondValue = '';
        isSecondValue = false;
        sign = "";
        isSign = false;
        resultValue = 0;
        result.innerHTML = resultValue
        clear.innerText = 'AC'
        plusMinus = true
        result.classList.remove('result-one')
        result.classList.remove('result-two')
        return
    })
    
}

clearValues();



