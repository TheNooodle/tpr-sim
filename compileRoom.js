import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { compileRoomDictionnary } from './src/services/room-compiler.js'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const roomDictionnaryObject = compileRoomDictionnary(join(__dirname, '/rooms/'))
writeFileSync(join(__dirname, '/src/services/rooms.json'), JSON.stringify(roomDictionnaryObject))
