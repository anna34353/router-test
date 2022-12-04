import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>첫화면</h1>
      <p>Hello :)</p>
      <Link to="/hi">
        <button>버튼눌러주세요</button>
      </Link>
    </div>
  );
}
