import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fusedShadowIcon from "../images/shadow.png"
import shardIcon from "../images/shard.png"
import useSaveStateStore from "../store/save-state"
import { getSettingValue } from "../services/spoiler"

function DungeonIcon(props) {
    const dungeonName = props.dungeonName
    const dungeonLabel = props.dungeonLabel
    const dungeonRewardLocation = props.dungeonRewardLocation
    const checkedHints = useSaveStateStore((state) => state.checkedHints)
    const checkedLocations = useSaveStateStore((state) => state.checkedLocations)
    const spoilerObject = useSaveStateStore((state) => state.spoilerLog)
    const castleRequirement = getSettingValue(spoilerObject, "castleRequirements")

    let image = null
    let imageAlt = null
    let isActive = false
    if (checkedHints.dungeons !== undefined) {
        checkedHints.dungeons.forEach((dungeonHint) => {
            if (dungeonHint.location === dungeonName && dungeonHint.item === "Required dungeon") {
                if (castleRequirement === "Mirror_Shards") {
                    image = shardIcon
                    imageAlt = "Mirror Shard"
                } else {
                    image = fusedShadowIcon
                    imageAlt = "Fused Shadow"
                }
            }
        })
    }
    if (checkedLocations.includes(dungeonRewardLocation)) {
        isActive = true
    }

    let imageElement = <FontAwesomeIcon className="mb-4" icon={faQuestion} />
    if (image !== null) {
        let className = ""
        if (!isActive) {
            className += " contrast-50 grayscale"
        }
        imageElement = <img src={image} alt={imageAlt} title={imageAlt} className={className}/>
    }

    return (
        <div className="w-full aspect-square relative">
            <div className="w-full h-full flex justify-center items-center">
                {imageElement}
            </div>
            <div className="absolute w-full bottom-0 left-0 text-center border border-black bg-white select-none">
                {dungeonLabel}
            </div>
        </div>
    )
}

export default DungeonIcon
