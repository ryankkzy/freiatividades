import './index.scss';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';

export default function Inicio() {

  return (
    <div className="pagina-atividade">
      <Cabecalho titulo='Atividades' />
      <div className='ativ'>
        <p>Conteúdos</p>
      </div>

      <Rodape />
    </div>
  );
}

