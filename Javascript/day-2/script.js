console.log('day-2');
///// type data number
let angka=34;
let harga=35.000;
let kecapata=4500;
console.log('tipe data angka adalah :'+ typeof(angka));
console.log('tipe data harga adalah :'+ typeof(harga));
console.log('------tipe string-------');
//tipe data string
let biodata_nama='umar';
let biodaya_hoby='main bola';
let umur='12 Thn';
console.log('tipe data biodata_nama adalah :'+ typeof(biodata_nama));
console.log('tipe data umur adalah :'+ typeof(umur));
console.log('------ tipe data function -----');
function makan(){
    console.log('gorengan');
}
console.log('tipe data makan adalah :'+typeof(makan));
console.log('------- perhitungan ---------');
let nomor1=34;
let nomor2 =30;
let total =nomor1 + nomor2;
let totalPengurangan=nomor1-nomor2;
let totalPembagian=nomor1/nomor2;
let totalPerkalian=nomor1*nomor2;
let totalKompleks=(nomor1 + nomor2)*totalPembagian -(totalPembagian *totalPerkalian)/nomor2;
console.log('jumlah dari perhitungan 34 + 30 = '+total);
console.log('jumlah dari pengurangan 34 - 30 = '+totalPengurangan);
console.log('jumlah dari pembagian 34 / 30 = '+totalPembagian);
console.log('jumlah dari perkalian 34 * 30 = '+totalPerkalian);
console.log('jumlah dari perkalian 34 * 30 = '+totalPerkalian);
console.log(`jumlah komplek dari perhitungan 
(${nomor1} +${nomor2}) x ${totalPembagian} - (${totalPembagian} x ${totalPerkalian}) / ${nomor2} = ${totalKompleks} `);
