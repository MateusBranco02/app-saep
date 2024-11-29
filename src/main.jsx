import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import CadastroUsuario from './CadastroUsuario.jsx';
import CadastroTarefa from './CadastroTarefa.jsx';

const router = createBrowserRouter([
  { path: '/', element: <CadastroUsuario /> },
  { path: '/cadastrar-tarefa', element: <CadastroTarefa /> }
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);