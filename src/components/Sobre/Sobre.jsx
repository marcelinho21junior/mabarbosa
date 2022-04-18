//css
import './Sobre.css'

//img
import img3 from '../../img/img3.png'

export function Sobre() {

  return (
    <div class="Sobre">
      <div class="SobreH1H3">
        <h1>Quem Somos</h1>
        <h3>Conheça a MA Barboza, qual é o nosso lema e no que acreditamos!</h3>
      </div>
      <div className='SobreConteudo'>
        <div>
          <span className='SobreConteudoTxt'>A Ma Barboza Reciclagem está no mercado desde 1980. Nossa base atual fica no bairro Barra de Macaé, cidade de Macaé, Rio de Janeiro. A Empresa atua no ramo de gerencimento de reciclagem entre eles sucata ferrosa, plástico, papelão, metal, alumínio e etc, destinando e processando os resíduos de forma adequada para reutilização. Nosso compromisso é oferecer um serviço de qualidade e a destinação correta para o seu resíduo, retornando o mesmo para a indústria em forma de matéria prima para novos produtos, evitando assim a extração dos recursos da natureza e contribuir para uma natureza mais equilibrada e sustentável.</span>
        </div>
        <div>
          <span><img src={img3} alt="img3" title='img3'/></span>
        </div>
      </div>
    <div>
      
      </div>    
    </div>
  )
}

