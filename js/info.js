var nama = prompt("Inputkan nama anda : ");

if(nama != ""){
    window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada website saya");
} else {
    window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada website saya");
}

function isian() {
    if(nama != ""){
        window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada website saya");
    } else {
        window.alert("Maaf anda tidak menginputkan data apapun :(");
    }
} 

function iniConfirm() {
    if (window.confirm("Apa anda tertarik dengan website saya ?")) {
        window.alert("Terima Kasih sudah support website saya ^_^")
    } else {
        window.alert("Ok, lain kali ya :D")
    }
}