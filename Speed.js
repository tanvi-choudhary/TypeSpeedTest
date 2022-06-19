var secs = 60; 
var flag=false;
let text = document.getElementById("type");
let textArray = [];

function countdown() {
    // this will call the function only once
    if(flag===false)
    {
        Decrement()
        flag=true;
    }
  msg = document.getElementById("Click").innerHTML = "The journey of a thousand miles begins with one step."
    
}

function compare(msg, textArray){
    
    let diff = "";
    msg.split('').array.forEach(function(val,i) {
        if(val != textArray.charAt(i))
        diff += val;
    });
    console.log(diff);
   return diff;
   };


function Decrement() {  
    seconds = document.getElementById("Timeleft");
    // this will update seconds in 
    seconds.value = secs; 

    
    if (secs <= 0) { 
     //   alert('Timeout');  
        seconds.value = '00';
        document.getElementById("container").innerHTML+= "<div id='WPM'> WPM  </div>"
        document.getElementById("container").innerHTML+= "<div id='CPM'> CPM  </div>"

        let txt = localStorage.getItem("text");
        if (txt === null) {
            textArray = [];
        } else {
            textArray = JSON.parse(txt);
        }
        textArray.push(text.value);


        compare()

         
    }
    else { 
        secs--;
        document.getElementById("Timeleft").innerHTML = secs;
        // we are calling the same method after 1 second
        setTimeout('Decrement()', 1000); 

    } 
}