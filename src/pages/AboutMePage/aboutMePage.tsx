import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../../providers";


export const AboutMePage = () => {
    const { backButton } = useContext(UserContext)

    return (
        <main>
            <div className="container aboutMePage">
                <div className="aboutMePage__title">
                    <h2 className="title2">Sobre mim</h2>
                </div>
                <div className="aboutMePage__description">
                    <h3 className="title3">Me chamo Felipe Santos, tenho 28 anos, sou um profissional focado, com habilidade diferenciada para identificar falhas em processos e propor soluções eficazes. Tenho facilidade em resolver problemas, além de uma visão abrangente em administração e suas subáreas. Meu perfil é voltado para eficiência e resultados, sempre buscando a melhoria contínua e a otimização de recursos. Com uma abordagem metódica e organizada, me dedico a agregar valor à empresa e contribuir para o sucesso de projetos. Gosto de evoluir constantemente e acredito que o ambiente ideal é aquele que não só favorece esse crescimento, mas também evolui junto.</h3>
                </div>
                <div className="backBtn__div"><button onClick={backButton} className="btn back"><FontAwesomeIcon icon={faAnglesLeft} />Voltar</button></div>
            </div>
        </main>
    )
}