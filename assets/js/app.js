
window.onload = function() {
    pesquisar();
  };
  
  function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
  

    for (let i of dados) {
      let classeValor = i.tipo === "gasto" ? "custom-h2down" : "custom-h2up";
      
      
      resultados += `
        <tr>
          <td>
            <div class="fw-bold ${classeValor}">R$ ${i.valor.toFixed(2)}</div> 
          </td>
          <td style="text-align: center; vertical-align: middle;">
            <div class="align-items-center" style="color: #022859;">
              ${i.descricao}
            </div>
          </td>
          <td style="text-align: center; vertical-align: middle;">
            <div class="align-items-center" style="color: #A1A1A1;">
              ${i.data}
            </div>
          </td> 
          <td style="text-align: center; vertical-align: middle;">
          <a href="#" class="icon-link">
            <i class="fa-solid fa-trash iconCard" style="color: #DF2935"></i>
          </a>
          </td>
          <td style="text-align: center; vertical-align: middle;">
          <a href="#" class="icon-link">
            <i class="fa-solid fa-circle-info iconCard me-5" style="color: #033E8C"></i>
            </a>
          </td>
        </tr>
      `;
    }
    

    section.innerHTML = resultados;
  }
  