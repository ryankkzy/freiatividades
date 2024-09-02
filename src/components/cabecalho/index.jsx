import './index.scss';

export default function Cabecalho(props) {
    return (
        <header className='com-cabecalho'>
            <div className='info'>
                <img src="/assets/images/success.png" alt="" />
                <h1 className='titulo'>
                    {props.titulo}
                </h1>
            </div>
        </header>
    )
}