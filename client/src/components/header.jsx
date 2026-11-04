import React from 'react';

export default function Header() {
    return (
        <header style={{
            height: '60px',
            backgroundColor: 'var(--sidebar-bg)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            borderBottom: '1px solid #1a3a44'
        }}>
            <h2 style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>
                GASTRONOMIA ADMIN - GESTIÓN DE MENÚ
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', opacity: 0.8 }}>Juan Pérez (Gerente)</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JP</div>
            </div>
        </header>
    );
}