const nama = "Baruch El Maahi"
let usia = 24;

function generateBiodata() {
  let generasi;

 if (usia > 5 && usia < 10) {
   generasi = "generasi anak-anak";
 }
 else if (usia > 10 && usia < 18){
  generasi = "generasi remaja";
 }
 else if(usia > 18 && usia < 50){
  generasi = "generasi dewasa";
 }
 else if(usia >= 50){
  generasi = "generasi lanjut usia";
 }
 else {
  generasi = "generasi bayi";
 }

 return console.log(`Nama saya ${nama} dan usia saya adalah ${usia} tahun. saya termasuk ${generasi}`)
}

console.log(nama)
console.log(usia)

generateBiodata()