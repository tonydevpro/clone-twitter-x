import './Menu.css';
import tom from './img/avatarTom.png';
import {ReactComponent as X } from './img/x.svg'
import {ReactComponent as Inicio } from './img/inicio.svg'
import {ReactComponent as Pesquisar } from './img/pesquisar.svg'
import {ReactComponent as Notificacao } from './img/notificacao.svg'
import {ReactComponent as Mensagem } from './img/mensagem.svg'
import {ReactComponent as Grok } from './img/grok.svg'
import {ReactComponent as Perfil } from './img/perfil.svg'
import {ReactComponent as MenuMais } from './img/menuMais.svg'
import {ReactComponent as Add} from './img/add.svg';

function Menu(){
    return(
        <div className="Menu">
            <div className="logo">
                <X/>
            </div>
            <nav className="opcoesMenu">
                <ul>
                    <li><a href="#inicio"><Inicio/><span>Início</span></a></li>
                    <li><a href="#explore"><Pesquisar/><span>Explore</span></a></li>
                    <li><a href="#notificacoes"><Notificacao/><span>Notificações</span></a></li>
                    <li><a href="#mensagens"><Mensagem/><span>Mensagens</span></a></li>
                    <li><a href="#grok"><Grok/><span>Grok</span></a></li>
                    
                    <li><a href="#perfil"><Perfil/><span>Perfil</span></a></li>
                    <li><a href="#mais"><MenuMais/><span>Mais</span></a></li>
                </ul>
                <button className="btnPublicar"><i><Add/></i><span>Publicar</span></button>
            </nav>
            <div className="inforLogin">
                <div className="avatar">
                    <img src={tom} alt="avatar"></img>
                </div>
                <div className="usuario">
                    <h1>Tom</h1>
                    <p>@TOM</p>
                </div>
                <div className="opçoes">
                    ...
                </div>
            </div>
        </div>
    );
}

export default Menu;