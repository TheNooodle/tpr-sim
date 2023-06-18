import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSaveStateStore from "../store/save-state.js"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Warp(props) {
    const warpName = props.warpName
    const setCurrentRoom = useSaveStateStore((state) => state.setCurrentRoom)
    const handleClick = () => {
        setCurrentRoom(warpName)
    }

    return (
        <li>
            <button
                className="bg-gray-200 hover:bg-gray-300 mb-2 p-2 min-h-[44px] w-full text-black border border-black flex flex-row justify-center items-center"
                key={warpName}
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ml-2 pb-1">Warp to {warpName}</span>
            </button>
        </li>
    )
}

export default Warp
