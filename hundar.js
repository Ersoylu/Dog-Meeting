console.log("Laddat hundar.js");

const inputDog=document.querySelector("#namn");

const inputBetyg=document.querySelector("#betyg");

const spara=document.querySelector('#spara');

const dogNum=document.querySelector('#statistik','#antal');

const dogList=document.querySelector('#hundlista');

let soptunnabild=("🗑️");

var totalhund=0;

var totalhead=0;




spara.addEventListener('click', function(e){
    
    e.preventDefault();
    const dogName= inputDog.value;
    var temp=true;
    var appendChecker=true;
     if (dogName==""){
        alert("Tumt Fält")
        temp=false;
        appendChecker=false;
    }
    var dogpic="🐶";
    var dogpicCopy="🐶";
    
    var alertnum=1;
   
    for (i=1; i<inputBetyg.value; i++){
        dogpic=dogpic+dogpicCopy
        alertnum=i+1;
    }
    console.log(alertnum)
    if (alertnum==1 && temp==true){

        alert("Ingen hund är så dålig!")
        appendChecker=false;
    }
    const newLI=document.createElement("LI");
   

    console.log(newLI);
    inputDog.value="";
    
    if (appendChecker==true){
        dogList.append(newLI)
      totalhund=totalhund+1
    }
  

    newLI.classList.add("hund","list-group-item")
    const newDiv=document.createElement("div")
    const newSpan= document.createElement("span");
    newSpan.classList.add("namn")
    newSpan.innerHTML=dogName; 

    newLI.appendChild(newDiv)
    newDiv.appendChild(newSpan)

    var newSpan2=document.createElement("button")
    newSpan2.classList.add("soptunna")
    newSpan2.innerHTML=soptunnabild;

    newLI.appendChild(newSpan2)
    newDiv.appendChild(newSpan2)
    


    const newDiv2=document.createElement("div")

    
    newDiv2.innerHTML=dogpic;
    newLI.appendChild(newDiv2)
    document.getElementById('antal').style.visibility='visible'
    
    
    
    totalhead= totalhead+alertnum

    console.log(dogNum)

    var average= totalhead/totalhund

    document.getElementById('genomsnitt').innerHTML=average;
    
    newSpan2.style.position="static";
    
    document.getElementById('antal').innerHTML=totalhund;

    newSpan2.addEventListener("click", function(e) {
        e.target.parentNode.parentNode.remove()
        totalhund--;
        document.getElementById('antal').innerHTML=totalhund;
        
      });

})  

 

document.querySelector(`#footer`).textContent="Emre Ersoylu";