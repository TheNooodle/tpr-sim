import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSaveStateStore from "../store/save-state.js"
import { faAnglesRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { checkLogic } from "../services/logic.js"

function Transition(props) {
    const neighbour = props.neighbour
    const setCurrentRoom = useSaveStateStore((state) => state.setCurrentRoom)
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const itemsObtained = useSaveStateStore((state) => state.itemsObtained)
    const handleClick = () => {
        setCurrentRoom(neighbour.name)
    }
    const isInLogic = checkLogic(neighbour.requirements, {spoilerLog: spoilerLog, itemsObtained: itemsObtained})

    let icon = <FontAwesomeIcon icon={faAnglesRight} />
    let buttonBg = "bg-gray-200 hover:bg-gray-300 text-black"
    if (!isInLogic) {
        icon = icon = <FontAwesomeIcon icon={faTriangleExclamation} />
        buttonBg = "bg-amber-400 hover:bg-amber-500 text-white"
    }

    return (
        <li>
            <button
                className={buttonBg + " mb-2 p-2 min-h-[44px] w-full border border-black flex flex-row justify-center items-center"}
                key={neighbour.name}
                onClick={handleClick}
            >
                {icon}
                <span className="ml-2 pb-1">Go to {neighbour.name}</span>
            </button>
        </li>
    )
}

export default Transition
