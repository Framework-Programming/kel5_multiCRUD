function openTambahModal() {
    document.getElementById('tambahModal').style.display = 'block';
  }
  
  function closeTambahModal() {
    document.getElementById('tambahModal').style.display = 'none';
  }
  
  function simpanKonsultasi() {
    var isi_konsul = document.getElementById('isi_konsultasi').value;
  
    if (isi_konsul.trim() === '') {
      alert('Harap isi semua isian formulir');
    } else {
      alert('Konsultasi berhasil disimpan!');
      closeModal();
    }
  }
  