import useSaveStateStore from "../store/save-state"
import chestOpened from "../images/chest_open.png"

function ItemIcon(props) {
    const itemsObtained = useSaveStateStore((state) => state.itemsObtained)

    const itemName = props.itemName ?? "No item"
    const itemLabel = props.itemLabel ?? null
    const itemQuantity = itemsObtained.reduce((acc, item) => acc + (item === itemName ? 1 : 0), 0)
    const defaultImage = props.defaultImage ?? chestOpened
    const progressiveImageMap = props.progressiveImageMap ?? {}
    const tradeQuestImageMap = props.tradeQuestImageMap // for trade quest items
    const withCount = props.withCount ?? false
    const isZeroIndexed = props.isZeroIndexed ?? false // for skybooks
    const maxQuantity = props.maxQuantity ?? 0

    let image = defaultImage
    let isActive = false
    let itemCount = null
    if (tradeQuestImageMap !== undefined) {
        Object.keys(tradeQuestImageMap).forEach((tradeQuestItem) => {
            if (itemsObtained.includes(tradeQuestItem)) {
                isActive = true
                image = tradeQuestImageMap[tradeQuestItem]
            }
        })
    } else if (withCount && itemQuantity > 0) {
        isActive = true
        if (isZeroIndexed) {
            itemCount = itemQuantity > 1 ? itemQuantity - 1 : null
        } else {
            itemCount = itemQuantity > 0 ? itemQuantity : null
        }
    } else if (progressiveImageMap[itemQuantity] !== undefined) {
        isActive = true
        image = progressiveImageMap[itemQuantity]
    }

    let className = "w-100 h-100 p-1 aspect-square flex items-center justify-center relative"
    if (!isActive) {
        className += " contrast-50 grayscale"
    }
    let countElement = null
    if (itemCount !== null) {
        let countElementClassName = "absolute bottom-1 right-1 border rounded-full w-6 h-6 flex items-center justify-center select-none"
        if (itemQuantity >= maxQuantity) {
            countElementClassName += " border-lime-500 bg-lime-500 text-white"
        } else {
            countElementClassName += " border-black bg-white"
        }
        countElement = (
            <div className={countElementClassName}>
                <span>{itemCount}</span>
            </div>
        )
    }

    let labelElement = null
    if (itemLabel) {
        labelElement = (
            <div className="absolute w-full bottom-0 left-0 text-center border border-black bg-white select-none">
                {itemLabel}
            </div>
        )
    }

    return (
        <div className={className}>
            <img src={image} title={itemName} alt={itemName} className=""/>
            {countElement}
            {labelElement}
        </div>
    )
}

export default ItemIcon
