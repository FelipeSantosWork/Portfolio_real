import { UserContext } from "../../providers"
import { useContext } from "react"

export const MainPage = () => {

    const { aboutMeButton, skillsButton, expsButton, projectsButton } = useContext(UserContext)

    return (
        <main>
            <div className="container mainPage">
                <div className="mainPage__btn"><button className="btn title5">Contato</button></div>
                <div className="mainPage__titleNavigate">
                    <div className="mainPage__titleDescriptionDiv">
                        <div className="mainPage__title">
                            <h1 className="title1">Felipe Santos</h1>
                        </div>
                        <div className="mainPage__description">
                            <h3 className="title3">Este portfólio é meu projeto principal, feito completamente do zero, espero que goste!</h3>
                        </div>
                    </div>
                    <div className="mainPage__navigateSection" >
                        <button onClick={aboutMeButton} className="btn title4">Sobre mim</button>
                        <button onClick={skillsButton} className="btn title4">Competências</button>
                        <button onClick={expsButton} className="btn title4">Experiências</button>
                        <button onClick={projectsButton} className="btn title4">Projetos</button>
                    </div>
                </div>
            </div>
        </main>
    )
}