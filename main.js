class ErroKhodam extends Error {}

// funtion execute
function execute(data) {
  const loading = document.getElementById("custom-loader");
  const nama = document.getElementById("p-nama");
  const meaning = document.getElementById("p-meaning");
  const khodam = document.getElementById("p-khodam");
  const inputNama = document.getElementById("nama");
  const btnCek = document.getElementById("btn-cek");

  btnCek.addEventListener("click", () => {
    if (inputNama.value == "") {
      console.log("masukan nama terlebih dahulu");
    } else {
      loading.style.display = "block";

      setTimeout(() => {
        const randomIndex = Math.ceil(Math.random() * data.length);

        nama.textContent = `Nama : ${inputNama.value}`;
        khodam.textContent = `Khodam : ${data[randomIndex].name}`;
        meaning.textContent = `Meaning : ${data[randomIndex].meaning}`;
        inputNama.value = "";

        loading.style.display = "none";
        //
      }, 1000);
    }
  });
}

async function dataKhodam(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ErroKhodam("gagal mendapatkan data");
    }
    const khodam = await response.json();
    execute(khodam);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

dataKhodam("data_kodam.json");
