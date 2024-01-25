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
      .then((data) => displayItems(data))
      .catch((error) => console.error("Error:", error));
  }