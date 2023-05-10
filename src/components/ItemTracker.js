import ItemIcon from "./ItemIcon"
import rodIcon from "../images/rod.png"
import earRingIcon from "../images/earring.png"
import slingshotIcon from "../images/slingshot.png"
import lanternIcon from "../images/lantern.png"
import boomerangIcon from "../images/boomerang.png"
import ironBootsIcon from "../images/iron-boots.png"
import bowIcon from "../images/bow.png"
import bow2Icon from "../images/bow2.png"
import bow3Icon from "../images/bow3.png"
import bombBagIcon from "../images/bombbag.png"
import clawshotIcon from "../images/clawshot.png"
import clawshot2Icon from "../images/clawshot2.png"
import spinnerIcon from "../images/spinner.png"
import chainballIcon from "../images/chainball.png"
import brokenDominionRodIcon from "../images/brokendominion.png"
import dominionRodIcon from "../images/dominion.png"
import letterIcon from "../images/letter.png"
import invoiceIcon from "../images/invoice.png"
import woodenStatueIcon from "../images/statue.png"
import iliaCharmIcon from "../images/ilia-charm.png"
import horseCallIcon from "../images/horse-call.png"
import skybookIcon from "../images/skybook.png"
import aurusMemoIcon from "../images/auru.png"
import asheisSketch from "../images/ashei.png"
import woodenSwordIcon from "../images/wooden-sword.png"
import ordonSwordIcon from "../images/ordon-sword.png"
import masterSwordIcon from "../images/master-sword.png"
import lightSwordIcon from "../images/master-sword-light.png"
import ordonShieldIcon from "../images/ordon-shield.png"
import woodenShieldIcon from "../images/wooden-shield.png"
import hylianShieldIcon from "../images/hylian-shield.png"
import zoraArmorIcon from "../images/zora-armor.png"
import magicArmorIcon from "../images/magic-armor.png"
import shadowCrystalIcon from "../images/shad-crystal.png"
import emptyBottleIcon from "../images/bottle-empty.png"
import oilBottleIcon from "../images/bottle-oil.png"
import tearsBottleIcon from "../images/bottle-tears.png"
import hiddenSkillIcon from "../images/hiddenskill.png"
import poeSoulIcon from "../images/soul.png"
import walletIcon from "../images/wallet.png"
import bigWalletIcon from "../images/bigwallet.png"
import giantWalletIcon from "../images/giantwallet.png"
import colossalWalletIcon from "../images/colossalwallet.png"
import gateKeysIcon from "../images/gatekeys.png"
import DungeonIcon from "./DungeonIcon"

