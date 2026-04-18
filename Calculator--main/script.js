const display=document.querySelector('#display')
const button=document.querySelectorAll('button')
let input='';

button.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.textContent;
   
    if(value==='AC'){
        input='';
    }
    else if(value==='DEL'){
        input=input.slice(0,-1);
    }
    else if(value==='='){
        try{
            input=eval(input).toString();
        } catch{
            input='Error';
        }
    }else{
        input+=value;
    }
    display.textContent=input||'0';
     });
});