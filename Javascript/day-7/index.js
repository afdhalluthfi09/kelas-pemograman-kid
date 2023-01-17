
let kelas =[];
let dataSiswaNgajiA ={
    nama :"umar abdurrahman",
    kelas:"juz 30",
    umur:12,
    hobi:["mengaji","main sepeda"],
    lulus:false,
}
let dataSiswaNgajiB ={
    nama :"umar",
    kelas:"juz 30",
    umur:12,
    hobi:["mengaji","main sepeda"],
    lulus:false,
}
let dataSiswaNgajiC ={
    nama :"umar2",
    kelas:"juz 30",
    umur:9,
    hobi:[],
    lulus:false,
}

console.log(dataSiswaNgajiA);
console.log(dataSiswaNgajiB);
console.log(dataSiswaNgajiC);
kelas.push(dataSiswaNgajiA,dataSiswaNgajiB,dataSiswaNgajiC);
console.log(kelas);
//buid-in function  filter
const filterUmur = kelas.filter((siswa)=>{ return siswa.umur < 10});
console.log(filterUmur);

//cek hobiy yang belum terisi
const filterHobiKosong =kelas.filter((siswa) =>{return siswa.hobi == 0})
console.log(filterHobiKosong);

// mencari nama dalam datadiri
const filterNamaSiswa = kelas.filter((siswa)=>{ return siswa.nama == "umar abdurrahman"})
console.log(filterNamaSiswa);
alertCekNama("umar abdurrahman");

function alertCekNama(param){
    const filterNamaSiswa = kelas.filter((siswa)=>{ return siswa.nama == param})
    alert(` siswa dengan nama ${filterNamaSiswa[0].nama}, sudah terdaftar`);
}