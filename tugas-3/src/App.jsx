import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect pertama → dijalankan sekali saat komponen pertama kali dimuat
  useEffect(() => {
    console.log("Komponen pertama kali dimuat");
  }, []); // hanya dijalankan sekali

  // useEffect kedua → dijalankan setiap kali 'count' berubah
  useEffect(() => {
    if (count > 0) {
      console.log(`Tombol ditekan ${count} kali`);
    }
  }, [count]); // hanya berjalan ketika count berubah

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Contoh useEffect</h1>

      <h2>Hitung Tombol</h2>
      <p>Nilai saat ini: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default App;
