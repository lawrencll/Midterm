var wrap = document.body.querySelector(".wrap");

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length; i++){
  
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleAge = document.createElement("h2");
  
  eleName.innerHTML="Name: " + list[i].name;
  eleAge.innerHTML="Age: " + list[i].age;
  
  ele.appendChild(eleName);
  ele.appendChild(eleAge);
  
  if(list[i].age >= 25){
    ele.style.color="green";
  }
  wrap.appendChild(ele);
}


var num = 5;

function buttonAdd(){
  
  var element = document.createElement("div");
  var newnum = num++;
  element.innerHTML = "Count :" + newnum;
  wrap.appendChild(element);
  
  
}

document.body.querySelector(".count").addEventListener("click", function(){
  buttonAdd();
})