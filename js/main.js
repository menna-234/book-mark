

var num;
var savebtn = document.getElementById("savebtn");
var websiteName=document.getElementById("website-Name");
var add= document.querySelector("button");
var site_name = document.getElementById("name");
var url = document.getElementById("url");
var data = [];




localStorage.getItem("bookmark")==null ? bookmark=[] : bookmark = JSON.parse(localStorage.getItem("bookmark")) ;
show(bookmark);






add.addEventListener("click",function(){
    addsite();
})
function updatelocalstorage(){
localStorage.setItem("bookmark" ,JSON.stringify(bookmark))
}
function addsite(){

    var website={
    name: site_name.value,
    url : url.value
    };

    bookmark.push(website);
    updatelocalstorage();
    data.push(website);
    show(bookmark);
    clear()
}
function show(data){
  var  cartona=``;
    for(var i=0;i< data.length ;i++){
       cartona+=`  
         <tr>
               <td>${i+1}</td>
               <td>${data[i].name}</td>
               <td><button onclick="visit(${i})"  class=" btn btn-danger">visit</button></td>
               <td><button onclick="deletewebsite(${i})" class=" btn btn-warning">delete</button></td>

        </tr>` }
     document.getElementById("data").innerHTML= cartona;
}
function deletewebsite(index){
    bookmark.splice(index,1);
    updatelocalstorage();
    show(bookmark)
}
function clear(){
    site_name.value='';
    url.value='';
}
function visit(index){
    open(data[index].url);
}