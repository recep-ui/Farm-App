import React, { useState } from 'react';
import './Login.css';


function Register({ onRegister, onGoToLogin }) {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !firstName || !lastName || !email || !title || !password) {
      setError('Tüm alanları doldurun.');
      return;
    }
    if (password !== confirm) {
      setError('Şifreler eşleşmiyor!');
      return;
    }
    onRegister(username, firstName, lastName, email, title, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Kayıt Ol</h2>
        <input
          type="text"
          placeholder="Ad"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Soyad"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <select
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{marginBottom:8, padding:8, width:'100%'}}
        >
          <option value="">Unvan Seçiniz</option>
          <option value="Veteriner">Veteriner</option>
          <option value="Muhasebeci">Muhasebeci</option>
          <option value="Depo Sorumlusu">Depo Sorumlusu</option>
          <option value="Tekniker">Tekniker</option>
          <option value="Müdür">Müdür</option>
        </select>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre Tekrar"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Kayıt Ol</button>
        {error && <div className="login-error">{error}</div>}
        <div style={{textAlign:'center',marginTop:8}}>
          <span>Hesabın var mı? </span>
          <button type="button" style={{background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={onGoToLogin}>Giriş Yap</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
