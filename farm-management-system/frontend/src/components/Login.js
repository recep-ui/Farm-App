import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Login.css';


function Login({ onLogin, onGoToRegister, onPasswordReset }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetStep, setResetStep] = useState(1); // 1: email, 2: kod, 3: yeni şifre
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetMsg, setResetMsg] = useState('');
  const [resetUserIndex, setResetUserIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = onLogin(username, password);
    if (!ok) {
      setError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  // Şifre sıfırlama adım 1: e-posta gir
  const handleResetEmail = async (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetMsg('E-posta girin.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const idx = users.findIndex(u => u.email === resetEmail);
    if (idx === -1) {
      setResetMsg('E-posta ile kullanıcı bulunamadı!');
      return;
    }
    // Gerçek e-posta gönderimi için EmailJS kullan
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    setResetUserIndex(idx);
    setResetStep(2);
    setResetMsg('Doğrulama kodu e-posta adresinize gönderildi.');
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS servis ID
        'YOUR_TEMPLATE_ID', // EmailJS şablon ID
        {
          to_email: resetEmail,
          code: code
        },
        'YOUR_PUBLIC_KEY' // EmailJS public key
      );
    } catch (err) {
      setResetMsg('E-posta gönderilemedi. Lütfen tekrar deneyin.');
    }
  };

  // Şifre sıfırlama adım 2: kodu gir
  const handleResetCode = (e) => {
    e.preventDefault();
    if (enteredCode !== verificationCode) {
      setResetMsg('Doğrulama kodu hatalı!');
      return;
    }
    setResetStep(3);
    setResetMsg('Kod doğru. Şimdi yeni şifrenizi belirleyin.');
  };

  // Şifre sıfırlama adım 3: yeni şifreyi gir
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword) {
      setResetMsg('Yeni şifre girin.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (resetUserIndex === -1) {
      setResetMsg('Kullanıcı bulunamadı!');
      return;
    }
    users[resetUserIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    if (onPasswordReset) onPasswordReset(users);
    setResetMsg('Şifre başarıyla değiştirildi. Giriş yapabilirsiniz.');
    setShowReset(false);
    setResetStep(1);
    setResetEmail('');
    setEnteredCode('');
    setNewPassword('');
  };

  return (
    <div className="login-container">
      {!showReset ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Giriş Yap</h2>
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
          <button type="submit">Giriş</button>
          <button type="button" style={{marginLeft:8,background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={() => setShowReset(true)}>
            Şifremi Unuttum
          </button>
          {error && <div className="login-error">{error}</div>}
          <div style={{textAlign:'center',marginTop:8}}>
            <span>Hesabın yok mu? </span>
            <button type="button" style={{background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={onGoToRegister}>Kayıt Ol</button>
          </div>
        </form>
      ) : (
        <div>
          {resetStep === 1 && (
            <form className="login-form" onSubmit={handleResetEmail}>
              <h2>Şifre Sıfırla</h2>
              <input
                type="email"
                placeholder="Kayıtlı E-posta"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                required
              />
              <button type="submit">Kodu Gönder</button>
              <button type="button" style={{marginLeft:8,background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={() => { setShowReset(false); setResetStep(1); setResetMsg(''); }}>
                Geri Dön
              </button>
              {resetMsg && <div className="login-error">{resetMsg}</div>}
            </form>
          )}
          {resetStep === 2 && (
            <form className="login-form" onSubmit={handleResetCode}>
              <h2>Kod Doğrulama</h2>
              <input
                type="text"
                placeholder="E-posta ile gelen kod"
                value={enteredCode}
                onChange={e => setEnteredCode(e.target.value)}
                required
              />
              <button type="submit">Kodu Doğrula</button>
              <button type="button" style={{marginLeft:8,background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={() => { setShowReset(false); setResetStep(1); setResetMsg(''); }}>
                Geri Dön
              </button>
              {resetMsg && <div className="login-error">{resetMsg}</div>}
            </form>
          )}
          {resetStep === 3 && (
            <form className="login-form" onSubmit={handleResetPassword}>
              <h2>Yeni Şifre Belirle</h2>
              <input
                type="password"
                placeholder="Yeni Şifre"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
              <button type="submit">Şifreyi Sıfırla</button>
              <button type="button" style={{marginLeft:8,background:'none',color:'#2d6cdf',border:'none',cursor:'pointer',textDecoration:'underline'}} onClick={() => { setShowReset(false); setResetStep(1); setResetMsg(''); }}>
                Geri Dön
              </button>
              {resetMsg && <div className="login-error">{resetMsg}</div>}
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
