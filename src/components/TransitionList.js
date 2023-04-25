import useDisplayModeStore from "../store/display-mode"
import useSaveStateStore from "../store/save-state"
import Transition from "./Transition"

function TransitionList(props) {
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const displayMode = useDisplayModeStore((state) => state.displayMode)

    const transitions = currentRoom.neighbours.map((neighbour) =>
        <Transition key={neighbour} neighbour={neighbour}/>
    )

    return (
        <div className={(displayMode === "transitions" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Transitions</h2>
            <ul>{transitions}</ul>
        </div>
    )
}

export default TransitionList
