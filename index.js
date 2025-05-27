let homenum = document.getElementById("homenum") 
let totalhome = 0;

function plus1()
{ 
    
    totalhome = totalhome + 1;
    homenum.textContent = totalhome;  
    
}


function plus2()
{
     totalhome = totalhome + 2;
     homenum.textContent = totalhome;
}


function plus3()
{
    totalhome = totalhome + 3;
    homenum.textContent = totalhome;
}


let rguestnum = document.getElementById("guestnum");
let righttotalnum = 0;

function rplus1()
{
    righttotalnum += 1;
    rguestnum.textContent = righttotalnum;
    
}

function rplus2()
{
 righttotalnum += 2;
 rguestnum.textContent = righttotalnum;   
}

function rplus3()
{
    righttotalnum +=3;
    rguestnum.textContent = righttotalnum;
}

let rset = document.getElementById("guestnum");

function clickrset()
{
   
    rset.textContent = 0;
    righttotalnum = 0;
    
}

let rhome = document.getElementById("homenum")

function rhomebtn(){
    rhome.textContent = 0;
    totalhome = 0;
}