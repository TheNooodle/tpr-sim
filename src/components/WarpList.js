import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getAvailableWarps, isAWarpRoom, isActive } from "../services/warps.js"
import useDisplayModeStore from "../store/display-mode.js"
import useSaveStateStore from "../store/save-state.js"
import Warp from "./Warp.js"
import { faToggleOn } from "@fortawesome/free-solid-svg-icons"

function WarpList(props) {
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const visitedProvinces = useSaveStateStore((state) => state.visitedProvinces)
    const activatedWarps = useSaveStateStore((state) => state.activatedWarps)
    const activateWarp = useSaveStateStore((state) => state.activateWarp)
    const displayMode = useDisplayModeStore((state) => state.displayMode)

    const warps = getAvailableWarps(visitedProvinces, spoilerLog, activatedWarps).map((warpName) => 
        <Warp key={warpName} warpName={warpName}/>
    )

    let warpActivationButton = null
    if (isAWarpRoom(currentRoom.name) && !isActive(currentRoom.name, spoilerLog, activatedWarps)) {
        warpActivationButton = (
            <button
                className="bg-lime-500 hover:bg-lime-600 mb-2 p-2 min-h-[44px] w-full text-white border border-black flex flex-row justify-center items-center"
                onClick={() => activateWarp(currentRoom.name)}
            >
                <FontAwesomeIcon icon={faToggleOn} />
                <span className="ml-2 pb-1">Activate warp to {currentRoom.name}</span>
            </button>
        )
    }

    return (
        <div className={(displayMode === "transitions" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Warps</h2>
            {warpActivationButton}
            <ul>{warps}</ul>
        </div>
    )
}

export default WarpList
