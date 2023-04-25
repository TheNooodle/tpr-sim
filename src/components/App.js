import FilePrompt from "./FilePrompt";
import Simulator from "./Simulator";
import useSaveStateStore from "../store/save-state";

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
