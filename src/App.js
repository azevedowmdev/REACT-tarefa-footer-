import './App.css';
import logoCorebiz from "./corebiz.png";
import logoVtex from "./vtex.png";


function App() {
    return (
      <footer>
        <section class="address">
          <h3>Localização</h3>
          <p>Avenida Andrômeda, 200. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
          <a href="tel:+551130901039">+55 11 3090 1039</a>
        </section>
        <section class="contact">
          <ul>
            <li>
              <a href="/fale-conosco">Entre em contato</a>
            </li>
            <li>
              <a href="/chat">Fale com o nosso consultor online</a>
            </li>
          </ul>
        </section>
        <section class="created">
          <div>
            <p>Created by</p>
            <img src={logoCorebiz} alt="Corebiz logo" />
          </div>
          <div>
            <p>Powered by</p>
            <img src={logoVtex} alt="VTEX logo" />
          </div>
        </section>
      </footer>

  
  
  );
}

export default App;

