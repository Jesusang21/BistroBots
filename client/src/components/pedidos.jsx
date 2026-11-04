import React, { useState } from 'react';

const initialOrders = [
    { id: 1, table: 'Mesa 4', items: ['2x Pulpo a la Gallega', '1x Albariño'], status: 'pendiente', time: 'Hace 5 min' },
    { id: 2, table: 'Mesa 2', items: ['1x Chuletón de Ternera', '2x Coca-Cola'], status: 'pendiente', time: 'Hace 8 min' },
    { id: 3, table: 'Mesa 7', items: ['3x Ensaladilla Rusa', '1x Jarra de Sangría'], status: 'cocina', time: 'Hace 12 min' },
    { id: 4, table: 'Mesa 1', items: ['2x Tarta de Queso'], status: 'listo', time: 'Hace 15 min' },
];

const COLUMNS = [
    { key: 'pendiente', title: '📥 Pendientes', bg: '#fff3cd', color: '#856404', next: 'cocina', prev: null },
    { key: 'cocina', title: '🍳 En Cocina', bg: '#cce5ff', color: '#004085', next: 'listo', prev: 'pendiente' },
    { key: 'listo', title: '🛎️ Listos para Servir', bg: '#d4edda', color: '#155724', next: 'entregado', prev: 'cocina' },
    { key: 'entregado', title: '✅ Entregados', bg: '#e2e3e5', color: '#383d41', next: null, prev: 'listo' },
];

export default function Pedidos() {
    const [orders, setOrders] = useState(initialOrders);
    const [draggingId, setDraggingId] = useState(null);

    // Funciones de Drag and Drop
    const handleDragStart = (e, id) => {
        setDraggingId(id);
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, newStatus) => {
        e.preventDefault();
        if (draggingId === null) return;
        updateOrderStatus(draggingId, newStatus);
        setDraggingId(null);
    };

    // Función genérica para cambiar el estado de un pedido (por botón o drop)
    const updateOrderStatus = (id, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '18px' }}>GESTIÓN DE PEDIDOS EN VIVO (KITCHEN DISPLAY)</h3>
                <p style={{ margin: 0, color: '#64748b', fontSize: '13px' }}>Arrastra las tarjetas o usa los botones de acción rápida para cambiar el estado del pedido.</p>
            </div>

            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '20px', flex: 1 }}>
                {COLUMNS.map(col => {
                    const columnOrders = orders.filter(o => o.status === col.key);

                    return (
                        <div
                            key={col.key}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, col.key)}
                            style={{
                                backgroundColor: '#f1f5f9',
                                borderRadius: '12px',
                                width: '290px',
                                minWidth: '290px',
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: 'calc(100vh - 200px)',
                                border: '1px solid #e2e8f0'
                            }}
                        >
                            {/* Cabecera de la Columna */}
                            <div style={{
                                padding: '12px 16px',
                                backgroundColor: col.bg,
                                color: col.color,
                                fontWeight: 'bold',
                                borderTopLeftRadius: '12px',
                                borderTopRightRadius: '12px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '13px'
                            }}>
                                <span>{col.title}</span>
                                <span style={{ background: 'rgba(0,0,0,0.1)', padding: '2px 8px', borderRadius: '10px', fontSize: '12px' }}>
                                    {columnOrders.length}
                                </span>
                            </div>

                            {/* Lista de Tarjetas */}
                            <div style={{ padding: '12px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {columnOrders.length === 0 ? (
                                    <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '12px', padding: '20px 0' }}>
                                        No hay pedidos
                                    </div>
                                ) : (
                                    columnOrders.map(order => (
                                        <div
                                            key={order.id}
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, order.id)}
                                            style={{
                                                backgroundColor: '#ffffff',
                                                padding: '14px',
                                                borderRadius: '8px',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                                cursor: 'grab',
                                                border: '1px solid #e2e8f0',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <strong style={{ fontSize: '14px', color: '#0f172a' }}>{order.table}</strong>
                                                <span style={{ fontSize: '11px', color: '#64748b' }}>{order.time}</span>
                                            </div>

                                            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#334155' }}>
                                                {order.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>

                                            {/* Botones de acción rápida */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                                                {col.prev ? (
                                                    <button
                                                        onClick={() => updateOrderStatus(order.id, col.prev)}
                                                        style={{
                                                            background: '#f1f5f9',
                                                            border: '1px solid #cbd5e1',
                                                            borderRadius: '4px',
                                                            padding: '4px 8px',
                                                            fontSize: '11px',
                                                            cursor: 'pointer',
                                                            fontWeight: '600',
                                                            color: '#475569'
                                                        }}
                                                        title="Retroceder estado"
                                                    >
                                                        ◀ Anterior
                                                    </button>
                                                ) : <span />}

                                                {col.next && (
                                                    <button
                                                        onClick={() => updateOrderStatus(order.id, col.next)}
                                                        style={{
                                                            background: 'var(--sidebar-bg)',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            padding: '4px 10px',
                                                            fontSize: '11px',
                                                            cursor: 'pointer',
                                                            fontWeight: '600',
                                                            color: '#fff'
                                                        }}
                                                        title="Avanzar estado"
                                                    >
                                                        Avanzar ▶
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}