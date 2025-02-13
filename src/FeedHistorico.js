import './feefHistorico.css';
import {ReactComponent as Comentario} from './img/comentarios.svg';
import {ReactComponent as Repostar} from './img/repostar.svg';
import {ReactComponent as Curtir} from './img/curtir.svg';
import {ReactComponent as Visualizacoes} from './img/visualizacoes.svg';
import {ReactComponent as Salvar} from './img/salvar.svg';
import {ReactComponent as Mais} from './img/mais.svg';
import {ReactComponent as Compartilhar} from './img/compartilhar.svg';
import {ReactComponent as Excluir} from './img/excluir.svg';
import tom from './img/avatarTom.png'; 
import { useState } from 'react';

function FeedHistorico({txt, dia, mes, excluirPost, index}){
    const [xVisivel, setXVisivel]=useState(false);

    return (
        <div className="feedHistorico">
            <div className="feedUnd">
                {/* Avatar do Usuário */}
                <div className="feedAvatar">
                    <img src={tom} alt="avatar" />
                </div>
                {/* Informações do Usuário */}
                <div className='feedTexto'>
                    <div className="feedUsuario">
                        <h1>Tom</h1>
                        <p>@TOM</p>
                        <span>·</span>
                        <p>{dia} <i>de</i> {mes}</p>
                        <button title="Mais opções" onClick={() => setXVisivel(!xVisivel)}>
                            <Mais />
                        </button>
                        <div className='maisMenu' style={{display: xVisivel ? 'block': 'none'}}>
                            <button onClick={()=> excluirPost(index, setXVisivel(false))}><span><Excluir/></span><h4>Excluir</h4></button>
                        </div>
                    </div>
                    {/* Conteúdo da Publicação */}
                    <div className="feedPublicacao">
                        <h4>{txt}</h4>
                        
                    </div>
                    {/* Ações da Publicação */}
                    <div className="feedAcoes">
                        <div className='btComentar'>
                            <button title="Comentar">
                                <Comentario />
                            </button>
                            
                        </div>
                        <div className='btRepostar'>
                            <button title="Repostar">
                                <Repostar />
                            </button>
                            
                        </div>
                        <div className='btCurtir'>
                            <button title="Curtir">
                                <Curtir />
                            </button>
                            
                        </div>
                        <div className='btVisualizar'>
                            <button title="Visualizar">
                                <Visualizacoes />
                            </button>
                            
                        </div>
                        <div className='btSalvar'>
                            <button title="Salvar">
                                <Salvar />
                            </button>
                            
                        </div>
                        <div className='btCompartilhar'>
                            <button title="Compartilhar">
                                <Compartilhar />
                            </button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default FeedHistorico;
