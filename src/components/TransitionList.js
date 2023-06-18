import useDisplayModeStore from "../store/display-mode.js"
import useSaveStateStore from "../store/save-state.js"
import Transition from "./Transition.js"

function TransitionList(props) {
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const displayMode = useDisplayModeStore((state) => state.displayMode)

    const transitions = currentRoom.neighbours.map((neighbour) =>
        <Transition key={neighbour.name} neighbour={neighbour}/>
    )

    return (
        <div className={(displayMode === "transitions" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Transitions</h2>
            <ul>{transitions}</ul>
        </div>
    )
}

export default TransitionList
