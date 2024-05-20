import './formcolab.css'

function FormColab(){
    return ( 
        <form>
            <h3>Gerenciar Registro de Informações</h3>
        <div class="card borda">
            <h5 class="card-header">Dados do Serviço</h5>
        <div class="card-body">
        <div className='row'>
        <div className='col-6'>
            <label>Colaborador Responsável</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Nome do Colaborador" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button class="input-group-text btn btn-primary" id="basic-addon2"><i class="bi bi-search"></i></button>
            </div>
        </div>
        <div className='col-6'>
            <label>Data de Abertura do Serviço</label>
            <input type='text' disabled value="08/11/2022 : 16:8" className='form-control'/>
        </div>

        </div>
        <div className='row'>
        <div className='col-6'>
            <label>teste</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"/>
            <button class="input-group-text btn btn-primary" id="basic-addon2"><i class="bi bi-search"></i></button>
            <button class="input-group-text btn btn-info" id="basic-addon2"><i class="bi bi-plus"></i></button>
            </div>
        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Anexo
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Anexar foto</button></li>
    <li><button class="dropdown-item" type="button">Anexar documento</button></li>
    <li><button class="dropdown-item" type="button">Anexar outro arquivo</button></li>
  </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </form>
     );
}

export default FormColab;