import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './responsaveis.css';

export default function Responsaveis() {
  const [resp, setResp] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    departamento: ''
  });

  const token = localStorage.getItem('token');
  

  

  useEffect(() => {
    console.log("Teste");
    
    const capturar = async()=>{
      try {
        const response = await axios.get('http://localhost:8000/api/responsaveis/', 
          {
            headers: { Authorization: `Bearer ${token}` },
          })
        setResp(response.data)
        console.log(resp)
        
      } catch (error) {
        console.error(error)
      }
      
    }
    capturar()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/responsaveis/', form, { headers })
    .then(() => {
    
      axios.get('http://localhost:8000/api/responsaveis/', { headers })
        .then(res => setResp(res.data))
        .catch(err => console.error(err));
      setForm({ nome: '', email: '', departamento: '' });
    })
    .catch(err => console.error(err));

  return (
    <div className="responsaveis-page">
      <div className="responsaveis-container">
        <div className="responsaveis-box">
          <h2>Responsáveis</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Departamento"
              value={form.departamento}
              onChange={(e) => setForm({ ...form, departamento: e.target.value })}
              required
            />
            <button type="submit">Adicionar Responsável</button>
          </form>
        </div>

        {resp.length > 0 && (
          <div className="responsaveis-box">
            <h2>Lista de Responsáveis</h2>
            <table className="tabela">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Departamento</th>
                </tr>
              </thead>
              <tbody>
                {resp.map(r => (
                  <tr key={r.id}>
                    <td>{r.nome}</td>
                    <td>{r.email}</td>
                    <td>{r.departamento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
}   



