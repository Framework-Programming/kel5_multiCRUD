document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.getElementById("items");
  let deleteItemId = null; // ID item yang akan dihapus

  // Event listener untuk tombol hapus
  itemsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      deleteItemId = e.target.getAttribute("data-id");
      $("#deleteConfirmModal").modal("show");
    }
  });

  // Event listener untuk konfirmasi hapus
  document
    .getElementById("confirmDelete")
    .addEventListener("click", function () {
      if (deleteItemId) {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1OTQ0NjUxLCJpYXQiOjE3MDU5NDQzNTEsImp0aSI6ImVhNmQ4YmNlYTFmOTQ4NmNhOTQ1OGFhZGFmNzVkM2E4IiwidXNlcl9pZCI6MX0.VUVwgGg8OuhmU3Fn4mEBYHLWAgEdGq1vN37J-aFjpmQ";
        fetch(`http://127.0.0.1:8000/api/v1/konsultasi/` + deleteItemId + "/", {
          method: "DELETE", // Metode DELETE
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Gagal menghapus item");
            }
            // Cek apakah respons memiliki konten
            if (response.status !== 204) {
              // 204 No Content
              return response.json();
            }
          })
          .then(() => {
            console.log("Item dihapus");
            $("#deleteConfirmModal").modal("hide");
            // Opsional: Hapus elemen item dari UI atau refresh halaman
            window.location.reload();
          })
          .catch((error) => console.error("Error:", error));
      }
    });
});
