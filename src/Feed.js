import './feed.css';
import FeedHistorico from './FeedHistorico';
import tom from './img/avatarTom.png';
import {useState, useEffect} from 'react';

import {ReactComponent as Emoji} from './img/emoji.svg';
import {ReactComponent as EmojiFoto} from './img/emojiFoto.svg';
import {ReactComponent as EmojiGif} from './img/emojiGif.svg';
import {ReactComponent as EmojiGrok} from './img/emojiGrok.svg';
import {ReactComponent as EmojiEnquete} from './img/emojiEnquete.svg';
import {ReactComponent as EmojiAgendar} from './img/emojiAgendar.svg';
import {ReactComponent as EmojiMap} from './img/emojiMap.svg';






function Feed(){
    
    const dia= (new Date().getDate());
    const mes= (new Date().getMonth());
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const mesAtual= meses[mes];
    const postFixo = { texto: `
🌟Bem-vindo ao X!🌟
\n
Esta é uma publicação permanente para te dar as boas-vindas ao nosso feed.  
Aqui, você pode explorar a interface e fazer sua própria publicação!  
\n
Clique no campo "O que está acontecendo?" acima e comece a postar.  
Sua publicação ficará visível aqui por um bom tempo.  

`, dia: dia, mes: mesAtual};
    const [feedHis, setFeedHis] = useState([postFixo]);
    const [inputValue, setInputValue] = useState('');

    
    //reset do localstorage
/*    useEffect(()=>{
        localStorage.setItem('feedHis', JSON.stringify(feedHis))
    },[]);*/


   // Recupera os posts salvos no localStorage ao carregar a página
   useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('feedHis')) || [];
    setFeedHis(dadosSalvos);
}, []); // Executa apenas uma vez, ao montar o componente



    function inputTecla(props){
        setInputValue(props.target.value);
    }

    function postar() {
        if (inputValue.trim() === '') return; // Evita postagens vazias
    
        const novoPost = { texto: inputValue,dia: dia, mes: mesAtual };
    
        setFeedHis(prevFeed => {
            const novoFeed = [novoPost, ...prevFeed]; // Adiciona o novo post no início do array
            localStorage.setItem('feedHis', JSON.stringify(novoFeed));
            return novoFeed;
        });
    
        setInputValue('');
    }
    function excluirPost(index) {
        const novoFeed = feedHis.filter((_, i) => i !== index);
        setFeedHis(novoFeed);
        localStorage.setItem('feedHis', JSON.stringify(novoFeed));
    }

        

    return(
        <div className='feedGeral'>
            <div className='menuFixo'>
                <h1>Para você</h1>
                <h1>Seguindo</h1>
            </div>
            <div className='publicar'>
                <div className='publicarAvatar'>
                    <img src={tom} alt='avatar'></img>
                </div>
                <div className='publicarComentario'>
                    <input onChange={inputTecla} value={inputValue} placeholder='o que está acontecendo?!'></input>
                    <div className='publicarBt'>
                        <div className='publicarIcones'>
                            <button><EmojiFoto/></button>
                            <button><EmojiGif/></button>  
                            <i><button><EmojiGrok/></button></i> 
                            <i><button><EmojiEnquete/></button></i>
                            <button><Emoji/></button>
                            <i><button><EmojiAgendar/></button></i>
                            <button><EmojiMap/></button>
                        </div>
                        <div className='publicarBtPostar'>
                            <button onClick={postar} >Postar</button>
                        </div>                        
                    </div>

                </div>
            </div>
            <div className='feedHistorico'>
                {feedHis.map((txt, i)=>(
                    <FeedHistorico key={i} txt={txt.texto} dia={txt.dia} mes={txt.mes} excluirPost={excluirPost} index={i}/>
                ))}


                
            </div>


        </div>
    );
};

export default Feed;