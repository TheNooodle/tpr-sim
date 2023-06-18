import logicFunctions from "./logic-functions.js"
import itemList from "./item-list.js"

const operands = ["or", "and", "equals", "settings", "room"]

function checkLogic(requirement, saveObject) {
    if (typeof(requirement) !== "string") {
        return true
    }

    const tokens = tokenize(requirement)
    const tokenDictionnary = {
        tokens: tokens,
        index: 0,
        isInParenthesis: 0,
        current() { return this.tokens[this.index] },
        next() { this.index++ },
        openParenthesis() { this.isInParenthesis++ },
        closeParenthesis() { this.isInParenthesis-- },
        isInBound() { return this.index < this.tokens.length }
    }

    return parse(tokenDictionnary, saveObject)
}

function parse(tokenDictionnary, saveObject) {
    while (tokenDictionnary.current() !== null && tokenDictionnary.isInBound()) {
        let boolean = parseBoolean(tokenDictionnary, saveObject)
        while (tokenDictionnary.isInBound() && operands.includes(tokenDictionnary.current().type)) {
            const operand = tokenDictionnary.current().type
            tokenDictionnary.next()
            const nextBoolean = parseBoolean(tokenDictionnary, saveObject)
            if (operand == "and") {
                boolean = boolean && nextBoolean
            } else {
                boolean = boolean || nextBoolean
            }
        }

        if (tokenDictionnary.isInParenthesis == 0 && tokenDictionnary.isInBound()) {
            // no return ?
            parseBoolean(tokenDictionnary, saveObject)
        }

        return boolean
    }

    // empty requirement is in logic for reliability purposes
    return true
}

function parseBoolean(tokenDictionnary, saveObject) {
    let parseBool = false
    if (tokenDictionnary.current().type == "true" || tokenDictionnary.current().type == "false") {
        let current = tokenDictionnary.current()
        tokenDictionnary.next()
        if (current.type === "true") {
            return true
        }

        return false
    } else if (tokenDictionnary.current().type == "openParenthesis") {
        tokenDictionnary.openParenthesis()
        tokenDictionnary.next()
        let expInPars = parse(tokenDictionnary, saveObject)
        if (tokenDictionnary.current() && tokenDictionnary.current().type != "closedParenthesis") {
            throw new Error("Expecting Closing Parenthesis, got " + tokenDictionnary.current().value)
        }
        tokenDictionnary.next()
        tokenDictionnary.closeParenthesis()

        return expInPars
    } else if (tokenDictionnary.current().type == "closedParenthesis" && tokenDictionnary.isInParenthesis <= 0) {
        throw new Error("Unexpected closed parenthesis")
    } else if (tokenDictionnary.current().type == "item") {
        const evaluatedItem = tokenDictionnary.current().value
        tokenDictionnary.next()
        if (tokenDictionnary.current() && tokenDictionnary.current().type == "comma") {
            tokenDictionnary.next()
            // verifyItemQuantity
            parseBool = saveObject.itemsObtained.filter((item) => item === evaluatedItem.replaceAll("_", " ")).length >= tokenDictionnary.current().value
            tokenDictionnary.next()
        } else {
            // verifyItem
            parseBool = saveObject.itemsObtained.includes(evaluatedItem.replaceAll("_", " "))
        }

        return parseBool
    } else if (tokenDictionnary.current().type == "logicFunction") {
        const evaluatedFunction = tokenDictionnary.current().value
        tokenDictionnary.next()
        if (!Object.keys(logicFunctions).includes(evaluatedFunction)) {
            // we dont want to be blocked by a new, unknown token in case of new logic
            return true
        } else if (tokenDictionnary.current() && tokenDictionnary.current().type == "comma") {
            tokenDictionnary.next()
            const getQuantity = logicFunctions[evaluatedFunction](saveObject)
            if (getQuantity >= tokenDictionnary.current().value) {
                parseBool = true
            }
            tokenDictionnary.next()
        } else {
            parseBool = logicFunctions[evaluatedFunction](saveObject)
        }

        return parseBool
    } else if (tokenDictionnary.current().type == "settings") {
        const evaluatedItem = tokenDictionnary.current().value
        tokenDictionnary.next()
        if (tokenDictionnary.current() && tokenDictionnary.current().type == "equals") {
            tokenDictionnary.next()
            const setting = evaluatedItem.replace("Setting.", "")
            let settingValue = saveObject.spoilerLog.settings[setting]
            if (settingValue === true) {
                settingValue = "true"
            } else if (settingValue === false) {
                settingValue = "false"
            }
            parseBool = (settingValue.toLowerCase() == tokenDictionnary.current().value.toLowerCase())
            tokenDictionnary.next()
        } else if (tokenDictionnary.current().type == "negation") {
            tokenDictionnary.next()
            const setting = evaluatedItem.replace("Setting.", "")
            let settingValue = saveObject.spoilerLog.settings[setting]
            if (settingValue === true) {
                settingValue = "true"
            } else if (settingValue === false) {
                settingValue = "false"
            }
            parseBool = settingValue.toLowerCase() != tokenDictionnary.current().value.toLowerCase()
            tokenDictionnary.next()
        }

        return parseBool
    } else if (tokenDictionnary.current().type == "room") {
        // @todo: figure out a way to properly implement this
        return true
    }

    return parse(tokenDictionnary, saveObject)
}

