console.log('day-6');


let buah =["buah mangga","buah apple","buah pir","buah durian","buah kelapa","buah kiwi"];
console.log(buah);
//cara pertama 
buah.forEach(function(value,index){
    console.log(`${index}-${value}`);
})

// cara kedua
for(let index=0; index < buah.length; index++){
    console.log(`${index}-${buah[index]}`);
}

/* 
*/