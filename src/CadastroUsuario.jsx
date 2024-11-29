import axios from 'axios';
import { useState } from 'react';
import './CadastroUsuario.css'

export default function CadastroUsuario() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: ''
  });

  const cadastrarUsuario = async (req, res) => {
    const url = 'http://localhost:3000/cadastrar-usuario';
    const response = await axios.post(url, usuario);
    console.log(response);
    res.status(201).send({ mensagem: 'Usuário cadastrado com sucesso!' });
  }

  return (
    <>
      <div className='container'>
        <header>
          <p> Gerenciamento de Tarefas</p>
        </header>

        <div className='container-input'>
          <span>Nome: </span>
          <input
            type="text"
            placeholder='Nome'
            onChange={(nome) => setUsuario({ ...usuario, nome: nome.target.value })}
            value={usuario.nome}
          />
          <span>E-mail: </span>
          <input
            type="text"
            placeholder='Email'
            onChange={(email) => setUsuario({ ...usuario, email: email.target.value })}
            value={usuario.email}
          />
          <button onClick={cadastrarUsuario}>Cadastrar</button>
        </div>

      </div>
    </>
  );
}
