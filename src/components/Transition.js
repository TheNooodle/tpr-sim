import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSaveStateStore from "../store/save-state"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

function Transition(props) {
    const neighbour = props.neighbour
    const setCurrentRoom = useSaveStateStore((state) => state.setCurrentRoom)
    const handleClick = () => {
        setCurrentRoom(neighbour)
    }

    return (
        <li>
            <button
                className="bg-gray-200 hover:bg-gray-300 mb-2 p-2 min-h-[44px] w-full text-black border border-black flex flex-row justify-center items-center"
                key={neighbour}
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faAnglesRight} />
                <span className="ml-2 pb-1">Go to {neighbour}</span>
            </button>
        </li>
    )
}

export default Transition
