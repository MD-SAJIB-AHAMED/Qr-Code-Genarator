let qr;

function generateQRCode() {
  const qrText = document.getElementById("qrText").value;
  const qrCodeContainer = document.getElementById("qrCode");
  qrCodeContainer.innerHTML = ""; // পুরনো QR মুছে ফেলি

  if (qrText.trim().length === 0) {
    alert("Please enter some text");
    return;
  }

  qr = new QRCode(qrCodeContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function downloadQRCode() {
  const canvas = document.querySelector("#qrCode canvas");

  if (!canvas) {
    alert("Please generate QR code first!");
    return;
  }

  const imageData = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imageData;
  link.download = "qr_code.png";
  link.click();
}