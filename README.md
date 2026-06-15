# 🌍 Urban vs. Rural Climate Analysis

Este projeto consiste em uma ferramenta de análise de dados climáticos que compara o microclima de zonas urbanas e rurais. O objetivo é identificar, mapear e quantificar o fenômeno das **Ilhas de Calor Urbanas (ICU)** e outras discrepâncias meteorológicas entre as duas regiões.

---

## 🚀 Funcionalidades

* **Coleta Automática:** Integração com APIs meteorológicas (OpenWeatherMap/Weatherstack) para buscar dados em tempo real.
* **Análise Comparativa:** Gráficos interativos comparando temperatura, umidade, índice UV e qualidade do ar.
* **Histórico de Dados:** Armazenamento de dados locais para análise de tendências ao longo das estações do ano.
* **Visualização em Mapa:** Plotagem de mapas térmicos para identificar os pontos mais quentes da cidade em relação ao campo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* **Linguagem:** Python 3.10+
* **Análise de Dados:** Pandas, NumPy
* **Visualização:** Matplotlib, Seaborn, Folium (para mapas interativos)
* **Consumo de API:** Requests
* **Interface (Opcional):** Streamlit / Jupyter Notebook

---

## 📊 Como o Projeto Funciona

O script principal coleta dados de coordenadas geográficas específicas (uma estação urbana e uma estação rural próxima). A partir disso, calcula a diferença térmica média utilizando a fórmula básica da intensidade da Ilha de Calor:

$$\Delta T = T_{\text{urbana}} - T_{\text{rural}}$$

Se $\Delta T > 0$, o gráfico destaca a intensidade do aquecimento urbano no período analisado.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter o Python instalado e uma chave de API do serviço de clima escolhido.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/urban-rural-climate.git](https://github.com/seu-usuario/urban-rural-climate.git)
