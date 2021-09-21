import React from "react";

const AppCardBullets = ({date, bullets}) => {
  <div>
    <hr />
    <h5>{date}</h5>
    <ul>
      {bullets.map bullet => (
        <li>
          <strong>{bulllet.type}</strong> {bullet.title)
        </li>
        )}

      <li><strong>EVENTO</strong>Momento síncrono</li>
      <li><strong>Atividade</strong>01</li>
      <li><strong>Atividade</strong>02</li>
      <li><strong>Atividade</strong>03</li>
      <li><strong>Atividade</strong>04</li>
      <li><strong>NOTAS</strong>Protótipo</li>
    </ul>
    <hr />
  </div>
};

export default AppCardBullets;