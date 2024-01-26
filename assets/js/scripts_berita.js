document.addEventListener("DOMContentLoaded", function () {
  fetchItems();
});

function fetchItems() {
  fetch("http://127.0.0.1:8000/api/v1/berita/", {
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
        <td>${item.id}</td>
        <td>${item.judul_berita}</td>
        <td>${item.konten_berita}</td>
        <td><img src="${item.sampul_berita}" width="200"></td>

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
    fetch(`http://127.0.0.1:8000/api/v1/berita/` + id + "/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Isi formulir di modal dengan data yang ada
        document.getElementById("ItemId").value = id || "";
        document.getElementById("ItemJudul").value =
          data.judul_berita || "";
        document.getElementById("ItemKonten").value = data.konten_berita || "";

        document.getElementById("ItemSampulImage").src = data.sampul_berita || "";

        // document.getElementById("ItemJawaban").value = data.jawaban || "";
        // // Display the file name or other relevant information
        const sampulElement = document.getElementById("ItemSampul");
        sampulElement.textContent = data.sampul_berita ? data.sampul_berita : "";

        // Set other fields to readonly
        // document.getElementById("ItemNomor").readOnly = true;
        // document.getElementById("ItemNama").readOnly = true;
        // document.getElementById("ItemWa").readOnly = true;
        // document.getElementById("ItemKonsultasi").readOnly = true;
        // document.getElementById("ItemBerkasKonsultasi").readOnly = true;

        //Tampilkan modal
        $("#editItemModal").modal("show");
      })
      .catch((error) => console.error("Error:", error));
  }
}

document.getElementById('addItemForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append('judul_berita', document.getElementById('ItemJudul').value);
  formData.append('konten_berita', document.getElementById('ItemKonten').value);
  formData.append('sampul_berita', document.getElementById('ItemSampul').files[0]);
  formData.append('author_berita', "1");
  formData.append('status_berita', "Published");


  console.log(formData)

  const token = localStorage.getItem('accessToken');
  fetch('http://127.0.0.1:8000/api/v1/berita/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      console.log('Success: ', data);
      $('#exampleModal').modal('hide');
      window.location.reload();
      // displayitems(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


});
