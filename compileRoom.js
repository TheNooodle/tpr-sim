const { compileRoomDictionnary } = require('./src/services/room-compiler')
const fs = require('fs')
const path = require('path')

const roomDictionnaryObject = compileRoomDictionnary(path.join(__dirname, '/rooms/'))
fs.writeFileSync(path.join(__dirname, '/src/services/rooms.json'), JSON.stringify(roomDictionnaryObject))
