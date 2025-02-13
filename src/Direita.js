import './direita.css';
import Bk from './img/bk.png';
import nj from './img/nj.png';
import Netflix from './img/netflix.png';



function DivDireita(){
    return(
        <div className='Divgeral'>
            <div className='procurar' >
                <input type='text' placeholder='Procurar'/>
            </div>
            <div className="DivDireita">
            <div className="tendenciaContainer">
                <h3>O que está acontecendo?</h3>
                <div className="tendenciaItem">
                <div className="tendenciaInfo">
                    <h4>LGBTQ</h4>
                    <p>58 mil postagens</p>
                </div>
                <div className="tendenciaPostagens">Mt.</div>
                </div>
                <div className="tendenciaItem">
                <div className="tendenciaInfo">
                    <h4>Entretenimento</h4>
                    <p>6.500 postagens</p>
                </div>
                <div className="tendenciaPostagens">Mt.</div>
                </div>
                <div className="tendenciaItem">
                <div className="tendenciaInfo">
                    <h4>Política</h4>
                    <p>27M postagens</p>
                </div>
                <div className="tendenciaPostagens">Mt.</div>
                </div>
                <div className="mostrarMais">Mostrar mais</div>
            </div>

  <div className="quemSeguirContainer">
    <h3>Quem seguir</h3>
    <div className="quemSeguirItem">
      <img src={Bk} alt="Avatar" />
      <div className="quemSeguirInfo">
        <h4>Bk</h4>
        <p>@hkfllana</p>
      </div>
      <button>Seguir</button>
    </div>
    <div className="quemSeguirItem">
      <img src={Netflix} alt="Avatar" />
      <div className="quemSeguirInfo">
        <h4>netflixbrasil</h4>
        <p>@NetflixBrasil</p>
      </div>
      <button>Seguir</button>
    </div>
    <div className="quemSeguirItem">
      <img src={nj} alt='avatar'/>
      <div className="quemSeguirInfo">
        <h4>Neymar Jr</h4>
        <p>@neymarjr</p>
      </div>
      <button>Seguir</button>
    </div>

    



    <div className="mostrarMais">Mostrar mais</div>
  </div>
</div>
            <div className='diretrizes'>
                <p>
                Termos de serviço
                política de Privacidade
                Política de Cookies
                Acessibilidade
                Informações de anúncios
                Mais
                <span>© 2025 X Corp.</span>
                </p>
            </div>

        </div>
    );
}

export default DivDireita;