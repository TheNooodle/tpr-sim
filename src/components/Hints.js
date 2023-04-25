import { faAngleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getBasicHint } from "../services/spoiler"
import useDisplayModeStore from "../store/display-mode"
import useSaveStateStore from "../store/save-state"

function Hints(props) {
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const displayMode = useDisplayModeStore((state) => state.displayMode)
    const checkedHints = useSaveStateStore((state) => state.checkedHints)
    const checkHint = useSaveStateStore((state) => state.checkHint)
    const currentRoom = useSaveStateStore((state) => state.currentRoom)

    let hints = []
    Object.keys(checkedHints).forEach((hintName) => {
        hints = hints.concat(checkedHints[hintName])
    })
    hints = hints.concat(getBasicHint(spoilerLog))

    let dungeonsSignButton = null
    if (currentRoom.name === "Ordon Province" && checkedHints['dungeons'] === undefined) {
        dungeonsSignButton = (
            <button
                className="bg-lime-500 hover:bg-lime-600 mb-2 p-2 min-h-[44px] w-full text-white border border-black flex flex-row justify-center items-center"
                onClick={() => checkHint('dungeons')}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span className="ml-2 pb-1">Check required dungeons</span>
            </button>
        )
    }

    const hintElements = hints.map((hintObject) => (
        <div className="grid grid-cols-[44px_1fr] grid-rows-[minmax(44px,_1fr)_minmax(44px,_1fr)] border-b border-black">
            <div className="col-span-2 px-1 flex items-center">
                <span>{hintObject.location}</span>
            </div>
            <div className="text-center pt-1 flex justify-center items-center">
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="px-1 flex items-center">
                <span>{hintObject.item}</span>
            </div>
        </div>
    ))

    return (
        <div className={(displayMode === "hints" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Hints</h2>
            {dungeonsSignButton}
            <div className="flex flex-col border border-b-0 border-black w-full">
                {hintElements}
            </div>
        </div>
    )
}

export default Hints
