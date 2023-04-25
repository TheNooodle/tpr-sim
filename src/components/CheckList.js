import { isExcluded } from "../services/spoiler"
import useDisplayModeStore from "../store/display-mode"
import useSaveStateStore from "../store/save-state"
import Check from "./Check"

function CheckList(props) {
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const displayMode = useDisplayModeStore((state) => state.displayMode)

    const validChecks = currentRoom.checks.filter((check) => !isExcluded(spoilerLog, check.name))
    const checks = validChecks.map((check) =>
        <Check key={check.name} check={check}/>
    )

    return (
        <div className={(displayMode === "checks" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Checks</h2>
            <ul>{checks}</ul>
        </div>
    )
}

export default CheckList
