import React from 'react';

export default function ProductTable({ products, onDeleteProduct, onOpenModal }) {
    return (
        <div className="table-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0, fontSize: '15px', letterSpacing: '0.5px', color: '#334155', fontWeight: '700' }}>
                    LISTA DE PLATOS Y PRODUCTOS
                </h3>
                <button
                    onClick={onOpenModal}
                    style={{
                        backgroundColor: 'var(--sidebar-bg)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 18px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '12px',
                        letterSpacing: '0.5px'
                    }}
                >
                    + AÑADIR NUEVO PLATO
                </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b', fontSize: '11px', letterSpacing: '0.5px' }}>
                        <th style={{ padding: '12px 8px' }}>IMAGEN</th>
                        <th style={{ padding: '12px 8px' }}>NOMBRE DEL PLATO</th>
                        <th style={{ padding: '12px 8px' }}>CATEGORÍA</th>
                        <th style={{ padding: '12px 8px' }}>PRECIO (€)</th>
                        <th style={{ padding: '12px 8px' }}>STOCK</th>
                        <th style={{ padding: '12px 8px' }}>ESTADO</th>
                        <th style={{ padding: '12px 8px' }}>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '10px 8px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '42px', height: '42px', borderRadius: '8px', objectFit: 'cover' }} />
                            </td>
                            <td style={{ padding: '10px 8px', fontWeight: '600', color: '#1e293b' }}>{item.name}</td>
                            <td style={{ padding: '10px 8px', color: '#64748b' }}>{item.category}</td>
                            <td style={{ padding: '10px 8px', fontWeight: '600' }}>{item.price.toFixed(2)}</td>
                            <td style={{ padding: '10px 8px', color: '#475569' }}>{item.stock}</td>
                            <td style={{ padding: '10px 8px' }}>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '20px',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    backgroundColor: item.status === 'ACTIVO' ? 'var(--badge-active-bg)' : 'var(--badge-warn-bg)',
                                    color: item.status === 'ACTIVO' ? 'var(--badge-active-color)' : 'var(--badge-warn-color)'
                                }}>
                                    {item.status}
                                </span>
                            </td>
                            <td style={{ padding: '10px 8px' }}>
                                <button
                                    onClick={() => onDeleteProduct(item.id)}
                                    style={{ border: 'none', background: 'none', cursor: 'pointer', opacity: 0.7 }}
                                    title="Eliminar plato"
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}