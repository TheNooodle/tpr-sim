import useSaveStateStore from "../store/save-state";
import useLastActionStore from "../store/last-action"
import Hints from "./Hints"
import CheckList from "./CheckList"
import TransitionList from "./TransitionList";
import WarpList from "./WarpList";
import DisplaySwitcher from "./DisplaySwitcher";
import DeleteSeedButton from "./DeleteSeedButton";


function Simulator(props) {
    const currentRoom = useSaveStateStore((state) => state.currentRoom)
    const lastAction = useLastActionStore((state) => state.lastAction)

    return (
        <div className="p-3 mb-10 sm:mb-0 flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-full max-w-screen-xl sm:px-3">
                <div>
                    <h1 className="text-3xl font-bold underline my-2">Simulator</h1>
                    <p>{lastAction}</p>
                    <p>Current room : {currentRoom.name}</p>
                </div>
                <DeleteSeedButton/>
            </div>
            <div className="w-full max-w-screen-xl grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
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
