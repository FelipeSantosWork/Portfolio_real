import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../../providers";


export const ProjectsPage = () => {
    const { backButton } = useContext(UserContext)

    return (
        <main>
            <div className="container projectsPage">
                <div className="projectsPage__title">
                    <h2 className="title2">Projetos</h2>
                </div>
                <div className="projectsPage__projectsSection">
                    <div className="title4 projects">Projetos feitos no curso <button className="more__btn">Saiba mais</button></div>
                    <div className="title4 projects">Particulares e outros <button className="more__btn">Saiba mais</button></div>
                </div>
                <div className="backBtn__div"><button onClick={backButton} className="btn back"><FontAwesomeIcon icon={faAnglesLeft} />Voltar</button></div>
            </div>
        </main>
    )
}