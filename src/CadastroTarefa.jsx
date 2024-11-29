import axios from 'axios';
import { useState } from 'react';
import './CadastroUsuario.css'

export default function CadastroTarefa() {
    const [tarefa, setTarefa] = useState({
        descricao: '',
        setor: ''
    });

    const cadastrarTarefa = async (req, res) => {
        const url = 'http://localhost:3000/cadastrar-tarefa';
        const response = await axios.post(url, tarefa);
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
                    <span>Descricão: </span>
                    <input
                        type="text"
                        placeholder='Descricão'
                        onChange={(descricao) => setTarefa({ ...tarefa, descricao: descricao.target.value })}
                        value={tarefa.descricao}
                    />
                    <span>Setor: </span>
                    <input
                        type="text"
                        placeholder='Setor'
                        onChange={(setor) => setTarefa({ ...usuario, setor: setor.target.value })}
                        value={tarefa.setor}
                    />
                    <button onClick={cadastrarTarefa}>Cadastrar</button>
                </div>

            </div>
        </>
    );
}
