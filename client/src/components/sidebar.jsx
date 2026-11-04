import React from 'react';

const menuItems = [
    { id: 'pedidos', label: '🛎️ Pedidos' },
    { id: 'menu', label: '📋 Gestión de Menú' },
    { id: 'inventory', label: '📦 Inventario' },
    { id: 'qr', label: '📱 Gestión de QR' },
    { id: 'analytics', label: '📈 Analítica' },
    { id: 'settings', label: '⚙️ Configuración' },
];

export default function Sidebar({ currentSection, onSelectSection }) {
    return (
        <aside style={{
            width: '240px',
            backgroundColor: 'var(--sidebar-bg)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0',
            flexShrink: 0
        }}>
            <div style={{ padding: '0 20px 30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>🍽️</span>
                <strong style={{ fontSize: '18px' }}>BistroBot Admin</strong>
            </div>

            <nav style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {menuItems.map((item) => {
                        const isActive = currentSection === item.id;
                        return (
                            <li
                                key={item.id}
                                onClick={() => onSelectSection(item.id)}
                                style={{
                                    padding: '12px 20px',
                                    cursor: 'pointer',
                                    backgroundColor: isActive ? 'var(--sidebar-hover)' : 'transparent',
                                    borderLeft: isActive ? '4px solid var(--primary-teal)' : '4px solid transparent',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    opacity: isActive ? 1 : 0.7,
                                    transition: 'background 0.2s'
                                }}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}