const itemIconDictionnary = [
    {
        key: 1,
        itemName: "Progressive Fishing Rod",
        defaultImage: rodIcon,
        progressiveImageMap: {
            1: rodIcon,
            2: earRingIcon
        }
    },
    {
        key: 2,
        itemName: "Slingshot",
        defaultImage: slingshotIcon,
        progressiveImageMap: {
            1: slingshotIcon,
        }
    },
    {
        key: 3,
        itemName: "Lantern",
        defaultImage: lanternIcon,
        progressiveImageMap: {
            1: lanternIcon,
        }
    },
    {
        key: 4,
        itemName: "Boomerang",
        defaultImage: boomerangIcon,
        progressiveImageMap: {
            1: boomerangIcon,
        }
    },
    {
        key: 5,
        itemName: "Iron Boots",
        defaultImage: ironBootsIcon,
        progressiveImageMap: {
            1: ironBootsIcon,
        }
    },
    {
        key: 6,
        itemName: "Progressive Bow",
        defaultImage: bowIcon,
        progressiveImageMap: {
            1: bowIcon,
            2: bow2Icon,
            3: bow3Icon,
        }
    },
    {
        key: 7,
        itemName: "Filled Bomb Bag",
        defaultImage: bombBagIcon,
        progressiveImageMap: {
            1: bombBagIcon,
            2: bombBagIcon,
            3: bombBagIcon,
        }
    },
    {
        key: 8,
        itemName: "Progressive Clawshot",
        defaultImage: clawshotIcon,
        progressiveImageMap: {
            1: clawshotIcon,
            2: clawshot2Icon,
        }
    },
    {
        key: 9,
        itemName: "Spinner",
        defaultImage: spinnerIcon,
        progressiveImageMap: {
            1: spinnerIcon,
        }
    },
    {
        key: 10,
        itemName: "Ball and Chain",
        defaultImage: chainballIcon,
        progressiveImageMap: {
            1: chainballIcon,
        }
    },
    {
        key: 11,
        itemName: "Progressive Dominion Rod",
        defaultImage: brokenDominionRodIcon,
        progressiveImageMap: {
            1: brokenDominionRodIcon,
            2: dominionRodIcon,
        }
    },
    {
        key: 12,
        itemName: "Trade Quest",
        defaultImage: letterIcon,
        tradeQuestImageMap: {
            "Renados Letter": letterIcon,
            "Invoice": invoiceIcon,
            "Wooden Statue": woodenStatueIcon,
            "Ilias Charm": iliaCharmIcon,
            "Horse Call": horseCallIcon,
        }
    },
    {
        key: 13,
        itemName: "Progressive Sky Book",
        defaultImage: skybookIcon,
        withCount: true,
        isZeroIndexed: true,
        maxQuantity: 7,
    },
    {
        key: 14,
        itemName: "Aurus Memo",
        defaultImage: aurusMemoIcon,
        progressiveImageMap: {
            1: aurusMemoIcon,
        }
    },
    {
        key: 15,
        itemName: "Asheis Sketch",
        defaultImage: asheisSketch,
        progressiveImageMap: {
            1: asheisSketch,
        }
    },
    {
        key: 16,
        itemName: "Progressive Sword",
        defaultImage: woodenSwordIcon,
        progressiveImageMap: {
            1: woodenSwordIcon,
            2: ordonSwordIcon,
            3: masterSwordIcon,
            4: lightSwordIcon,
        }
    },
    {
        key: 17,
        itemName: "Shield",
        defaultImage: ordonShieldIcon,
        tradeQuestImageMap: {
            "Ordon Shield": ordonShieldIcon,
            "Wooden Shield": woodenShieldIcon,
            "Hylian Shield": hylianShieldIcon,
        }
    },
    {
        key: 18,
        itemName: "Zora Armor",
        defaultImage: zoraArmorIcon,
        progressiveImageMap: {
            1: zoraArmorIcon,
        }
    },
    {
        key: 19,
        itemName: "Magic Armor",
        defaultImage: magicArmorIcon,
        progressiveImageMap: {
            1: magicArmorIcon,
        }
    },
    {
        key: 20,
        itemName: "Shadow Crystal",
        defaultImage: shadowCrystalIcon,
        progressiveImageMap: {
            1: shadowCrystalIcon,
        }
    },
    {
        key: 21,
        itemName: "Progressive Hidden Skill",
        defaultImage: hiddenSkillIcon,
        withCount: true,
        maxQuantity: 7,
    },
    {
        key: 22,
        itemName: "Poe Soul",
        defaultImage: poeSoulIcon,
        withCount: true,
        maxQuantity: 60,
    },
    {
        key: 23,
        itemName: "Bottle",
        defaultImage: emptyBottleIcon,
        tradeQuestImageMap: {
            "Sera Bottle": emptyBottleIcon,
            "Coro Bottle": oilBottleIcon,
            "Jovani Bottle": tearsBottleIcon,
        }
    },
    {
        key: 24,
        itemName: "Progressive Wallet",
        defaultImage: walletIcon,
        progressiveImageMap: {
            0: walletIcon,
            1: bigWalletIcon,
            2: giantWalletIcon,
            3: colossalWalletIcon,
        }
    },
    {
        key: 25,
        itemName: "Gate Keys",
        defaultImage: gateKeysIcon,
        progressiveImageMap: {
            1: gateKeysIcon,
        }
    },
]

const dungeonsDictionnary = [
    {
        name: "Forest Temple",
        label: "Forest",
        rewardLocation: "Forest Temple Dungeon Reward",
    },
    {
        name: "Goron Mines",
        label: "Mines",
        rewardLocation: "Goron Mines Dungeon Reward",
    },
    {
        name: "Lakebed Temple",
        label: "Lakebed",
        rewardLocation: "Lakebed Temple Dungeon Reward",
    },
    {
        name: "Arbiters Grounds",
        label: "Grounds",
        rewardLocation: "Arbiters Grounds Stallord Heart Container",
    },
    {
        name: "Snowpeak Ruins",
        label: "Ruins",
        rewardLocation: "Snowpeak Ruins Dungeon Reward",
    },
    {
        name: "Temple of Time",
        label: "Time",
        rewardLocation: "Temple of Time Dungeon Reward",
    },
    {
        name: "City in The Sky",
        label: "Sky",
        rewardLocation: "City in The Sky Dungeon Reward",
    },
    {
        name: "Palace of Twilight",
        label: "Twilight",
        rewardLocation: "Palace of Twilight Zant Heart Container",
    },
]

function ItemTracker(props) {
    const iconList = itemIconDictionnary.map((icon) => (
        <ItemIcon key={icon.key}
            itemName={icon.itemName}
            defaultImage={icon.defaultImage}
            progressiveImageMap={icon.progressiveImageMap}
            tradeQuestImageMap={icon.tradeQuestImageMap}
            withCount={icon.withCount}
            isZeroIndexed={icon.isZeroIndexed}
            maxQuantity={icon.maxQuantity}
        />
    ))

    const dungeonList = dungeonsDictionnary.map((dungeon) => (
        <DungeonIcon
            dungeonName={dungeon.name}
            dungeonLabel={dungeon.label}
            dungeonRewardLocation={dungeon.rewardLocation}
        />
    ))

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-5">
                {iconList}
            </div>
            <div className="grid w-80 grid-cols-4 gap-1 mt-5">
                {dungeonList}
            </div>
        </div>
    )
}

export default ItemTracker
