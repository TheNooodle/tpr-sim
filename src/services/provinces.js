let provinceMap = {
    "Eldin Province": [
        "Death Mountain Interiors",
        "Death Mountain Trail",
        "Death Mountain Volcano",
        "Kakariko Village",
        "Eldin Field Bomskit Grotto",
        "Eldin Field Stalfos Grotto",
        "Eldin Field Water Bomb Fish Grotto",
        "Eldin Field",
        "Eldin Long Cave",
        "Goron Stockcave",
        "Kakariko Gorge",
        "Hidden Village"
    ],
    "Faron Province": [
        "Faron Mist Area",
        "Faron Mist Cave",
        "North Faron Woods",
        "South Faron Woods Cave",
        "South Faron Woods",
        "Faron Field Corner Grotto",
        "Faron Field",
        "Lost Woods",
        "Sacred Grove Baba Serpent Grotto",
        "Sacred Grove Master Sword",
        "Sacred Grove Temple of Time"
    ],
    "Gerudo Desert": [
        "Bulblin Camp",
        "Gerudo Desert Rock Grotto",
        "Gerudo Desert Skulltula Grotto",
        "Gerudo Desert",
        "Mirror Chamber",
        "Outside Arbiters Grounds"
    ],
    "Lanayru Province": [
        "Castle Town",
        "Lake Hylia Bridge Bubble Grotto",
        "Lake Hylia Bridge",
        "Lanayru Field Poe Grotto",
        "Lanayru Field Skulltula Grotto",
        "Lanayru Field",
        "Lanayru Ice Puzzle Cave",
        "Outside Castle Town South",
        "Outside Castle Town West",
        "Outside South Castle Town Tektite Grotto",
        "West Hyrule Field Helmasaur Grotto",
        "Lake Hylia Long Cave",
        "Lake Hylia Shell Blade Grotto",
        "Lake Hylia Water Toadpoli Grotto",
        "Lake Hylia",
        "Zoras Domain"
    ],
    "Ordona Province": [
        "Ordon Province",
        "Ordon Ranch Grotto"
    ],
    "Snowpeak Province": [
        "Snowpeak Climb",
        "Snowpeak Freezard Grotto",
        "Snowpeak Summit"
    ],
    "Arbiters Grounds": [
        "Arbiters Grounds After Poe Gate",
        "Arbiters Grounds Boss Room",
        "Arbiters Grounds East Wing",
        "Arbiters Grounds Entrance",
        "Arbiters Grounds Lobby",
        "Arbiters Grounds West Wing"
    ],
    "City in The Sky": [
        "City in The Sky Boss Room",
        "City in The Sky Central Tower Second Floor",
        "City in The Sky East Wing",
        "City in The Sky Entrance",
        "City in The Sky Lobby",
        "City in The Sky North Wing",
        "City in The Sky West Wing"
    ],
    "Forest Temple": [
        "Forest Temple Boss Room",
        "Forest Temple East Wing",
        "Forest Temple Entrance",
        "Forest Temple Lobby",
        "Forest Temple North Wing",
        "Forest Temple West Wing",
        "Ook"
    ],
    "Goron Mines": [
        "Goron Mines Boss Room",
        "Goron Mines Crystal Switch Room",
        "Goron Mines Entrance",
        "Goron Mines Lower West Wing",
        "Goron Mines Magnet Room",
        "Goron Mines North Wing",
        "Goron Mines Upper East Wing"
    ],
    "Hyrule Castle": [
        "Ganondorf Castle",
        "Hyrule Castle Entrance",
        "Hyrule Castle Graveyard",
        "Hyrule Castle Inside East Wing",
        "Hyrule Castle Inside West Wing",
        "Hyrule Castle Main Hall",
        "Hyrule Castle Outside East Wing",
        "Hyrule Castle Outside West Wing",
        "Hyrule Castle Third Floor Balcony",
        "Hyrule Castle Tower Climb",
        "Hyrule Castle Treasure Room"
    ],
    "Lakebed Temple": [
        "Lakebed Temple Boss Room",
        "Lakebed Temple Central Room",
        "Lakebed Temple East Wing First Floor",
        "Lakebed Temple East Wing Second Floor",
        "Lakebed Temple Entrance",
        "Lakebed Temple West Wing"
    ],
    "Palace of Twilight": [
        "Palace of Twilight Boss Room",
        "Palace of Twilight East Wing",
        "Palace of Twilight Entrance",
        "Palace of Twilight North Tower",
        "Palace of Twilight West Wing"
    ],
    "Snowpeak Ruins": [
        "Snowpeak Ruins Boss Room",
        "Snowpeak Ruins Caged Freezard Room",
        "Snowpeak Ruins Chapel",
        "Snowpeak Ruins Darkhammer Room",
        "Snowpeak Ruins East Courtyard",
        "Snowpeak Ruins Entrance",
        "Snowpeak Ruins Northeast Chilfos Room First Floor",
        "Snowpeak Ruins Northeast Chilfos Room Second Floor",
        "Snowpeak Ruins Second Floor Mini Freezard Room",
        "Snowpeak Ruins West Cannon Room",
        "Snowpeak Ruins West Courtyard",
        "Snowpeak Ruins Wooden Beam Room",
        "Snowpeak Ruins Yeto and Yeta"
    ],
    "Temple of Time": [
        "Temple of Time Armos Antechamber",
        "Temple of Time Boss Room",
        "Temple of Time Central Mechanical Platform",
        "Temple of Time Connecting Corridors",
        "Temple of Time Crumbling Corridor",
        "Temple of Time Darknut Arena",
        "Temple of Time Entrance",
        "Temple of Time Floor Switch Puzzle Room",
        "Temple of Time Moving Wall Hallways",
        "Temple of Time Scales of Time",
        "Temple of Time Upper Spike Trap Corridor"
    ]
}

function getRoomProvince(roomName) {
    return Object.keys(provinceMap).find((provinceName) => {
        return provinceMap[provinceName].includes(roomName)
    })
}

export { getRoomProvince }
