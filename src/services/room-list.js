class RoomList
{
    constructor(rooms = {}) {
        this.rooms = rooms
    }

    getRoom(roomName) {
        if (this.rooms[roomName] === undefined) {
            throw new Error("Room doesn't exists")
        }

        return this.rooms[roomName]
    }
}

export default RoomList
