import './header.css'

function Header(){
    return (<header className='p-4 mb-3 border-bottom text-bg-dark'>
        <div className='d-flex flex-wrap justify-content-end'>
        <button type='button' class="btn btn-info"> <i class="bi bi-box-arrow-left"></i> Sair</button>
        </div>

    </header>);

}
export default Header