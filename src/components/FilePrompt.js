import useSaveStateStore from "../store/save-state";

function FilePrompt(props) {
    const uploadSpoiler = useSaveStateStore((state) => state.uploadSpoiler)

    const handleChange = (event) => {
        const reader = new FileReader()
        reader.onload = async (event) => {
            uploadSpoiler(event.target.result)
        }
        reader.readAsText(event.target.files[0])
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-3xl text-center font-bold underline mb-8">TPR Simulator</h1>
            <input type="file" onChange={handleChange}/>
        </div>
    )
}

export default FilePrompt
