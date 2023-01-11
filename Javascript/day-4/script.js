console.log('day-4');

let hari =["senin","selasa","rabu","kamis","jumat"];
let angka=[1,30,50,2,60,670];
let boolean=[true,false];
let campur=["mobil",70,true];
//menambahakna array
hari.push('sabtu');
hari.unshift('minggu')
hari.shift();
angka.push(92)
campur.push('avansa')
console.log(hari);
console.log('panjang isi array hari : '+hari.length)
console.log('menampilkan hari : '+hari[1]);
console.log(angka);
console.log(campur);


//jawaban no 1;
let ikan =5;
let sayur=1;
let belanja=["Nogo Sari",'Putu Ayu','Kue Lapis'];
//jawaban no 2
let total_harga_ikan = ikan * 3500;
let total_harag_sayur = sayur * 500;
let total_harag_belanja_ikan_sayur= total_harga_ikan + total_harag_sayur;
console.log('togal harag belaja ikan dan sayur' +total_harag_belanja_ikan_sayur);

//jawab 3
let jajanpasarIbu=["Nogo Sari",'Putu Ayu','Kue Lapis'];
// jawaban 4
jajanpasarIbu.length;
// jawaban 5
jajanpasarIbu.shift();
jajanpasarIbu.shift();
console.log('jajan pasar ibu setelah jatu tersisia sebanayak '+jajanpasarIbu.length);