import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../providers";
import { useContext, useEffect, useState } from "react";
import { ExpCardModal } from "../../components";

export const LastExpPage = () => {
    const { backButton } = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key == "Escape") {
                closeModal();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <main>
            <div className={isOpen ? "overlay" : ""}></div>
            <dialog open={isOpen} className="expModal__container" >
                <ExpCardModal closeModal={closeModal} />
            </dialog>
            <div className="container lastExpPage">
                <div className="lastExpPage__title">
                    <h2 className="title2">Últimas experiências</h2>
                </div>
                <div className="lastExpPage__expSection">
                    <div className="title4 exps">Imperador d'Petrópolis prod. alim. <button onClick={openModal} className="more__btn">Saiba mais</button></div>
                    <div className="title4 exps">Rustiki eng. | Epel materiais <button className="more__btn">Saiba mais</button></div>
                    <div className="title4 exps">Hyundai concessionária <button className="more__btn">Saiba mais</button></div>
                </div>
                <div className="backBtn__div"><button onClick={backButton} className="btn back"><FontAwesomeIcon icon={faAnglesLeft} />Voltar</button></div>
            </div>
        </main>
    )
}