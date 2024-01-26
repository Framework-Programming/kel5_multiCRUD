document.addEventListener("DOMContentLoaded", function () {
  fetchItems();
});

function fetchItems() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1OTA5NjQ4LCJpYXQiOjE3MDU5MDI0NDgsImp0aSI6ImI2ZmNiYjQ3NTk5NDQxOWJiOTcxOTM4ODMzZTY5NDdiIiwidXNlcl9pZCI6MX0.TUgGi3ejkysY-lTxcnAX7cnIFVO_LIUDal-9deYLLSc";
  fetch("http://127.0.0.1:8000/api/v1/konsultasi/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }) // Ganti dengan URL API Anda
    .then((response) => response.json())
    .then((data) => displayItems(data))
    .catch((error) => console.error("Error:", error));
}

function displayItems(isikonsultasi) {
  const itemsContainer = document.getElementById("isikonsultasi");
  isikonsultasi.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("col-md-6");
    itemElement.innerHTML = `
          <div class="card mb-4">
              <div class="card-body">
                  <h5 class="card-title">${item.nama}</h5>
                  <p class="card-text">${item.konsultasi}</p>
              </div>
          </div>
      `;
    itemsContainer.appendChild(itemElement);
  });
}

function openMulaiModal() {}
