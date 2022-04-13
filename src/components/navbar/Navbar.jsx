//css
import './Navbar.css'


export function Navbar() {

  return (

    //video para navbar simples
    //https://www.youtube.com/watch?v=Y6DwspK_wnM
    <nav class="navbar">
      <div class="nav-wrapper">
        
        <ul id="nav-mobile" class="hide-on-med-and-down">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Quem somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
  </nav>
  )
}

