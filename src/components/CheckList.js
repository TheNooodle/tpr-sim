import { checkLogic } from "../services/logic.js"
import { isExcluded } from "../services/spoiler.js"
import useDisplayModeStore from "../store/display-mode.js"
import useSaveStateStore from "../store/save-state.js"
import Check from "./Check.js"

function CheckList(props) {
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const itemsObtained = useSaveStateStore((state) => state.itemsObtained)
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const displayMode = useDisplayModeStore((state) => state.displayMode)

    const validChecks = currentRoom.checks.filter((check) => !isExcluded(spoilerLog, check.name))
    const inLogicChecks = validChecks.filter((check) => checkLogic(check.requirements, {spoilerLog: spoilerLog, itemsObtained: itemsObtained}))
    const outOfLogicChecks = validChecks.filter((check) => !checkLogic(check.requirements, {spoilerLog: spoilerLog, itemsObtained: itemsObtained}))
    const checks = inLogicChecks.concat(outOfLogicChecks).map((check) =>
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
