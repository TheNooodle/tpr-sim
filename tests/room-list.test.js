const { RoomList } = require('../src/services/room-list')

const roomList = new RoomList({
    'Lost Woods': {
        "name": "Lost Woods",
        "neighbours": 
        [
            "North Faron Woods", 
            "Sacred Grove Master Sword"
        ],
        "checks": 
        [
            "Lost Woods Lantern Chest",
            "Lost Woods Boulder Poe",
            "Lost Woods Waterfall Poe"
        ]
    },
    'Sacred Grove Master Sword': { 
        "name": "Sacred Grove Master Sword",
        "neighbours": 
        [
            "Lost Woods", 
            "Sacred Grove Temple of Time", 
            "Sacred Grove Baba Serpent Grotto"
        ],
        "checks": 
        [
            "Sacred Grove Spinner Chest",
            "Sacred Grove Male Snail",
            "Sacred Grove Master Sword Poe"
        ]
    }
})

test('getRoom() should fetch the correct room', () => {
    expect(roomList.getRoom('Lost Woods').name).toBe('Lost Woods')
    expect(roomList.getRoom('Sacred Grove Master Sword').checks[0]).toBe('Sacred Grove Spinner Chest')
    expect(() => roomList.getRoom('Gerudo Training Ground Lobby')).toThrow("Room doesn't exists")
})

test("getRoom() should throw an error if a room doesn't exist", () => {
    let newRoomList = new RoomList()

    expect(() => newRoomList.getRoom('Faron Field')).toThrow("Room doesn't exists")
})
