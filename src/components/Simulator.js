import useSaveStateStore from "../store/save-state.js";
import useLastActionStore from "../store/last-action.js"
import Hints from "./Hints.js"
import CheckList from "./CheckList.js"
import TransitionList from "./TransitionList.js";
import WarpList from "./WarpList.js";
import DisplaySwitcher from "./DisplaySwitcher.js";
import DeleteSeedButton from "./DeleteSeedButton.js";
import TrackerGroup from "./TrackerGroup.js";


function Simulator(props) {
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const lastAction = useLastActionStore((state) => state.lastAction)

    return (
        <div className="p-3 mb-10 sm:mb-0 flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-full max-w-screen-xl 2xl:max-w-screen-2xl sm:px-3">
                <div>
                    <h1 className="text-3xl font-bold underline my-2">Simulator</h1>
                    <p>{lastAction}</p>
                    <p>Current room : {currentRoom.name}</p>
                </div>
                <DeleteSeedButton/>
            </div>
            <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr_1fr]">
                <TrackerGroup/>
                <CheckList/>
                <div>
                    <TransitionList/>
                    <WarpList/>
                </div>
                <Hints/>
                <DisplaySwitcher/>
            </div>
        </div>
    )
}

export default Simulator
