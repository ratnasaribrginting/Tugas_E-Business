import React, { useEffect, useState } from "react";

function App() {
  // State untuk menyimpan data users
  const [users, setUsers] = useState([]);

  // useEffect dijalankan saat komponen pertama kali dimuat
  useEffect(() => {
    // Memanggil API menggunakan fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Mengubah response jadi JSON
      .then((data) => {
        setUsers(data); // Simpan data ke state
        console.log("Data berhasil diambil:", data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }, []); // [] agar hanya dijalankan sekali saat pertama render

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Pengguna</h2>
      {users.length === 0 ? (
        <p>Memuat data...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
