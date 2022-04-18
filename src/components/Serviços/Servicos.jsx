//css
import './Servicos.css'

//img
import img5 from '../../img/img5.jpg'

export function Servicos() {

  return (
    <div class="Servicos">
      <h1>Serviços</h1>    
      <h3>Conheça nossas principais atividades!</h3>
      <div class="ServicosInfo">
        <span>A principal atividade da MA Barboza é a compra e venda de recicláveis. Compramos materiais de empresas, sucateiros e catadores. Após a compra o material é separado por tipo e enviado para correta destinação, que é basicamente volta para a indústria em forma de matéria prima para que se transforme em outros materiais.</span>
      </div>
      <h3>Itens que comercializamos:</h3>
      <div class="ServicosAllCards">
        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>

        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>

        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>

        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>

        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>

        <div class="ServicosCards">
          <img src={img5} alt="" />
          <span>Latinha</span>
        </div>
      </div>
      <span className='ServicosInfo'>Compramos materiais recicláveis não especificados anteriormente. Para mais informações sobre compra e venda de sucata e materiais recicláveis Clique aqui!</span>
    </div>
  )
}

