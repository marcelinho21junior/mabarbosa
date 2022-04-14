import './App.css'

//site : http://www.mabarboza.com.br/

//components
import {BarraInicial} from './components/barraInicial/barraInicial'
import {Navbar} from './components/navbar/Navbar'
import {BackgroundInicio} from './components/backgroundInicio/backgroundInicio'
import {Sobre} from './components/Sobre/Sobre'
import {Institucional} from './components/Institucional/Institucional'
import {Gallery} from './components/gallery/Gallery'
import {Servicos} from './components/Serviços/Servicos'
import {Contato} from './components/contato/contato'
import {Localizacao} from './components/localizaçao/Localizacao'
import {Footer} from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <BarraInicial/>
      <Navbar/>
      <BackgroundInicio/>
      <Sobre/>
      <Institucional/>
      <Gallery/>
      <Servicos/>
      <Contato/>
      <Localizacao/>
      <Footer/>
    </div>
  )
}

export default App
