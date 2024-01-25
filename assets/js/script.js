document.addEventListener("DOMContentLoaded", function () {
    fetchItems();
  });
  
  function fetchItems() {
    const token = localStorage.getItem('accessToken');
    fetch('', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => displayItems(data))
      .catch((error) => console.error("Error:", error));
  }