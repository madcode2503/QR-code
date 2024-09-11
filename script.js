
let qrtext = document.getElementById("qrText");
let qrimage = document.getElementById("image");
let imgbox = document.getElementById("imgbox");

function Generate() {
    if (qrtext.value.length > 0) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    }
    else{
        alert("Please input text or URL!");
    }
}
function reset(){
    location.replace("index.html");
}
