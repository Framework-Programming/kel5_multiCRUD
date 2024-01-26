document
  .getElementById("editItemForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); //Mencegah form mengirimkan secara tradisional

    const itemId = document.getElementById("ItemId").value;
    const itemJudul = document.getElementById("ItemJudul").value;
    const itemKonten = document.getElementById("ItemKonten").value;
    const itemSampul = document.getElementById("itemSampul");

    //pastikan semua field telah terisi
    // if (!itemSampul) {
    //   alert("Silahkan isi semua field.");
    //   return;
    // }

    // var currentDate = new Date();
    // var currentYear = currentDate.getFullYear();
    // var currentMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding leading zero if needed
    // var currentDay = ('0' + currentDate.getDate()).slice(-2);

    const data = new FormData();
    data.append("judul_berita", itemJudul);
    data.append("konten_berita", itemKonten);

    // Check if itemSampul is defined and has files
    const sampulFile = itemSampul && itemSampul.files && itemSampul.files[0];

    // Append "sampul_berita" only if sampulFile exists
    sampulFile ? data.append("sampul_berita", sampulFile) : null;

    console.log(data)


    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/v1/berita/` + itemId + "/", {
      method: "PATCH", //atau 'POST', tergantung pada API anda
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
