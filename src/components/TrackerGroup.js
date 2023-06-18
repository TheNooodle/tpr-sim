import { useState } from "react"
import useDisplayModeStore from "../store/display-mode.js"
import ItemTracker from "./ItemTracker.js"
import KeysTracker from "./KeysTracker.js"
import GoldenBugTracker from "./GoldenBugTracker.js"

function TrackerGroup(props) {
    const [currentTab, setCurrentTab] = useState("item")
    const displayMode = useDisplayModeStore((state) => state.displayMode)
    const buttons = [
        {
            label: "Items",
            tabName: "item"
        },
        {
            label: "Keys",
            tabName: "keys"
        },
        {
            label: "Golden Bugs",
            tabName: "bugs"
        },
    ]

    const buttonElements = buttons.map((button) => {
        let className = "p-2 min-h-[44px] text-black flex flex-row justify-center items-center"
        if (currentTab === button.tabName) {
            className += " bg-white border-x border-t border-black cursor-default"
        } else {
            className += " bg-gray-200 hover:bg-gray-300 border border-black"
        }

        return (
            <button
                onClick={() => setCurrentTab(button.tabName)}
                className={className}
            >
                {button.label}
            </button>
        )
    })

    return (
        <div className={(displayMode === "tracker" ? "block" : "hidden") + " sm:block sm:px-3"}>
            <h2 className="text-2xl font-bold mt-4 mb-2">Tracker</h2>
            <div className="flex flex-row">
                {buttonElements}
                <div className="flex-grow border-b border-black"></div>
            </div>
            <div className="border-l border-b border-r border-black p-2">
                {currentTab === "item" ? <ItemTracker/> : null}
                {currentTab === "keys" ? <KeysTracker/> : null}
                {currentTab === "bugs" ? <GoldenBugTracker/> : null}
            </div>
        </div>
    )
}

export default TrackerGroup
