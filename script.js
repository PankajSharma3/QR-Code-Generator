const qrText = document.querySelector('#qrText');
const qrImage = document.getElementById('qrImage');
const generateQR = ()=>{
    let spaces = 0;
    for(let i=0;i<qrText.value.length;i++){
        if(qrText.value[i]=== " ")
        spaces++;
    }
    if(spaces!==0){
        alert("Please enter the text without spaces");
    }
    else if(qrText.value===""){
        console.log(spaces);
        alert("Please enter some text to be encoded in the QR code");
    }
    else{
        console.log(spaces);
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+(qrText.value);
    }
}

qrText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateQR();
    }
});
