document.addEventListener("DOMContentLoaded", function() {
    fetchItems();
});

function fetchItems(){
    const token = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/api/v1/user/',{
        Headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data=> displayitem(data))
    .catch(error => console.error('Error', error));
}

function displayItems(items) {
    const itemsContainer = $("#datatable tbody");
  
    items.forEach((item) => {
      const row = $("<tr>").html(`
          <td>${item.id_pengguna}</td>
          <td>${item.email_pengguna}</td>
          <td>${item.nama_pengguna}</td>
          <td>${item.level_pengguna}</td>
  
          <td>
            <button class="btn btn-primary edit-btn" data-id="${item.id}"><i class="fas fa-edit"></i>Edit</button>
            <button class="btn btn-danger delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i>Delete</button>
          </td>
        `);
      itemsContainer.append(row);
    });
  
    // Initialize DataTable
    $("#datatable").DataTable();
}