const paises = [
    "China", "Estados Unidos", "Índia", "Rússia", "Indonésia", "Japão", 
    "Brasil", "Alemanha", "República Democrática do Congo", "Canadá"
  ];
  
  function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  function mostrarSugestoes() {
    const input = document.getElementById("campoBusca");
    const filtro = input.value.toLowerCase();
    const sugestoesContainer = document.getElementById("sugestoes");
    sugestoesContainer.innerHTML = "";
  
    if (filtro.length === 0) {
      sugestoesContainer.style.display = "none"; 
      return;
    }
  
    const sugestoesFiltradas = paises.filter(pais => removerAcentos(pais.toLowerCase()).includes(filtro));
    
    if (sugestoesFiltradas.length > 0) {
      sugestoesFiltradas.forEach(pais => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.classList.add("autocomplete-suggestion");
        suggestionDiv.textContent = pais;
        suggestionDiv.onclick = () => {
          input.value = pais;
          sugestoesContainer.innerHTML = "";
          sugestoesContainer.style.display = "none"; 
        };
        sugestoesContainer.appendChild(suggestionDiv);
      });
      sugestoesContainer.style.display = "block"; 
    } else {
      sugestoesContainer.style.display = "none"; 
    }
  }
  
  function buscarPais() {
    const campoBusca = document.getElementById("campoBusca").value.trim();
    
    if (paises.includes(campoBusca)) {
      window.location.href = `tela_gráficos.html?pais=${encodeURIComponent(campoBusca)}`;
      return false;
    } else {
      alert("País não encontrado. Por favor, escolha um dos países da lista.");
      return false;
    }
  }
  
  document.getElementById("campoBusca").addEventListener("input", mostrarSugestoes);
  