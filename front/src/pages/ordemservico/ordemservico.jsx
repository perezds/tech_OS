import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdemServico = () => {
  const [form, setForm] = useState({
    descricao: '',
    status: 'iniciada',
    prioridade: 'media',
    patrimonio: '',
    ambiente: '',
    manutentor: '',
    responsavel: '',
  });

  const [ambientes, setAmbientes] = useState([]);
  const [manutentores, setManutentores] = useState([]);
  const [responsaveis, setResponsaveis] = useState([]);
  const [patrimonios, setPatrimonios] = useState([]);

  const [userData, setUserData] = useState({ nome: '', sn: '' });

  const token = localStorage.getItem('token');

  useEffect(() => {
    // Captura dados relacionados
    axios.get('http://localhost:8000/ambientes', { headers: auth() }).then(res => setAmbientes(res.data));
    axios.get('http://localhost:8000/manutentores', { headers: auth() }).then(res => setManutentores(res.data));
    axios.get('http://localhost:8000/responsaveis', { headers: auth() }).then(res => setResponsaveis(res.data));
    axios.get('http://localhost:8000/patrimonios', { headers: auth() }).then(res => setPatrimonios(res.data));

    // Simula usuário logado (ou pegue de outra API caso use JWT)
    setUserData({ nome: 'Fulano de Tal', sn: 'SN1021328' });
  }, []);

  const auth = () => ({ Authorization: `Bearer ${token}` });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      funcionario: userData.nome,
      sn: userData.sn,
    };

    try {
      await axios.post('http://localhost:8000/ordens-servico', payload, { headers: auth() });
      alert('Ordem criada com sucesso!');
      setForm({ descricao: '', status: 'iniciada', prioridade: 'media', patrimonio: '', ambiente: '', manutentor: '', responsavel: '' });
    } catch (error) {
      alert('Erro ao criar ordem de serviço');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-2xl font-semibold mb-4">Nova Ordem de Serviço</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Descreva o problema..."
          required
          className="w-full p-2 border rounded"
        />

        <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="iniciada">Iniciada</option>
          <option value="em_andamento">Em andamento</option>
          <option value="finalizada">Finalizada</option>
          <option value="cancelada">Cancelada</option>
        </select>

        <select name="prioridade" value={form.prioridade} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="baixa">Baixa</option>
        </select>

        <select name="ambiente" value={form.ambiente} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Selecione o ambiente</option>
          {ambientes.map((a) => (
            <option key={a.id} value={a.id}>{a.nome}</option>
          ))}
        </select>

        <select name="patrimonio" value={form.patrimonio} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">(Opcional) Selecione o patrimônio</option>
          {patrimonios.map((p) => (
            <option key={p.id} value={p.id}>{p.ni || p.descricao}</option>
          ))}
        </select>

        <select name="manutentor" value={form.manutentor} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Selecione o manutentor</option>
          {manutentores.map((m) => (
            <option key={m.id} value={m.id}>{m.nome}</option>
          ))}
        </select>

        <select name="responsavel" value={form.responsavel} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">(Opcional) Selecione o responsável</option>
          {responsaveis.map((r) => (
            <option key={r.id} value={r.id}>{r.nome}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Criar Ordem de Serviço
        </button>
      </form>
    </div>
  );
};

export default OrdemServico;
