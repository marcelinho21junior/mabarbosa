//css
import  "./barraInicial.css"


export function BarraInicial() {

  return (
      <div class="barra__inicial">
            <div class="barra__inicial--text">
              <p><i class="fas fa-map-marker-alt fa-lg "></i>
                Avenida Luis Lírio, 1335 Barra de Macaé-RJ</p>
              <p><i class="fab fa-whatsapp fa-lg "></i>
                (22) 99732-9280</p>
              <p><a
                  href="https://api.whatsapp.com/send?phone=55999999999&text=Olá,%20gostaria%20de%20informações%20sobre%20venda%20de%20sucata."
                  class="waves-effect waves-light btn">Entre em contato pelo WhatsApp</a></p>
            </div>
      </div>   
  )
}

