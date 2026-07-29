import { useState } from "react";
import { toast } from "react-toastify";
import { lugares, type Lugar } from "../data/lugares";
import { Relogio } from "../components/Relogio";

export function Home() {
  const [lugarSorteado, setLugarSorteado] = useState<Lugar | null>(null);
  const [estaSorteando, setEstaSorteando] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  // Função para sortear com o efeito de roleta
  const sortearDomingo = () => {
    setEstaSorteando(true);

    let contador = 0;

    const intervalo = setInterval(() => {
      const indiceAleatorio = Math.floor(Math.random() * lugares.length);
      const lugar = lugares[indiceAleatorio];

      setLugarSorteado(lugar);
      contador++;

      if (contador > 6) {
        clearInterval(intervalo);
        setEstaSorteando(false);

        toast.success(`🎉 Ótima opção: ${lugar.nome}!`, {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    }, 80);
  };

  return (
    <main className="home">
      <header className="header-home">
        {/* Relógio inserido aqui */}
        <Relogio />
        <h1>O que fazer domingo em Tubarão/SC! ☀️</h1>
        <p>Está indeciso? Deixe que a gente escolhe por você!</p>
      </header>

      {/* Botão Único de Sorteio */}
      <button
        className="botao-comecar"
        onClick={sortearDomingo}
        disabled={estaSorteando}
      >
        {lugarSorteado
          ? "SORTEAR OUTRA IDEIA 🎲"
          : "SORTEAR IDEIA DE DOMINGO 🎲"}
      </button>

      {/* Resultado do Sorteio */}
      {lugarSorteado && (
        <div
          className={`sugestao-card ${
            estaSorteando ? "girando" : "revelado"
          }`}
        >
          <span
            className={`badge badge-${lugarSorteado.categoria
              .toLowerCase()
              .replace(/\s+/g, "")}`}
          >
            {lugarSorteado.categoria}
          </span>

          <h2>{lugarSorteado.nome}</h2>

          <p>{lugarSorteado.descricao}</p>

          <div className="card-footer">
            <span className="preco">
              {lugarSorteado.gratuito ? "🆓 Gratuito" : "💰 Pago"}
            </span>
          </div>
        </div>
      )}

      <button
        className="botao-feedback"
        onClick={() => setModalAberto(true)}
      >
        💬 Enviar sugestão
      </button>

      {modalAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <button
              className="fechar-modal"
              onClick={() => setModalAberto(false)}
            >
              ❌
            </button>

            <h2>Enviar sugestão de melhorias</h2>
            <br />

            {/* Formulário do Google via iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd-0QgYs3mZRYH6XPFJPkaHLqUUniW6uyC7TLXNuhMs8qimPQ/viewform?embedded=true"
              width="100%"
              height="500"
              style={{ border: 0 }}
            >
              Carregando…
            </iframe>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;