function openLanjutModal() {
  document.getElementById("lanjutModal").style.display = "block";
}

function closeLanjutModal() {
  document.getElementById("lanjutModal").style.display = "none";
}

function openJawabanModal() {
  document.getElementById("JawabanKonsulModal").style.display = "block";
}

function closeJawabanModal() {
  document.getElementById("JawabanKonsulModal").style.display = "none";
}

function simpanLanjutKonsultasi() {
  // var nama_konsul = document.getElementById("namaLanjut").value;
  var kode_konsul = document.getElementById("nomor_konsultasi").value;
  console.log(kode_konsul);

  const token = localStorage.getItem('accessToken');
  fetch(`http://127.0.0.1:8000/api/v1/konsultasi/konsultasi-detail/` + kode_konsul + "/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      closeLanjutModal()
      openJawabanModal();
      document.getElementById("ItemNomorJawaban").value =
        data.nomor_konsultasi || "";
      document.getElementById("ItemNamaJawaban").value = data.nama || "";
      document.getElementById("ItemWaJawaban").value = data.wa_konsultasi || "";
      document.getElementById("ItemKonsultasiJawaban").value =
        data.isi_konsultasi || "";
      document.getElementById("ItemBerkasKonsultasiJawaban").src =
        data.berkas_konsultasi || "";

      document.getElementById("ItemJawaban").value = data.jawab_konsultasi || "";
      // Display the file name or other relevant information
      document.getElementById("ItemBerkasJawaban").src =
        data.berkas_jawab_konsultasi || "";
      // Set other fields to readonly
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan");
    });
}
