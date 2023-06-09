import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkLocation } from "../services/spoiler.js"
import useLastActionStore from "../store/last-action.js";
import useSaveStateStore from "../store/save-state.js";
import { faAngleRight, faEye, faHand, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import openedChest from '../images/chest_open.png'
import closedChest from '../images/chest_closed.png'
import { checkLogic } from "../services/logic.js";

function Check(props) {
    const check = props.check
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)
    const checkedLocations = useSaveStateStore((state) => state.checkedLocations)
    const storeCheckLocation = useSaveStateStore((state) => state.checkLocation)
    const setLastAction = useLastActionStore((state) => state.setLastAction)
    const setCurrentRoom = useSaveStateStore((state) => state.setCurrentRoom)
    const peekedLocations = useSaveStateStore((state) => state.peekedLocations)
    const peekLocation = useSaveStateStore((state) => state.peekLocation)
    const obtainItem = useSaveStateStore((state) => state.obtainItem)
    const itemsObtained = useSaveStateStore((state) => state.itemsObtained)
    const handleCheck = (event) => {
        const item = checkLocation(spoilerLog, check.name)
        storeCheckLocation(check.name)
        obtainItem(item)
        setLastAction("Got " + item)
        if (check.forceTransition !== null) {
            setCurrentRoom(check.forceTransition)
        }
    }

    const isInLogic = checkLogic(check.requirements, {
        spoilerLog: spoilerLog,
        itemsObtained: itemsObtained
    })

    const wasChecked = checkedLocations.includes(check.name)
    const wasPeeked = peekedLocations.includes(check.name)
    const checkResult = wasChecked || wasPeeked ? checkLocation(spoilerLog, check.name) : "------------------------"

    let locationNameBg = "bg-white text-black"
    let checkNameBg = !check.peekable ? "bg-gray-100 text-gray-400" : "bg-white text-black"
    let checkButtonBg = " bg-lime-500 hover:bg-lime-600 disabled:bg-gray-100 disabled:text-gray-400 text-white"
    let icon = <img alt="" src={closedChest}></img>
    if (wasChecked) {
        locationNameBg = "bg-gray-100 text-gray-400"
        checkNameBg = "bg-gray-100 text-gray-400"
        icon = <img alt="" src={openedChest}></img>
    } else if (!isInLogic) {
        locationNameBg = "bg-amber-400 text-white"
        checkNameBg = !check.peekable ? "bg-amber-400 text-white" : "bg-amber-400 text-white"
        icon = <FontAwesomeIcon icon={faTriangleExclamation} />
        checkButtonBg=" bg-amber-500 hover:bg-amber-600 disabled:bg-gray-100 disabled:text-gray-400 text-white"
    }

    return (
        <li>
            <div className="border border-black mb-2 grid grid-cols-[44px_1fr_44px] grid-rows-[minmax(44px,_1fr)_minmax(44px,_1fr)] w-full">
                <div className={"flex justify-center items-center p-1 " + locationNameBg}>
                    {icon}
                </div>
                <div className={"px-3 flex items-center " + locationNameBg}>
                    <span>{check.name}</span>
                </div>
                <button
                    disabled={wasChecked}
                    className={(!check.peekable ? "row-span-2" : "") + checkButtonBg}
                    onClick={handleCheck}
                    title="Get Item"
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
                    title="Peek Item"
                >
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </div>
        </li>
    )
}

/* <button className="" disabled={checkedLocations.includes(check.name)} key={check.name} onClick={handleCheck}>{check.name}</button> */

export default Check
