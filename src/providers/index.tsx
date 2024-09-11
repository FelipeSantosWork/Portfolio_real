import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const defaultFunctions = { backButton: () => { }, aboutMeButton: () => { }, skillsButton: () => { }, expsButton: () => { }, projectsButton: () => { } }
const UserContext = createContext(defaultFunctions);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/")
    }
    const aboutMeButton = () => {
        navigate("/aboutme")
    }
    const skillsButton = () => {
        navigate("/skills")
    }
    const expsButton = () => {
        navigate("/exp")
    }
    const projectsButton = () => {
        navigate("/projects")
    }
    return <UserContext.Provider value={({ backButton, aboutMeButton, skillsButton, expsButton, projectsButton })}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }