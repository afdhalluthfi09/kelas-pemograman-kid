// cara menyeleksi html
let h1 =document.getElementById('h1'); //by id
let classItem=document.getElementsByClassName('item'); //by class

for(let i=0; i < classItem.length; i++){
    if(i == 2){
        classItem[i].style.backgroundColor='red';
    }
}
console.log(classItem);