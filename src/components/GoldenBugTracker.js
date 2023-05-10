import ItemIcon from "./ItemIcon"
import goldenBugIcon from "../images/goldenbug.png"

const goldenBugDictionnary = [
    {
        name: "Ant",
        items: [
            {
                itemName: "Male Ant",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Ant",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Ladybug",
        items: [
            {
                itemName: "Male Ladybug",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Ladybug",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Mantis",
        items: [
            {
                itemName: "Male Mantis",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Mantis",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Grasshopper",
        items: [
            {
                itemName: "Male Grasshopper",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Grasshopper",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Butterfly",
        items: [
            {
                itemName: "Male Butterfly",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Butterfly",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Beetle",
        items: [
            {
                itemName: "Male Beetle",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Beetle",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Phasmid",
        items: [
            {
                itemName: "Male Phasmid",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Phasmid",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Pill Bug",
        items: [
            {
                itemName: "Male Pill Bug",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Pill Bug",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Dayfly",
        items: [
            {
                itemName: "Male Dayfly",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Dayfly",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Snail",
        items: [
            {
                itemName: "Male Snail",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Snail",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Stag Beetle",
        items: [
            {
                itemName: "Male Stag Beetle",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Stag Beetle",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
    {
        name: "Dragonfly",
        items: [
            {
                itemName: "Male Dragonfly",
                itemLabel: "Male",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            },
            {
                itemName: "Female Dragonfly",
                itemLabel: "Female",
                defaultImage: goldenBugIcon,
                progressiveImageMap: {
                    1: goldenBugIcon,
                }
            }
        ]
    },
]

function GoldenBugTracker(props) {
    const goldenBugElements = goldenBugDictionnary.map((goldenBugPair) => {
        const items = goldenBugPair.items.map((item) => (
            <ItemIcon 
                key={item.name}
                itemName={item.itemName}
                itemLabel={item.itemLabel}
                defaultImage={item.defaultImage}
                progressiveImageMap={item.progressiveImageMap}
            />
        ))

        return (
            <div key={goldenBugPair.name} className="flex flex-col items-center w-1/3 mb-5 mr-1">
                <div className="w-100 text-center">{goldenBugPair.name}</div>
                <div className="flex flex-row justify-between items-center">
                    {items}
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-row flex-wrap justify-around items-center">
            {goldenBugElements}
        </div>
    )
}

export default GoldenBugTracker
