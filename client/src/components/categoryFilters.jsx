import React from 'react';
import { categories } from '../mockData';

export default function CategoryFilters({ selectedCategory, onSelectCategory }) {
    return (
        <div style={{ marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#666', fontSize: '12px', textTransform: 'uppercase' }}>Categorías</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelectCategory(cat)}
                        style={{
                            padding: '6px 16px',
                            borderRadius: '20px',
                            border: '1px solid #ccc',
                            backgroundColor: selectedCategory === cat ? 'var(--sidebar-bg)' : '#fff',
                            color: selectedCategory === cat ? '#fff' : '#333',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '12px'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}