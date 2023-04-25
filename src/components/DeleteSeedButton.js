import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSaveStateStore from "../store/save-state"

function DeleteSeedButton(props) {
    const deleteSave = useSaveStateStore((state) => state.deleteSave)

    const handleClick = () => {
        if (window.confirm('Are you sure you want to delete this seed ?')) {
            deleteSave()
        }
    }

    return (
        <button
            className="flex flex-row justify-center items-center bg-red-600 hover:bg-red-700 text-white p-2 min-h-[44px] min-w-[44px]"
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faTrash}/>
            <span className="pl-2 hidden sm:block">Delete seed</span>
        </button>
    )
}

export default DeleteSeedButton
