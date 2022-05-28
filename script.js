var display=document.getElementById('display');
var button=document.getElementsByTagName('button');

var exp;

function calculation(){
    var val=this.getAttribute('data-value');            // Can use event.target too to figure out the element object
    if(val=='+' || val=='-' || val=='*' || val=='/'){
        exp=display.innerText;                  //No need to use parseFloat to parse the string into an integer 
        display.innerText="";                   //because we are building a string expression to pass it to the eval() function
        if(exp==''){
            alert("Enter an operand!");
            return;
        }
        exp+=val;
    }
    else if(val=='%'){
        display.innerText/=100;
    }
    else if(val=='clear'){
        display.innerText="";
    }
    else if(val=='signChange'){
        display.innerText*='-1';
    }
    else if(val=='.'){
        display.innerText+=val;
    }
    else if(val=='='){
        if(display.innerText==''){
            alert("Enter an operand!");
            return;
        }
        exp+=display.innerText;
        var result=eval(exp);
        if(result=='Infinity' || isNaN(result)==true){
            display.innerText='Error';
        }
        else{
            display.innerText=result;
        }
        exp='';
    }
    else{
        display.innerText+=val;
    }
}

for(var i=0;i<button.length;i++){
    button[i].addEventListener('click', calculation);
}


document.addEventListener('keydown',function(event){
    var key=event.key;
    if(key=='+' || key=='-' || key=='*' || key=='/'){
        exp=display.innerText;
        display.innerText="";
        if(exp==''){
            alert("Enter an operand!");
            return;
        }
        exp+=key;
    }
    else if(key=='0' || key=='1' || key=='2' || key=='3' || key=='4' || key=='5' || key=='6' || key=='7' || key=='8' || key=='9'){
        display.innerText+=key;
    }
    else if(key=='.'){
        display.innerText+=key;
    }
    else if(key=='%'){
        display.innerText/=100;
    }
    else if(key=='Enter'){
        if(display.innerText==''){
            alert("Enter an operand!");
            return;
        }
        exp+=display.innerText;
        var result=eval(exp);
        if(result=='Infinity' || result=='NaN'){
            display.innerText='Error';
        }
        else{
            display.innerText=result;
        }
        exp='';
    }
    else if(key=='Backspace'){
        var op=display.innerText;
        display.innerText=op.slice(0,op.length-1);
    }
});