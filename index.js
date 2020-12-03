let dt = document.querySelector("#dateinp");
let btnget = document.querySelector("#btnget");

btnget.addEventListener('click',()=>{
    console.log(dt.value);
    var eventDate = new Date(String(dt.value)).getTime()
    var x = setInterval(function(){
    var now = new Date().getTime()
    var remaining = eventDate - now;
    var s = Math.floor(remaining/1000);
    var m = Math.floor(remaining/(1000*60))
    var h = Math.floor(remaining/(1000*60*60))
    var d = Math.floor(remaining/(1000*60*60*24))
    h%=24
    m%=60
    s%=60
    h = (h<10)?"0"+h:h
    m = (m<10)?"0"+m:m
    s = (s<10)?"0"+s:s
    if(d==0 && h==00 && m==0 & s==0){
        clearInterval(x)
    }
    document.getElementById("days").textContent=d;
    document.getElementById("hours").textContent=h;
    document.getElementById("minutes").textContent=m;
    document.getElementById("seconds").textContent=s;


  })
  if(dt.value == ""){
      
  } 

})
