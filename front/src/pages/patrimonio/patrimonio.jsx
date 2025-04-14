import React, { useState, useEffect } from "react";
import axios from "axios";
import "./patrimonio.css"; 

function Patrimonios() {
  const [patrimonios, setPatrimonios] = useState([]);
  const [form, setForm] = useState({ ni: "", descricao: "", localizacao: "" });

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios.get("http://localhost:8000/patrimonios/", { headers })
      .then(res => setPatrimonios(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/patrimonios/", form, { headers })
      .then(res => {
        setPatrimonios([...patrimonios, res.data]);
        setForm({ ni: "", descricao: "", localizacao: "" });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="patrimonios-page">
      <div className="patrimonios-container">
        <div className="patrimonios-box">
          <h2>Patrimônios</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Número de Identificação"
              value={form.ni}
              onChange={(e) => setForm({ ...form, ni: e.target.value })}
            />
            <input
              type="text"
              placeholder="Localização"
              value={form.localizacao}
              onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            />
            <button type="submit">Adicionar Patrimônio</button>
          </form>
        </div>

        {patrimonios.length > 0 && (
          <div className="patrimonios-list">
            {patrimonios.map((p) => (
              <div key={p.id} className="patrimonio-item">
                <p><strong>NI:</strong> {p.ni || "—"}</p>
                <p><strong>Descrição:</strong> {p.descricao}</p>
                <p><strong>Localização:</strong> {p.localizacao}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Patrimonios;
