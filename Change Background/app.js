const colors = ["red", "green", "blue", "yellow", "purple"];

function gantiWarna(warna) {
  return new Promise((resolve) => {
    // Simulasikan perubahan warna
    setTimeout(() => {
      document.body.style.backgroundColor = warna;
      resolve();
    }, 1000);
  });
}

async function loopWarna() {
  for (const warna of colors) {
    await gantiWarna(warna);
  }
  // Loop kembali ke awal
  loopWarna();
}

loopWarna();
