import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkLocation } from "../services/spoiler"
import useLastActionStore from "../store/last-action";
import useSaveStateStore from "../store/save-state";
import { faAngleRight, faEye, faHand } from "@fortawesome/free-solid-svg-icons";


function Check(props) {
    const check = props.check
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const checkedLocations = useSaveStateStore((state) => state.checkedLocations)
    const storeCheckLocation = useSaveStateStore((state) => state.checkLocation)
    const setLastAction = useLastActionStore((state) => state.setLastAction)
    const setCurrentRoom = useSaveStateStore((state) => state.setCurrentRoom)
    const peekedLocations = useSaveStateStore((state) => state.peekedLocations)
    const peekLocation = useSaveStateStore((state) => state.peekLocation)
    const handleCheck = (event) => {
        const item = checkLocation(spoilerLog, check.name)
        storeCheckLocation(check.name)
        setLastAction("Got " + item)
        if (check.forceTransition !== null) {
            setCurrentRoom(check.forceTransition)
        }
    }

    const wasChecked = checkedLocations.includes(check.name)
    const wasPeeked = peekedLocations.includes(check.name)
    const checkResult = wasChecked || wasPeeked ? checkLocation(spoilerLog, check.name) : "------------------------"
    const locationNameBg = wasChecked ? "bg-gray-100 text-gray-400" : "bg-white text-black"
    const checkNameBg = wasChecked || !check.peekable ? "bg-gray-100 text-gray-400" : "bg-white text-black"

    return (
        <li>
            <div className="border border-black mb-2 grid grid-cols-[44px_1fr_44px] grid-rows-[minmax(44px,_1fr)_minmax(44px,_1fr)] w-full">
                <div className={"flex justify-center items-center p-1 " + locationNameBg}>
                    <img alt="" src={wasChecked ? "images/chest_open.png" : "images/chest_closed.png"}></img>
                </div>
                <div className={"px-3 flex items-center " + locationNameBg}>
                    <span>{check.name}</span>
                </div>
                <button
                    disabled={wasChecked}
                    className={(!check.peekable ? "row-span-2" : "") + " bg-lime-500 hover:bg-lime-600 disabled:bg-gray-100 disabled:text-gray-400 text-white"}
                    onClick={handleCheck}
                >
                    <FontAwesomeIcon icon={faHand} />
                </button>
                <div className={"text-center pt-1 flex justify-center items-center " + checkNameBg}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className={"px-3 flex items-center " + checkNameBg}>
                    <span>{checkResult}</span>
                </div>
                <button
                    disabled={wasChecked || wasPeeked}
                    className={(!check.peekable ? "hidden" : "") + " bg-blue-800 hover:bg-blue-950 disabled:bg-gray-100 disabled:text-gray-400 text-white"}
                    onClick={() => peekLocation(check.name)}
                >
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </div>
        </li>
    )
}

/* <button className="" disabled={checkedLocations.includes(check.name)} key={check.name} onClick={handleCheck}>{check.name}</button> */

export default Check
