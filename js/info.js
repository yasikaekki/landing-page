var nama = prompt("Inputkan nama anda : ");

if(nama != ""){
    window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada situs kami");
} else {
    window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada situs kami");
}

function isian() {
    if(nama != ""){
        window.alert("Selamat datang "+nama+"\nAnda pengunjung ke-"+parseInt(5*3+2)+" pada situs kami");
    } else {
        window.alert("Maaf anda tidak menginputkan data apapun :(");
    }
} 

function iniConfirm() {
    if (window.confirm("Apa anda tertarik dengan situs kami ?")) {
        window.alert("Terima Kasih sudah support situs kami ^_^")
    } else {
        window.alert("Ok, lain kali ya :D")
    }
}