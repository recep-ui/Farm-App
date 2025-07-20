
import React, { useState } from "react";

function UserManagement({ users, onApprove, onDelete, onChangeAdminPassword }) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!oldPass || !newPass || !confirm) {
      setMsg("Tüm alanları doldurun.");
      return;
    }
    if (newPass !== confirm) {
      setMsg("Yeni şifreler eşleşmiyor!");
      return;
    }
    const result = onChangeAdminPassword(oldPass, newPass);
    if (result.success) {
      setMsg("Şifre başarıyla değiştirildi.");
      setOldPass(""); setNewPass(""); setConfirm("");
    } else {
      setMsg(result.message);
    }
  };

  return (
    <div style={{maxWidth:500,margin:"0 auto",padding:24}}>
      <h2>Kullanıcı Yönetimi</h2>
      <form onSubmit={handleChangePassword} style={{marginBottom:32,background:'#f9fafb',padding:16,borderRadius:10,border:'1px solid #e5e7eb'}}>
        <h4>Admin Şifresini Değiştir</h4>
        <input
          type="password"
          placeholder="Mevcut Şifre"
          value={oldPass}
          onChange={e=>setOldPass(e.target.value)}
          style={{marginRight:8,marginBottom:8,padding:6,borderRadius:6,border:'1px solid #d1d5db'}}
        />
        <input
          type="password"
          placeholder="Yeni Şifre"
          value={newPass}
          onChange={e=>setNewPass(e.target.value)}
          style={{marginRight:8,marginBottom:8,padding:6,borderRadius:6,border:'1px solid #d1d5db'}}
        />
        <input
          type="password"
          placeholder="Yeni Şifre Tekrar"
          value={confirm}
          onChange={e=>setConfirm(e.target.value)}
          style={{marginRight:8,marginBottom:8,padding:6,borderRadius:6,border:'1px solid #d1d5db'}}
        />
        <button type="submit" style={{background:'#2563eb',color:'#fff',border:'none',borderRadius:6,padding:'6px 18px',fontWeight:600,cursor:'pointer'}}>Şifreyi Değiştir</button>
        {msg && <div style={{marginTop:8,color:msg.includes('başarı')?'#388e3c':'#e53935'}}>{msg}</div>}
      </form>
      <table style={{width:"100%",borderCollapse:"collapse",marginTop:16}}>
        <thead>
          <tr style={{background:"#f3f4f6"}}>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>Ad</th>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>Soyad</th>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>Unvan</th>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>Kullanıcı Adı</th>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>Durum</th>
            <th style={{padding:8,border:"1px solid #e5e7eb"}}>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.username}>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>{u.firstName}</td>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>{u.lastName}</td>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>{u.title}</td>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>{u.username}</td>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>
                {u.approved ? "Onaylı" : "Bekliyor"}
              </td>
              <td style={{padding:8,border:"1px solid #e5e7eb"}}>
                {!u.approved && (
                  <button style={{marginRight:8,background:'#388e3c',color:'#fff',border:'none',borderRadius:6,padding:'4px 12px',cursor:'pointer'}} onClick={() => onApprove(u.username)}>Onayla</button>
                )}
                {u.username !== "admin" && (
                  <button style={{background:'#e53935',color:'#fff',border:'none',borderRadius:6,padding:'4px 12px',cursor:'pointer'}} onClick={() => onDelete(u.username)}>Sil</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
