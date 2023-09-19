
if(confirm("Arxa fonu qara elemek isteyirsen") == true){
    document.body.style.backgroundColor = "#000";
}
let yas = prompt("Yasinizi yazin : ");
if(yas < 18 ){
    console.log("18 yazdan kicikdir");
}




const person = {
    ad: "",
    soyad: "",
    pass: "",
    get FullName(){
        return (this.ad+" "+this.soyad).toUpperCase();
    },

    set Ad(ad) {
        if (ad.trim() === "") {
            console.log("Ad bosdur")
        } else {
            this.ad = ad;
        }
    },
    set Soyad(soyad) {
        if (soyad.trim() === "") {
            console.log("Soyad bosdur")
        } else {
            this.soyad = soyad;
        }
    },
    set Pass(pass){
        if (pass == "") {
            console.log("sifre bosdur")
        } else {
            this.pass = pass;
        }
    }
   
}

const inputAd = document.getElementById("ad");
const inputSoyad = document.getElementById("soyAd");
const inputPass = document.getElementById("pass");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", Createuser);

function Createuser() {
    person.Ad = inputAd.value;
    person.Soyad = inputSoyad.value;
    person.Pass = inputPass.value;
    result.style.color="#ff0"
    result.innerHTML=person.FullName;
}

