

function getGeneratePin(){
    const pin = Math.round(Math.random()*10000);

    console.log(pin);
    const pinLength = pin.toString().length;

    console.log(pinLength);

    if(pinLength==4){

        document.getElementById('display-input').value = pin;
    }
    else{
        console.log(pinLength)
        getGeneratePin();
    } 
    

}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcDisplay = document.getElementById('calc-display');

    if(isNaN(number)){
        if(number=='C')
        calcDisplay.value = ''; 
    }
    
    else {
        const previousNum = calcDisplay.value;
        const newNum = previousNum+number;
        calcDisplay.value = newNum;
    }
});

function verifyPin(){
    const displayInput = document.getElementById('display-input').value;
    const calcDisplay = document.getElementById('calc-display').value;

    const success =document.getElementById('success');
    const error = document.getElementById('error');

    if(displayInput == calcDisplay){
        
        success.style.display= 'block';
        error.style.display='none';

    }

    else{
        
        error.style.display='block';
        success.style.display= 'none';
    }
}