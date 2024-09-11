import { Route, Routes } from "react-router-dom";
import { MainPage, AboutMePage, SkillsPage, LastExpPage, ProjectsPage } from "../../pages";

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutme" element={<AboutMePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/exp" element={<LastExpPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    )
}
