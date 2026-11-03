import React, { useState } from 'react';

function InputQuiz() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Input Data</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
        <div>
          <label>Nama: </label>
          <input
            type="text"
            name="nama"
            placeholder="Masukkan Nama ..."
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Masukkan Email ...."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alamat: </label>
          <input
            type="text"
            name="alamat"
            placeholder="Masukkan Alamat..."
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3>Hasil Inputan:</h3>
        <p>Nama: {formData.nama}</p>
        <p>Email: {formData.email}</p>
        <p>Alamat: {formData.alamat}</p>
      </div>
    </div>
  );
}

export default InputQuiz;