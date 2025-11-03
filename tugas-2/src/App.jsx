import React, { useState } from "react";

function App() {
  // Membuat state bernama "count" dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah nilai count
  const tambah = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangi nilai count
  const kurang = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contoh useState</h1>
      <h2>Nilai Count: {count}</h2>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang} style={{ marginLeft: "10px" }}>
        Kurang
      </button>
    </div>
  );
}

export default App;
