import FilePrompt from "./FilePrompt.js";
import Simulator from "./Simulator.js";
import useSaveStateStore from "../store/save-state.js";

function App(props) {
    const spoilerLog = useSaveStateStore((state) => state.spoilerLog)

    if (spoilerLog !== null) {
        return (
            <Simulator />
        )
    } else {
        return (
            <FilePrompt />
        )
    }
}

export default App
