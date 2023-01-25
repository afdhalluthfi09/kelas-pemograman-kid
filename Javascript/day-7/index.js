
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
let dataSiswaNgajiD ={
    nama :"sofyan",
    kelas:"juz 30",
    umur:9,
    hobi:[],
    lulus:false,
}
let dataSiswaNgajiE ={
    nama :"yayayn",
    kelas:"juz 30",
    umur:9,
    hobi:[],
    lulus:false,
}

kelas.push(dataSiswaNgajiA,dataSiswaNgajiB,dataSiswaNgajiC);

//buid-in function  filter
const filterUmur = kelas.filter((siswa)=>{ return siswa.umur < 10});
// console.log(filterUmur);

//cek hobiy yang belum terisi
const filterHobiKosong =kelas.filter((siswa) =>{return siswa.hobi == 0})
// console.log(filterHobiKosong);

// mencari nama dalam datadiri
const filterNamaSiswa = kelas.filter((siswa)=>{ return siswa.nama == "umar abdurrahman"})
// console.log(filterNamaSiswa);
// alertCekNama("umar abdurrahman");

// function alertCekNama(param){
//     const filterNamaSiswa = kelas.filter((siswa)=>{ return siswa.nama == param})
//     alert(` siswa dengan nama ${filterNamaSiswa[0].nama}, sudah terdaftar`);
// }

// const articlesWithTips = data.reduce((articles, user) => {
//     return articles.concat(user.articles.filter(article => article.title.toLowerCase().includes("tips")));
//   }, []);
// console.log(articlesWithTips);

// cari nama siswangjai yang mengandung nama umar dalam  1 kelas
function filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}

function robotPencariNamadepan(array,string){
    return array.filter(siswa=>
        Object.keys(siswa).some(k => siswa[k].toLowerCase().includes(string.toLowerCase())))
}


///=====

let datadiria ={
    nama:"abdul",
    kelas:"6",
    umur:"12",
    hobi:"tidur",
    lulus:"false",
}
// datadiria.nama="umar abdul";
// console.log(datadiria);

let datadirib ={
    nama:"faroz",
    kelas:"1sma",
    umur:"15",
    hobi:"ngaji",
    lulus:"false",
}
// datadirib.nama="faroz";
// console.log(datadirib);

let datadiric ={
    nama:"adurrozaq",
    kelas:"4",
    umur:"10",
    hobi:"ngaji",
    lulus:"false",
}
// datadiric.nama="adurrozaq";
// console.log(datadiric);

let datadirid ={
    nama:"abdullah",
    kelas:"1",
    umur:"7",
    hobi:"ngaji",
    lulus:"false",
}
// datadirid.nama="abdullah";
// console.log(datadirid);

let datadirie ={
    nama:"azam",
    kelas:"4",
    umur:"10",
    hobi:"ngaji",
    lulus:"false",
}
// datadirie.nama=" azam";
// console.log(datadirie);

let datadirif ={
    nama:"saad",
    kelas:"1",
    umur:"7",
    hobi:"ngaji",
    lulus:"false",
}
// datadirif.nama="saad";
// console.log(datadirif);

let datadirig ={
    nama:"ubaydillah",
    kelas:"6",
    umur:"12",
    hobi:"",
    lulus:"false",
}
// datadirig.nama="ubaydillah";
// console.log(datadirig);

let datadirih ={
    nama:"abdurrahman",
    kelas:"3smp",
    umur:"14",
    hobi:"",
    lulus:"false",
}
// datadirih.nama="abdurrahaman";
// console.log(datadirih);

let kelas1=[]

kelas1.push(
     datadiria,
     datadirib,
     datadiric,
     datadirid,
     datadirie,
     datadirif,
     datadirig,
)
console.log(kelas1);
console.log(robotPencariNamadepan(kelas1,'faroz'));

