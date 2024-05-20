import './sidebar.css'

function SideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">ECOGEST</span>
        <small className="text-truncate">Inovando o presente, preservando o futuro</small>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page">
            <i className="bi bi-house"></i> Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <i className="bi bi-people-fill"></i> Gerenciar Beneficiários
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <i className="bi bi-person-badge"></i> Gerenciar Colabordadores da Secretaria
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            Gerencia Tipos de Serviços
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            Gerenciar Registro de Informações
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            Gerencia Tipos de Atividades Sustentáveis
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;