/* eslint-disable */
const logicFunctions = {
    HasDamagingItem(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag", "Iron Boots", "Shadow Crystal", "Spinner"].includes(item)
        })
    },
    HasSword(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Sword")
    },
    CanDefeatAeralfos(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Clawshot")
            && (saveObject.itemsObtained.some((item) => {
                return ["Progressive Sword", "Ball and Chain", "Shadow Crystal"].includes(item)
                    || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
            }))
    },
    CanDefeatArmos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBabaSerpent(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBabyGohma(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Spinner", "Progressive Clawshot", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBari(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Filled Bomb Bag", "Progressive Clawshot"].includes(item)
        })
    },
    CanDefeatBeamos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Ball and Chain", "Progressive Bow", "Filled Bomb Bag"].includes(item)
        })
    },
    CanDefeatBigBaba(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatChu(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBokoblin(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner", "Progressive Clawshot", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBokoblinRed(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Progressive Clawshot", "Slingshot"
            ].includes(item)
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    // unused yet
    CanDefeatBombfish(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return item == "Iron Boots" || (saveObject.spoilerLog.settings.logicRules == "Glitched" && item == "Magic Armor")
        })
        && (
            saveObject.itemsObtained.some((item) => ["Progressive Sword", "Progressive Clawshot"].includes(item))
            || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
        )
    },
    CanDefeatBombling(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBomskit(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBubble(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatBulblin(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatChilfos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatChuWorm(saveObject) {
        return (saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject))
        && (
            saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag")
            || saveObject.itemsObtained.some((item) => item == "Progressive Clawshot")
        )
    },
    CanDefeatDarknut(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Sword")
    },
    CanDefeatDekuBaba(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Spinner", "Slingshot", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
        || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
    },
    // unused yet
    CanDefeatDekuLike(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag")
    },
    CanDefeatDodongo(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatDinalfos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Progressive Sword", "Ball and Chain", "Shadow Crystal"].includes(item)
        })
    },
    CanDefeatFireBubble(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatFireKeese(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatFireToadpoli(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Progressive Sword", "Ball and Chain", "Progressive Bow"].includes(item)
        }) || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
    },
    CanDefeatFreezard(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Ball and Chain")
    },
    CanDefeatGoron(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Spinner", "Slingshot", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
        || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
    },
    CanDefeatGhoulRat(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatGuay(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Slingshot",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatHelmasaur(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatHelmasaurus(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatIceBubble(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatIceKeese(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatPoe(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatKargarok(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatKeese(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatLeever(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatLizalfos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatMiniFreezard(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    // unused yet
    CanDefeatMoldorm(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatPoisonMite(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Lantern"
            ].includes(item)
        })
    },
    CanDefeatPuppet(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)  
    },
    CanDefeatRat(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatRedeadKnight(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatShadowBeast(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Sword")
        || (saveObject.itemsObtained.some((item) => item == "Shadow Crystal") && this.CanCompleteMDH(saveObject))
    },
    CanDefeatShadowBulblin(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatShadowDekuBaba(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Spinner", "Slingshot", "Progressive Clawshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
        || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
    },
    CanDefeatShadowInsect(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatShadowKargarok(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatShadowVermin(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatShellBlade(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
            || (saveObject.itemsObtained.some((item) => {
                return item == "Iron Boots" || (this.CanDoNicheStuff(saveObject) && item == "Magic Armor")
            }) && saveObject.itemsObtained.some((item) => item == "Progressive Sword"))
    },
    CanDefeatSkullfish(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatSkulltula(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatStalfos(saveObject) {
        return this.canSmash(saveObject)
    },
    CanDefeatStalhound(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatStalchild(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatTektite(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatTileWorm(saveObject) {
        return (saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject))
        && saveObject.itemsObtained.some((item) => item == "Boomerang")
    },
    CanDefeatToado(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow",
                "Shadow Crystal", "Spinner",
            ].includes(item)
        })
    },
    CanDefeatWaterToadpoli(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow"
            ].includes(item)
        })
        || saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 2
    },
    CanDefeatTorchSlug(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
        })
    },
    CanDefeatWalltula(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Ball and Chain", "Progressive Bow",
                "Boomerang", "Progressive Clawshot", "Slingshot"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatWhiteWolfos(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatYoungGohma(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner"
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatZantHead(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Shadow Crystal",
            ].includes(item)
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatOok(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatDangoro(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Shadow Crystal",
            ].includes(item)
            || (
                this.CanDoNicheStuff(saveObject) && item == "Ball and Chain"
                || (item == "Progressive Bow" && saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag"))
            )
        }) && saveObject.itemsObtained.some((item) => item == "Iron Boots")
    },
    CanDefeatCarrierKargarok(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatTwilitBloat(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatDekuToad(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        }) || this.CanUseBacksliceAsSword(saveObject)
    },
    CanDefeatSkullKid(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Bow")
    },
    CanDefeatKingBulblinBridge(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Bow")
    },
    CanDefeatKingBulblinDesert(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain",
                "Shadow Crystal",
            ].includes(item)
        }) || this.getItemCount(saveObject, "Progressive Bow") > 2
    },
    CanDefeatKingBulblinCastle(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain",
                "Shadow Crystal",
            ].includes(item)
        }) || this.getItemCount(saveObject, "Progressive Bow") > 2
    },
    // fixed logic, sword is necessary to cut the ropes
    CanDefeatDeathSword(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Sword")
            && saveObject.itemsObtained.some((item) => {
                return ["Boomerang", "Progressive Bow", "Progressive Clawshot"].includes(item)
            })
            && saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
    },
    CanDefeatDarkhammer(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal",
            ].includes(item)
            || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
        })
    },
    CanDefeatPhantomZant(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Progressive Sword", "Shadow Crystal"].includes(item)
        })
    },
    CanDefeatDiababa(saveObject) {
        return this.canLaunchBombs(saveObject)
        || (
            saveObject.itemsObtained.some((item) => item == "Boomerang")
            && saveObject.itemsObtained.some((item) => {
                return [
                    "Progressive Sword", "Ball and Chain", "Filled Bomb Bag",
                    "Shadow Crystal",
                ].includes(item)
                || (item == "Iron Boots" && this.CanDoNicheStuff(saveObject))
            })
        )
    },
    CanDefeatFyrus(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Bow")
        && saveObject.itemsObtained.some((item) => item == "Iron Boots")
        && saveObject.itemsObtained.some((item) => item == "Progressive Sword")
    },
    CanDefeatMorpheel(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Zora Armor")
        && saveObject.itemsObtained.some((item) => item == "Iron Boots")
        && saveObject.itemsObtained.some((item) => item == "Progressive Sword")
        && saveObject.itemsObtained.some((item) => item == "Progressive Clawshot")
    },
    CanDefeatStallord(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Sword")
        && saveObject.itemsObtained.some((item) => item == "Spinner")
    },
    CanDefeatBlizzeta(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Ball and Chain")
    },
    CanDefeatArmogohma(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Bow")
        && saveObject.itemsObtained.some((item) => item == "Progressive Dominion Rod")
    },
    CanDefeatArgorok(saveObject) {
        return this.getItemCount(saveObject, "Progressive Clawshot") >= 2
        && this.getItemCount(saveObject, "Progressive Sword") >= 2
        && saveObject.itemsObtained.some((item) => {
            return item == "Iron Boots" || (this.CanDoNicheStuff(saveObject) && item == "Magic Armor")
        })
    },
    CanDefeatZant(saveObject) {
        return this.getItemCount(saveObject, "Progressive Sword") >= 3
        && (
            saveObject.itemsObtained.some((item) => item == "Boomerang")
            && saveObject.itemsObtained.some((item) => item == "Progressive Clawshot")
            && saveObject.itemsObtained.some((item) => item == "Ball and Chain")
            && saveObject.itemsObtained.some((item) => {
                return item == "Iron Boots" || (this.CanDoNicheStuff(saveObject) && item == "Magic Armor")
            })
            && (
                saveObject.itemsObtained.some((item) => item == "Zora Armor")
                || (
                    saveObject.spoilerLog.settings.logicRules == "Glitched"
                    && this.CanDoAirRefill(saveObject)
                )
            )
        )
    },
    CanDefeatGanondorf(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Shadow Crystal")
        && saveObject.itemsObtained.some((item) => item == "Progressive Hidden Skill")
        && this.getItemCount(saveObject, "Progressive Sword") >= 3
    },
    canSmash(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Ball and Chain", "Filled Bomb Bag"].includes(item)
        })
    },
    canBurnWebs(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Lantern", "Ball and Chain", "Filled Bomb Bag"].includes(item)
        })
    },
    hasRangedItem(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Ball and Chain", "Progressive Bow", "Slingshot", "Progressive Clawshot", "Boomerang"].includes(item)
        })
    },
    hasShield(saveObject) {
        // @todo:
        return true
    },
    canLaunchBombs(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Boomerang", "Progressive Bow"].includes(item)
        })
        && saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag")
    },
    canCutHangingWeb(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Ball and Chain", "Progressive Bow", "Progressive Clawshot", "Boomerang"].includes(item)
        })
    },
    canKnockDownHCPainting(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Progressive Bow")
        || (
            this.CanDoNicheStuff(saveObject)
            && saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag")
            || (
                saveObject.itemsObtained.some((item) => item == "Progressive Sword")
                && this.getItemCount(saveObject, "Progressive Hidden Skill") >= 6
            )
            || (
                saveObject.spoilerLog.settings.logicRules == "Glitched"
                && (
                    (
                        saveObject.itemsObtained.some((item) => item == "Progressive Sword")
                        && this.CanDoMoonBoots(saveObject)
                    )
                    || this.CanDoBSMoonBoots(saveObject)
                )
            )
        )
    },
    canBreakMonkeyCage(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Ball and Chain", "Progressive Bow", "Filled Bomb Bag",
                "Shadow Crystal", "Spinner", "Iron Boots", "Progressive Clawshot"
            ].includes(item)
        })
        || (this.CanDoNicheStuff(saveObject) && this.getItemCount(saveObject, "Progressive Hidden Skill") >= 2)
    },
    canFreeAllMonkeys(saveObject) {
        return (
            this.canBreakMonkeyCage(saveObject)
            && (
                saveObject.itemsObtained.some((item) => item == "Lantern")
                || (
                    saveObject.spoilerLog.settings.smallKeySettings == "Keysy"
                    && saveObject.itemsObtained.some((item) => {
                        return ["Filled Bomb Bag", "Iron Boots"].includes(item)
                    })
                )
            )
            && this.canBurnWebs(saveObject)
            && saveObject.itemsObtained.some((item) => item == "Boomerang")
            && this.CanDefeatBokoblin(saveObject)
            && (
                this.getItemCount("Forest Temple Small Key") >= 4
                || saveObject.spoilerLog.settings.smallKeySettings == "Keysy"
            )
        )
    },
    canKnockDownHangingBaba(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return ["Progressive Bow", "Progressive Clawshot", "Boomerang"].includes(item)
        })
    },
    canBreakWoodenDoor(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Progressive Sword", "Shadow Crystal",
            ].includes(item)
        }) || this.CanUseBacksliceAsSword(saveObject)
        || this.canSmash(saveObject)
    },
    hasBombs(saveObject) {
        return saveObject.itemsObtained.some((item) => item == "Filled Bomb Bag")
    },
    canCompletePrologue(saveObject) {
        return saveObject.spoilerLog.settings.skipPrologue == true
        || (
            saveObject.itemsObtained.some((item) => item == "Progressive Sword")
            && saveObject.itemsObtained.some((item) => item == "Slingshot")
            && saveObject.itemsObtained.some((item) => item == "Progressive Fishing Rod")
            && (
                saveObject.itemsObtained.some((item) => item == "North Faron Woods Gate Key")
                || saveObject.spoilerLog.settings.smallKeySettings == "Keysy"
            )
        )
    },
    CanCompleteMDH(saveObject) {
        return this.canCompleteLakebedTemple(saveObject) || saveObject.spoilerLog.settings.skipMdh == true
    },
    canClearForest(saveObject) {
        return (
            this.canCompleteForestTemple(saveObject)
            || saveObject.spoilerLog.settings.faronWoodsLogic == "Open"
        )
        && this.canCompletePrologue(saveObject)
    },
    CanCompleteEldinTwilight(saveObject) {
        return saveObject.spoilerLog.settings.eldinTwilightCleared == true
            || (this.canCompletePrologue(saveObject) && this.canClearForest(saveObject))
    },
    canCompleteForestTemple(saveObject) {
        // @todo:
        return this.CanDefeatDiababa(saveObject)
    },
    canCompleteGoronMines(saveObject) {
        // @todo:
        return this.CanDefeatFyrus(saveObject)
    },
    canCompleteLakebedTemple(saveObject) {
        // @todo:
        return this.CanDefeatMorpheel(saveObject)
    },
    canCompleteArbitersGrounds(saveObject) {
        // @todo:
        return this.CanDefeatStallord(saveObject)
    },
    canCompleteSnowpeakRuins(saveObject) {
        // @todo:
        return this.CanDefeatBlizzeta(saveObject)
    },
    canCompleteTempleofTime(saveObject) {
        // @todo:
        return this.CanDefeatArmogohma(saveObject)
    },
    canCompleteCityinTheSky(saveObject) {
        // @todo:
        return this.CanDefeatArgorok(saveObject)
    },
    canCompletePalaceofTwilight(saveObject) {
        // @todo:
        return this.CanDefeatZant(saveObject)
    },
    canCompleteAllDungeons(saveObject) {
        return this.canCompleteForestTemple(saveObject)
            && this.canCompleteGoronMines(saveObject)
            && this.canCompleteLakebedTemple(saveObject)
            && this.canCompleteArbitersGrounds(saveObject)
            && this.canCompleteSnowpeakRuins(saveObject)
            && this.canCompleteTempleofTime(saveObject)
            && this.canCompleteCityinTheSky(saveObject)
            && this.canCompletePalaceofTwilight(saveObject)
    },
    HasBug(saveObject) {
        return saveObject.itemsObtained.some((item) => {
            return [
                "Male_Beetle", "Female_Beetle", "Male_Butterfly", "Female_Butterfly", "Male_Stag_Beetle",
                "Female_Stag_Beetle", "Male_Grasshopper", "Female_Grasshopper", "Male_Phasmid",
                "Female_Phasmid", "Male_Pill_Bug", "Female_Pill_Bug", "Male_Mantis", "Female_Mantis",
                "Male_Ladybug", "Female_Ladybug", "Male_Snail", "Female_Snail", "Male_Dragonfly",
                "Female_Dragonfly", "Male_Ant", "Female_Ant", "Male_Dayfly", "Female_Dayfly"
            ].includes(item)
        })
    },
    CanDoNicheStuff(saveObject) {
        return saveObject.spoilerLog.settings.logicRules == "Glitched"
    },
    CanUseBacksliceAsSword(saveObject) {
        return this.CanDoNicheStuff(saveObject) && saveObject.itemsObtained.filter((item) => item == "Progressive Hidden Skill").length >= 3
    },
    CanDoAirRefill(saveObject) {
        // @todo:
        return false
    },
    CanDoMoonBoots(saveObject) {
        // @todo:
        return false
    },
    CanDoBSMoonBoots(saveObject) {
        return this.getItemCount("Progressive Hidden Skill") >= 3
        && saveObject.itemsObtained.some((item) => item == "Magic Armor")
    },
    getItemCount(saveObject, desiredItem) {
        return saveObject.itemsObtained.filter((item) => item == desiredItem).length
    }
}

export default logicFunctions
