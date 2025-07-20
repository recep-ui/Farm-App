
const icons = {
  Animals: '🐄',
  Barns: '🏠',
  Employees: '👷',
  'Health Records': '🩺',
  'Feeding Records': '🌾',
  Production: '🥛',
  Tasks: '✅',
};

function DashboardCard({ title, onClick }) {
  return (
    <div
      className="card dashboard-card"
      style={{
        minWidth: 200,
        padding: 28,
        background: 'linear-gradient(135deg, #eaf4e6 0%, #b5c99a 100%)',
        borderRadius: 20,
        boxShadow: '0 4px 16px rgba(51,103,59,0.13)',
        textAlign: 'center',
        position: 'relative',
        transition: 'box-shadow 0.2s, transform 0.2s',
        cursor: 'pointer',
        marginBottom: 8,
      }}
      onClick={onClick}
    >
      <div style={{ fontSize: 38, marginBottom: 10 }}>{icons[title] || '📦'}</div>
      <h2 style={{ marginBottom: 10, fontSize: '1.2rem', color: '#33673b', fontWeight: 700 }}>{title}</h2>
      <button
        style={{
          background: 'linear-gradient(90deg, #388e3c 0%, #b5c99a 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '8px 18px',
          fontWeight: 600,
          fontSize: '1rem',
          marginTop: 8,
          boxShadow: '0 2px 8px rgba(51,103,59,0.08)',
          transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
        }}
        onClick={e => { e.stopPropagation(); onClick(); }}
      >
        Git
      </button>
    </div>
  );
}

export default DashboardCard;
