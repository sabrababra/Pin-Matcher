function setAmount(inputId,amount){
    const displayField= document.getElementById(inputId);
    displayField.value= amount; 
}
document.getElementById('btn-generate').addEventListener('click',function(){
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const displayField= document.getElementById('display-field');
    displayField.value= randomNumber; 
    
})
document.getElementById('number-type').addEventListener('click',function(event){
    const number= event.target.innerText;
    const numberField= document.getElementById('number-field');
    const newValue=numberField.value;
    if(isNaN(number)){
        if(number ==='C'){
            numberField.value= '';  
        }else if( number === 'X'){
          const arr= newValue.split('');
          arr.pop();
          const newvalue= arr.join('');
          numberField.value=newvalue;
        }
    }else{
        const currentValue=newValue + number;
        numberField.value=currentValue;
    
    }
    
    
})
document.getElementById('btn-submit').addEventListener('click',function(){
    const valueOne=document.getElementById('display-field').value;
    //console.log(valueOne);
    const valueTwo=document.getElementById('number-field').value;
    //console.log(valueTwo);
    if(valueOne == valueTwo ){
        const pinSuccess = document.getElementById('success');
        pinSuccess.style.display='block';
        const pinFail=document.getElementById('fail');
        pinFail.style.display='none';
    }else{
        const pinSuccess = document.getElementById('success');
        pinSuccess.style.display='none';
        const pinFail=document.getElementById('fail');
        pinFail.style.display='block';
    }
})