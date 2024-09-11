

export const ExpCardModal = ({ closeModal }) => {


    return (
        <>

            <div>
                <h2 className="title2 modalTitle">Imperador d'Petrópolis prod. alim.</h2>
                <button onClick={closeModal} className="closeModal" aria-label="close" title="Fechar">
                    X
                </button>
            </div>
            <div className="expDescription">
                <h3 className="title3">Administração e gestão da fábrica, adm. estratégica, rh e financeiro(parcial), negociação com fornecedores, cotações e compras, liderar e auxiliar em reuniões, resolução de problemas, implementação de relatórios, atualização de preços de custo e obtenção de dados, implementação de estratégias e atualizações nas rotinas dos cargos, análises, mudanças e melhorias de processos nas áreas: cozinha, expedição, produção, vendas(parcial) e escritório.</h3>
                <h3 className="title3">Duração: 1 ano e 6 meses (+4 meses de consultoria).</h3>
                <h3 className="title3">Motivo de saída: mudança de área de atuação.</h3>
            </div>
        </>
    )
};
