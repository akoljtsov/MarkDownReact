import React from "react";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Вітаємо у додатку Electron!</h1>
      <p>Цей додаток розроблено з використанням технологій Electron і React.</p>
      <section style={{ marginTop: "20px" }}>
        <h2>Основні можливості:</h2>
        <ul>
          <li>Створення міжплатформених додатків.</li>
          <li>Використання сучасних інструментів React для побудови інтерфейсу.</li>
          <li>Просте розширення функціоналу додатка.</li>
        </ul>
      </section>
      <section style={{ marginTop: "20px" }}>
        <h2>Швидкий старт:</h2>
        <ol>
          <li>Редагуй цей файл, щоб додати нові компоненти.</li>
          <li>Використовуй <strong>Live Reload</strong> для автоматичного оновлення змін.</li>
          <li>Зберігай код чистим і організованим для зручної підтримки.</li>
        </ol>
      </section>
      <footer style={{ marginTop: "20px", fontSize: "small", color: "#888" }}>
        <p>Авторські права © 2024. Всі права захищені))).</p>
      </footer>
    </div>
  );
}

