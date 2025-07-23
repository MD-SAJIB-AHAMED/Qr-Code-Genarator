let currentText = "";

function generateQRCode() {
  const text = document.getElementById("qrText").value.trim();
  const container = document.getElementById("qrCode");
  container.innerHTML = "";

  if (!text) {
    return alert("Please enter some text!");
  }

  currentText = text;
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);

  QRCode.toCanvas(canvas, text, { width: 200 }, function(err) {
    if (err) {
      console.error(err);
      return alert("QR generation failed!");
    }
  });
}

function downloadQRCode() {
  const canvas = document.querySelector("#qrCode canvas");
  if (!canvas) {
    return alert("Generate a QR code first!");
  }

  const link = document.createElement("a");
  const filename = currentText.replace(/[^a-z0-9]/gi, "_").slice(0,20) + ".png";
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}