document
  .getElementById("editItemForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); //Mencegah form mengirimkan secara tradisional

    const itemId = document.getElementById("ItemId").value;
    const itemNomor = document.getElementById("ItemNomor").value;
    const itemNama = document.getElementById("ItemNama").value;
    const itemWa = document.getElementById("ItemWa").value;
    const itemKonsultasi = document.getElementById("ItemKonsultasi").value;
    const itemBerkasKonsultasi = document.getElementById("ItemBerkasKonsultasi").src;
    const itemJawaban = document.getElementById("ItemJawaban").value;
    const itemBerkasJawaban = document.getElementById("ItemBerkasJawaban");

    //pastikan semua field telah terisi
    if (!itemJawaban || !itemBerkasJawaban) {
      alert("Silahkan isi semua field.");
      return;
    }

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    var currentDay = ('0' + currentDate.getDate()).slice(-2);

    const data = new FormData();
    data.append("nama", itemNama);
    data.append("wa_konsultasi", itemWa);
    data.append("isi_konsultasi", itemKonsultasi);
    // data.append("berkas_konsultasi", itemBerkasKonsultasi);
    data.append("nomor_konsultasi", itemNomor);
    data.append("tgl_jawab_konsultasi", currentYear + '-' + currentMonth + '-' + currentDay);
    data.append("jawab_konsultasi", itemJawaban);
    data.append("berkas_jawab_konsultasi", itemBerkasJawaban.files[0]);
    data.append("status_konsultasi", "1");


    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/v1/konsultasi/` + itemId + "/", {
      method: "PUT", //atau 'POST', tergantung pada API anda
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
      .then((editItem) => {
        console.log("Item edited:", editItem);
        $("#editItemModal").modal("hide"); //Tutup modal jika sukses
        //Anda mungkin juga ingin memperbarui UI atau daftar item disini
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat memperbarui jawaban");
      });
  });
