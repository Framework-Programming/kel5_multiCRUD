document.addEventListener('DOMContentLoaded', function () {
    fetchItems();

});

function fetchItems() {
    // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNDMxODAyLCJpYXQiOjE3MDI0MzE1MDIsImp0aSI6IjgxNTI3NmI5OGU4YjQ3ZWJhZWUzMDYzMTNlMTU1YmM2IiwidXNlcl9pZCI6MX0.ziI9t5KRxGEVqbwLvLpw7gsjVcv9YjfN7Af-kiy2j2I"
    const token = localStorage.getItem('accessToken');
    console.log(token);
    fetch('http://127.0.0.1:8000/api/v1/homes/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }) // Ganti dengan URL API
        .then(Response => Response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error: ', error));
}

function displayItems(items) {
    const itemsContainer = document.getElementById('form-home');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
        <label for="judul" class="form-label fw-medium">Judul Web</label>
        <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <input type="text" class="form-control mb-2 mb-md-0" id="dataJudul" style="max-width: 70%;"
                placeholder="Masukkan judul web" name="judul" value="${item.judul}">
            <input type="hidden" id="dataId" name="dataId" value="1">
        </div>

        <label for="deskripsi" class="form-label fw-medium mt-3">Deskripsi</label>
        <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <textarea class="form-control mb-2 mb-md-0" rows="5" id="dataDeskripsi" style="max-width: 90%;"
                placeholder="Masukkan deskripsi" name="deskripsi" >${item.deskripsi}</textarea>
        </div>

        <label for="link_youtube" class="form-label fw-medium mt-3">Link Youtube</label>
        <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <input type="text" class="form-control mb-2 mb-md-0" style="max-width: 70%;"
                placeholder="Masukkan link youtube" id="dataLink" name="link_youtube" value="${item.link_video}">
        </div>
        `;

        itemsContainer.appendChild(itemElement);
    })
}