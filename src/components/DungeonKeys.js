import ItemIcon from "./ItemIcon.js"

function DungeonKeys(props) {
    const name = props.name
    const items = props.items

    const itemsElements = items.map((item) => (
        <ItemIcon key={item.key}
            itemName={item.itemName}
            defaultImage={item.defaultImage}
            progressiveImageMap={item.progressiveImageMap}
            tradeQuestImageMap={item.tradeQuestImageMap}
            withCount={item.withCount}
            isZeroIndexed={item.isZeroIndexed}
            maxQuantity={item.maxQuantity}
        />
    ))

    let className = "flex flex-col items-stretch"
    if (items.length > 2) {
        className += " row-span-2"
    }

    return (
        <div className={className}>
            <div className="px-1 h-[44px] flex items-center">
                <span>{name}</span>
            </div>
            <div className="pr-10 grid grid-cols-2">
                {itemsElements}
            </div>
        </div>
    )
}

export default DungeonKeys
