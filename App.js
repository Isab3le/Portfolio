import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      message: mensagem,
      reply_to: email,
    };

    emailjs
      .send(
        "service_8dvpi1m",
        "template_r5a0jvj",
        templateParams,
        "RT2EalgBI-Y6MV0L1"
      )
      .then(
        (response) => {
          console.log("MENSAGEM ENVIADA!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (Error) => {
          console.log("Erro", Error);
        }
      );
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={nome}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={mensagem}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
