import smallKeyIcon from "../images/smallkey.png"
import bigKeyIcon from "../images/bosskey.png"
import minesKeyIcon from "../images/mineskey.png"
import bedroomKeyIcon from "../images/bedroomkey.png"
import pumpkinIcon from "../images/pumpkin.png"
import cheeseIcon from "../images/cheese.png"
import DungeonKeys from "./DungeonKeys.js"

const keysDictionnary = [
    {
        name: "Forest Temple",
        items: [
            {
                key: 1,
                itemName: "Forest Temple Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 4,
            },
            {
                key: 2,
                itemName: "Forest Temple Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "Goron Mines",
        items: [
            {
                key: 1,
                itemName: "Goron Mines Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 3,
            },
            {
                key: 2,
                itemName: "Goron Mines Key Shard",
                defaultImage: minesKeyIcon,
                withCount: true,
                maxQuantity: 3,
            },
        ],
    },
    {
        name: "Lakebed Temple",
        items: [
            {
                key: 1,
                itemName: "Lakebed Temple Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 3,
            },
            {
                key: 2,
                itemName: "Lakebed Temple Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "Arbiters Ground",
        items: [
            {
                key: 1,
                itemName: "Arbiters Grounds Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 5,
            },
            {
                key: 2,
                itemName: "Arbiters Grounds Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "Snowpeak Ruins",
        items: [
            {
                key: 1,
                itemName: "Snowpeak Ruins Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 4,
            },
            {
                key: 2,
                itemName: "Snowpeak Ruins Bedroom Key",
                defaultImage: bedroomKeyIcon,
                progressiveImageMap: {
                    1: bedroomKeyIcon,
                }
            },
            {
                key: 3,
                itemName: "Snowpeak Ruins Ordon Pumpkin",
                defaultImage: pumpkinIcon,
                progressiveImageMap: {
                    1: pumpkinIcon,
                }
            },
            {
                key: 4,
                itemName: "Snowpeak Ruins Ordon Goat Cheese",
                defaultImage: cheeseIcon,
                progressiveImageMap: {
                    1: cheeseIcon,
                }
            },
        ],
    },
    {
        name: "Temple of Time",
        items: [
            {
                key: 1,
                itemName: "Temple of Time Small Key",
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 3,
            },
            {
                key: 2,
                itemName: "Temple of Time Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "City in the Sky",
        items: [
            {
                key: 1,
                itemName: "City in The Sky Small Key", 
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 1,
            },
            {
                key: 2,
                itemName: "City in The Sky Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "Palace of Twilight",
        items: [
            {
                key: 1,
                itemName: "Palace of Twilight Small Key", 
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 7,
            },
            {
                key: 2,
                itemName: "Palace of Twilight Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
    {
        name: "Hyrule Castle",
        items: [
            {
                key: 1,
                itemName: "Hyrule Castle Small Key", 
                defaultImage: smallKeyIcon,
                withCount: true,
                maxQuantity: 3,
            },
            {
                key: 2,
                itemName: "Hyrule Castle Big Key",
                defaultImage: bigKeyIcon,
                progressiveImageMap: {
                    1: bigKeyIcon,
                }
            },
        ],
    },
]

function KeysTracker(props) {
    const dungeonKeysElements = keysDictionnary.map((dungeon) => (
        <DungeonKeys key={dungeon.name} name={dungeon.name} items={dungeon.items} />
    ))

    return (
        <div className="grid grid-cols-2 gap-5">
            {dungeonKeysElements}
        </div>
    )
}

export default KeysTracker