function tokenize(requirement) {
    if (typeof(requirement) !== "string") {
        return []
    }

    let tokens = []
    let i = 0
    while (i < requirement.length) {
        while (requirement.charAt(i).trim() === '') {
            i++
        }
        switch (requirement.charAt(i)) {
            case "!":
                tokens.push({type: 'negation', value: requirement.charAt(i)})
                i++
                break
            case "(":
                tokens.push({type: 'openParenthesis', value: requirement.charAt(i)})
                i++
                break
            case ")":
                tokens.push({type: 'closedParenthesis', value: requirement.charAt(i)})
                i++
                break
            case ",":
                tokens.push({type: 'comma', value: requirement.charAt(i)})
                i++
                break
            default:
                let potentialKeyword = ""
                if (isLetter(requirement.charAt(i))) {
                    while (isLetter(requirement.charAt(i)) || requirement.charAt(i) === "_" || requirement.charAt(i) === ".") {
                        potentialKeyword += requirement.charAt(i)
                        i++
                    }

                    switch (potentialKeyword) {
                        case "true":
                            tokens.push({type: "true", value: potentialKeyword})
                            break;
                        case "false":
                            tokens.push({type: "false", value: potentialKeyword})
                            break;
                        case "and":
                            tokens.push({type: "and", value: potentialKeyword})
                            break;
                        case "or":
                            tokens.push({type: "or", value: potentialKeyword})
                            break;
                        case "equals":
                            tokens.push({type: "equals", value: potentialKeyword})
                            break;
                        case "not_equal":
                            // Same as upstream
                            tokens.push({type: "equals", value: potentialKeyword})
                            break;
                        default:
                            if (itemList.includes(potentialKeyword)) {
                                tokens.push({type: "item", value: potentialKeyword})
                                break;
                            } else if (potentialKeyword.includes("Setting.")) {
                                tokens.push({type: "settings", value: potentialKeyword})
                                break;
                            } else if (potentialKeyword.includes("Room.")) {
                                tokens.push({type: "room", value: potentialKeyword})
                                break;
                            } else {
                                tokens.push({type: "logicFunction", value: potentialKeyword})
                            }
                            break;
                    }
                } else if (isNumber(requirement.charAt(i))) {
                    let number = ""
                    while (isNumber(requirement.charAt(i))) {
                        number += requirement.charAt(i)
                        i++
                    }
                    tokens.push({type: "integer", value: number})
                } else {
                    throw new Error("Unknown grammar : " + requirement.substring(i))
                }
                break;
        }
    }

    return tokens
}

function isLetter(character) {
    return character.toLowerCase() != character.toUpperCase()
}

function isNumber(character) {
    return !isNaN(parseInt(character))
}

export { checkLogic, tokenize }
