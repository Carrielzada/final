const Maquinario = ({ maquinario, removerMaquinario, atualizarMaquinario,  }) = > {
    return ( 
            <div className="maquinario" >
            <p>
            {maquinario.id}
            {maquinario.nome}
            {maquinario.placa}
            {maquinario.ano}
            </p>
            </div>
     );
};
export default ;