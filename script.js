/* Estilo do Botão de Interatividade */
.btn-clima {
    background: linear-gradient(135deg, var(--primary) 0%, #0284c7 100%);
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-clima:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(14, 165, 233, 0.6);
}

.btn-clima:active {
    transform: translateY(0);
}

/* Painel de Resultados do Clima */
.clima-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 30px;
    animation: fadeIn 0.5s ease-in-out;
}

.clima-card {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.clima-card h4 {
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.clima-card p {
    margin: 5px 0;
    font-size: 1.2rem;
    color: #ffffff;
}

.resultado-icu {
    border-left: 4px solid var(--accent-heat);
    background: linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(0,0,0,0) 100%);
}

.delta-t {
    font-weight: bold;
    color: var(--accent-heat) !important;
    font-size: 1.5rem !important;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
