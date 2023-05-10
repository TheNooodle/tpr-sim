import { faHand, faLocationDot, faMagnifyingGlass, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useDisplayModeStore from "../store/display-mode"

function DisplaySwitcher(props) {
    const currentDisplayMode = useDisplayModeStore((state) => state.displayMode)
    const displayTracker = useDisplayModeStore((state) => state.displayTracker)
    const displayChecks = useDisplayModeStore((state) => state.displayChecks)
    const displayTransitions = useDisplayModeStore((state) => state.displayTransitions)
    const displayHints = useDisplayModeStore((state) => state.displayHints)

    const displayModes = [
        {
            mode: "tracker",
            icon: faShieldHalved,
            action: displayTracker
        },
        {
            mode: "checks",
            icon: faHand,
            action: displayChecks
        },
        {
            mode: "transitions",
            icon: faLocationDot,
            action: displayTransitions
        },
        {
            mode: "hints",
            icon: faMagnifyingGlass,
            action: displayHints
        },
    ]

    const displayButtons = displayModes.map((displayMode) => {
        return (
            <button
                key={displayMode.mode}
                className={"w-11 h-11 " + (displayMode.mode === currentDisplayMode ? "bg-gray-300 text-gray-400" : "")}
                onClick={displayMode.action}
            >
                <FontAwesomeIcon icon={displayMode.icon}/>
            </button>
        )
    })

    return (
        <div className="flex flex-row sm:hidden justify-around items-center fixed bottom-0 left-0 bg-gray-200 text-gray-400 h-11 w-full">
            {displayButtons}
        </div>
    )
}

export default DisplaySwitcher
