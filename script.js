let qr;

function generateQRCode() {
  const qrText = document.getElementById("qrText").value;
  const qrCodeContainer = document.getElementById("qrCode");
  qrCodeContainer.innerHTML = ""; // Clear previous

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
  if (!qr) {
    alert("Please generate QR code first");
    return;
  }

  const img = document.querySelector("#qrCode img") || document.querySelector("#qrCode canvas");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src || img.toDataURL("image/png");
    link.download = "qr_code.png";
    link.click();
  }
}