import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faT } from "@fortawesome/free-solid-svg-icons/faT";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faVial } from "@fortawesome/free-solid-svg-icons/faVial";
import { faVials } from "@fortawesome/free-solid-svg-icons/faVials";
import { UserContext } from "../../providers"
import { useContext } from "react"

export const SkillsPage = () => {
    const { backButton } = useContext(UserContext)

    return (
        <main>
            <div className="container skillsPage">
                <div className="skillsPage__title">
                    <h2 className="title2">Competências</h2>
                </div>
                <div className="skillsPage__skillsSection">

                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faHtml5} />
                        <h3 className="skill__name">HTML</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faCss3Alt} />
                        <h3 className="skill__name">CSS</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faJs} />
                        <h3 className="skill__name">JavaScript</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faReact} />
                        <h3 className="skill__name">React</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faT} />
                        <h3 className="skill__name">Typescript</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faNodeJs} />
                        <h3 className="skill__name">Node.js</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faNodeJs} />
                        <h3 className="skill__name">Express</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faDatabase} />
                        <h3 className="skill__name">PostgreSQL</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faSass} />
                        <h3 className="skill__name">SASS</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faDatabase} />
                        <h3 className="skill__name">PrismaORM</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faDatabase} />
                        <h3 className="skill__name">Banco de dados</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faPython} />
                        <h3 className="skill__name">Python</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faGear} />
                        <h3 className="skill__name">POO</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faVial} />
                        <h3 className="skill__name">Testes unitários</h3>
                    </div>
                    <div className="skill__div">
                        <FontAwesomeIcon className="skill__icon" icon={faVials} />
                        <h3 className="skill__name">Testes de integração</h3>
                    </div>
                </div>
                <div className="backBtn__div"><button onClick={backButton} className="btn back"><FontAwesomeIcon icon={faAnglesLeft} />Voltar</button></div>

            </div>
        </main>
    )
}