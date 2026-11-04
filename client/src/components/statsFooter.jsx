import React from 'react';

export default function StatsFooter({ activeCount, lowStockCount }) {
    return (
        <div style={{ marginTop: '24px', backgroundColor: '#e9ecef', padding: '12px 16px', borderRadius: '6px', fontSize: '13px' }}>
            <div style={{ display: 'flex', gap: '24px', fontWeight: 'bold' }}>
                <span>PLATOS ACTIVOS: <span style={{ color: 'var(--primary-teal)' }}>{activeCount}</span></span>
                <span>ALERTA BAJO STOCK: <span style={{ color: '#dc3545' }}>{lowStockCount}</span></span>
                <span>IA RECOMENDACIONES: <span style={{ color: '#6c757d' }}>DESACTIVADA (PLAN BÁSICO)</span></span>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#666', italic: 'true' }}>
                * Plan Básico: Gestión de menú y stock manual. IA activada en Plan Enterprise.
            </p>
        </div>
    );
}