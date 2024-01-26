document.addEventListener("DOMContentLoaded", function () {
  fetchItems();
});

function fetchItems() {
  const token = localStorage.getItem('accessToken');
  fetch("http://127.0.0.1:8000/api/v1/konsultasi/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) // Ganti dengan URL API Anda
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fetched successfully:", data);
      displayItems(data);
    })
    .catch((error) => console.error("Error:", error));
}

function displayItems(items) {
  const itemsContainer = $("#datatable tbody");

  items.forEach((item) => {
    const row = $("<tr>").html(`
        <td>${item.nomor_konsultasi}</td>
        <td>${item.nama}</td>
        <td>${item.wa_konsultasi}</td>
        <td>${item.isi_konsultasi}</td>
        <td><img src="${item.berkas_konsultasi}" width="200" height="200"></td>
        <td>${item.jawab_konsultasi}</td>
        <td><img src="${item.berkas_jawab_konsultasi}" width="200" height="200"></td>
        <td>${item.status_konsultasi == '0' ? 'Pending' : 'Terjawab'}</td>
        <td>${item.tgl_konsultasi}</td>
        <td>${item.tgl_jawab_konsultasi}</td>
        <td>
          <button class="btn btn-primary edit-btn" data-id="${item.id}"><i class="fas fa-edit"></i>Edit</button>
          <button class="btn btn-danger delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i>Delete</button>
        </td>
      `);
    itemsContainer.append(row);
  });

  // Initialize DataTable
  $("#datatable").DataTable();

  document.querySelectorAll(".edit-btn").forEach((button) => {
    console.log("Button ID:", button.getAttribute("data-id")); //Untuk debugging
    button.addEventListener("click", function () {
      //console.log("Clicked ID:", this.getAttribute('data-id')); Debugging daat tombol diklik
      openEditModal(this.getAttribute("data-id"));
    });
  });

  function openEditModal(id) {
    //Ambil data item dari API atau dari list yang sudah ada
    console.log("ID yang diterima:", id);
    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/v1/konsultasi/` + id + "/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Isi formulir di modal dengan data yang ada
        document.getElementById("ItemId").value =
          id || "";
        document.getElementById("ItemNomor").value =
          data.nomor_konsultasi || "";
        document.getElementById("ItemNama").value = data.nama || "";
        document.getElementById("ItemWa").value = data.wa_konsultasi || "";
        document.getElementById("ItemKonsultasi").value =
          data.isi_konsultasi || "";
        document.getElementById("ItemBerkasKonsultasi").src =
          data.berkas_konsultasi || "";

        document.getElementById("ItemJawaban").value = data.jawaban || "";
        // Display the file name or other relevant information
        const berkasJawabanElement =
          document.getElementById("ItemBerkasJawaban");
        berkasJawabanElement.textContent = data.berkas_jawab_konsultasi || "";
        // Set other fields to readonly
        document.getElementById("ItemNomor").readOnly = true;
        document.getElementById("ItemNama").readOnly = true;
        document.getElementById("ItemWa").readOnly = true;
        document.getElementById("ItemKonsultasi").readOnly = true;
        document.getElementById("ItemBerkasKonsultasi").readOnly = true;

        //Tampilkan modal
        $("#editItemModal").modal("show");
      })
      .catch((error) => console.error("Error:", error));
  }
}
