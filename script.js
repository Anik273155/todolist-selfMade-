let button = document.getElementById('addToDo');
let input=document.getElementById('input');
const element=document.getElementById("addTaskDiv");

button.addEventListener('click',function(){

  var para=document.createElement('p');

  para.classList.add("mypara");


  var delButton=document.createElement('button');
     delButton.classList.add("deletePara");


   var node=document.createTextNode(`${input.value}`);
    
   para.appendChild(node);


    input.value="";



     var delText=document.createTextNode("DEL");
     delButton.appendChild(delText);
     
     if(node.length>0){
        element.appendChild(para);
        element.appendChild(delButton);
     }
   
        //  para.insertAdjacentElement("beforeend",delButton);
         // para.insertBefore(delButton);

para.addEventListener("click",function(){
   para.style.textDecoration="line-through";
  para.style.color="green";
})



         delButton.addEventListener("click",function(){
           element.removeChild(para);
           element.removeChild(delButton);
         })

})
