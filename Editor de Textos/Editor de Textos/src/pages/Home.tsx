import { useState } from 'react';
import { lugares, type Lugar } from '../data/lugares';

function Home() {
  const [lugarSorteado, setLugarSorteado] = useState<Lugar | null>(null);
  const [estaSorteando, setEstaSorteando] = useState(false);

  // Função para sortear com o efeito de roleta
  const sortearDomingo = () => {
    setEstaSorteando(true);

    let contador = 0;
    const intervalo = setInterval(() => {
      const indiceAleatorio = Math.floor(Math.random() * lugares.length);
      setLugarSorteado(lugares[indiceAleatorio]);
      contador++;

      if (contador > 6) {
        clearInterval(intervalo);
        setEstaSorteando(false);
      }
    }, 80);
  };

  return (
    <main className="home">
      <header className="header-home">
        <h1>O que fazer em Tubarão no Domingo! ☀️</h1>
        <p>Está indeciso? Deixe que a gente escolhe por você!</p>
      </header>

      {/* Botão Único de Sorteio */}
      <button 
        className="botao-comecar" 
        onClick={sortearDomingo}
        disabled={estaSorteando}
      >
        {lugarSorteado ? 'Sortear outra opção 🎲' : 'Sortear Ideia de Domingo 🎲'}
      </button>

      {/* Resultado do Sorteio */}
      {lugarSorteado && (
        <div className={`sugestao-card ${estaSorteando ? 'girando' : 'revelado'}`}>
          <span className={`badge badge-${lugarSorteado.categoria.toLowerCase().replace(/\s+/g, '')}`}>
            {lugarSorteado.categoria}
          </span>
          <h2>{lugarSorteado.nome}</h2>
          <p>{lugarSorteado.descricao}</p>
          <div className="card-footer">
            <span className="preco">
              {lugarSorteado.gratuito ? '🆓 Gratuito' : '💰 Pago'}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;