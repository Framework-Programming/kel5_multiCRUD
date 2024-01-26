function openMulaiModal() {
  document.getElementById("FormKonsulModal").style.display = "block";
}

function closeMulaiModal() {
  document.getElementById("FormKonsulModal").style.display = "none";
}

function generateRandomNumbers() {


  var randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
}

function showFileName() {
  var fileInput = document.getElementById("ItemBerkasKonsultasi");
  var fileInfo = document.getElementById("fileInfo_konsultasi");
  fileInfo.textContent =
    fileInput.files.length > 0
      ? "File Terpilih: " + fileInput.files[0].name
      : "";
}

document
  .getElementById("konsultasiForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const itemNama = document.getElementById("ItemNama").value;
    const itemWa = document.getElementById("ItemWa").value;
    const itemKonsultasi = document.getElementById("ItemKonsultasi").value;
    const itemBerkasKonsultasi = document.getElementById("ItemBerkasKonsultasi");
    const itemNomorKonsultasi = generateRandomNumbers();

    if (!itemNama || !itemWa || !itemKonsultasi) {
      alert("Silahkan isi semua field.");
      return;
    }

    // const data = {
    //   nama: itemNama,
    //   wa_konsultasi: itemWa,
    //   isi_konsultasi: itemKonsultasi,
    //   berkas_konsultasi: itemBerkasKonsultasi.files[0],
    //   nomor_konsultasi: "0",
    //   tgl_jawab_konsultasi: "2000-01-01",
    //   jawab_konsultasi: "0",
    //   status_konsultasi: "0",
    // };

    const data = new FormData();
    data.append("nama", itemNama);
    data.append("wa_konsultasi", itemWa);
    data.append("isi_konsultasi", itemKonsultasi);
    data.append("berkas_konsultasi", itemBerkasKonsultasi.files[0]);
    data.append("nomor_konsultasi", itemNomorKonsultasi);
    data.append("tgl_jawab_konsultasi", "2000-01-01");
    data.append("jawab_konsultasi", "0");
    data.append("status_konsultasi", "0");

    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/v1/konsultasi/`, {
      method: "POST", //atau 'POST', tergantung pada API anda
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((mulaiKonsul) => {
        console.log("mulai konsul form:", mulaiKonsul);
        $("#FormKonsulModal").modal("hide"); //Tutup modal jika sukses
        closeMulaiModal();
        //Anda mungkin juga ingin memperbarui UI atau daftar item disini
        // window.location.href = "../konsultasi-user/user-detail-konsultasi.html";
        const message = "Anda telah mendapatkan Kode konsultasi : " + itemNomorKonsultasi + " Silahkan check jawaban dengan memasukan kode konsultasi di menu lanjutkan konsultasi";
        alert(message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan");
      });
  });
