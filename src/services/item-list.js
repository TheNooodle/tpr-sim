const itemList = [
    "Recovery_Heart",
    "Green_Rupee",
    "Blue_Rupee",
    "Yellow_Rupee",
    "Red_Rupee",
    "Purple_Rupee",
    "Orange_Rupee",
    "Silver_Rupee",
    "Bombs_5",
    "Bombs_10",
    "Bombs_20",
    "Bombs_30",
    "Arrows_10",
    "Arrows_20",
    "Arrows_30",
    "Arrows_1",
    "Seeds_50",
    "Foolish_Item",
    "Foolish_Item_2",
    "Foolish_Item_3",
    "Water_Bombs_5",
    "Water_Bombs_10",
    "Water_Bombs_15",
    "Water_Bombs_3",
    "Bomblings_5",
    "Bomblings_10",
    "Bomblings_3",
    "Bombling_1",
    "Fairy",
    "Recovery_Heart_x3",
    "Small_Key",
    "Piece_of_Heart",
    "Heart_Container",
    "Dungeon_Map",
    "Compass",
    "Ooccoo_FT",
    "Big_Key",
    "Ooccoo_Jr",
    "Ordon_Sword",
    "Master_Sword",
    "Ordon_Shield",
    "Wooden_Shield",
    "Hylian_Shield",
    "Ooccoos_Note",
    "Ordon_Clothing",
    "Heros_Clothes",
    "Magic_Armor",
    "Zora_Armor",
    "Shadow_Crystal",
    "Ooccoo_Dungeon",
    "Small_Wallet",
    "Progressive_Wallet",
    "Giant_Wallet",
    "Coral_Earring",
    "Hawkeye",
    "Progressive_Sword",
    "Boomerang",
    "Spinner",
    "Ball_and_Chain",
    "Progressive_Bow",
    "Progressive_Clawshot",
    "Iron_Boots",
    "Progressive_Dominion_Rod",
    "Double_Clawshot",
    "Lantern",
    "Master_Sword_Light",
    "Progressive_Fishing_Rod",
    "Slingshot",
    "Dominion_Rod_Uncharged",
    "Giant_Bomb_Bag",
    "Barnes_Bomb_Bag",
    "Filled_Bomb_Bag",
    "Small_Quiver",
    "Big_Quiver",
    "Giant_Quiver",
    "Fishing_Rod_Lure",
    "Bow_Bombs",
    "Bow_Hawkeye",
    "Fishing_Rod_Bee_Larva",
    "Fishing_Rod_Coral_Earring",
    "Fishing_Rod_Worm",
    "Fishing_Rod_Earring_Bee_Larva",
    "Fishing_Rod_Earring_Worm",
    "Empty_Bottle",
    "Red_Potion_Shop",
    "Green_Potion",
    "Blue_Potion",
    "Milk",
    "Sera_Bottle",
    "Lantern_Oil_Shop",
    "Water",
    "Lantern_Oil_Scooped",
    "Red_Potion_Scooped",
    "Nasty_soup",
    "Hot_spring_water_Scooped",
    "Fairy_Bottle",
    "Hot_Spring_Water_Shop",
    "Lantern_Refill_Scooped",
    "Lantern_Refill_Shop",
    "Bomb_Bag_Regular_Bombs",
    "Bomb_Bag_Water_Bombs",
    "Bomb_Bag_Bomblings",
    "Fairy_Tears",
    "Worm",
    "Jovani_Bottle",
    "Bee_Larva_Scooped",
    "Rare_Chu_Jelly",
    "Red_Chu_Jelly",
    "Blue_Chu_Jelly",
    "Green_Chu_Jelly",
    "Yellow_Chu_Jelly",
    "Purple_Chu_Jelly",
    "Simple_Soup",
    "Good_Soup",
    "Superb_Soup",
    "Renados_Letter",
    "Invoice",
    "Wooden_Statue",
    "Ilias_Charm",
    "Horse_Call",
    "Forest_Temple_Small_Key",
    "Goron_Mines_Small_Key",
    "Lakebed_Temple_Small_Key",
    "Arbiters_Grounds_Small_Key",
    "Snowpeak_Ruins_Small_Key",
    "Temple_of_Time_Small_Key",
    "City_in_The_Sky_Small_Key",
    "Palace_of_Twilight_Small_Key",
    "Hyrule_Castle_Small_Key",
    "Gerudo_Desert_Bulblin_Camp_Key",
    "Aurus_Memo",
    "Asheis_Sketch",
    "Forest_Temple_Big_Key",
    "Lakebed_Temple_Big_Key",
    "Arbiters_Grounds_Big_Key",
    "Temple_of_Time_Big_Key",
    "City_in_The_Sky_Big_Key",
    "Palace_of_Twilight_Big_Key",
    "Hyrule_Castle_Big_Key",
    "Forest_Temple_Compass",
    "Goron_Mines_Compass",
    "Lakebed_Temple_Compass",
    "Lantern_Yellow_Chu_Chu",
    "Coro_Bottle",
    "Bee_Larva_Shop",
    "Black_Chu_Jelly",
    "Tear_Of_Light",
    "Vessel_Of_Light_Faron",
    "Vessel_Of_Light_Eldin",
    "Vessel_Of_Light_Lanayru",
    "Vessel_Of_Light_Full",
    "Progressive_Mirror_Shard",
    "Mirror_Piece_3",
    "Mirror_Piece_4",
    "Arbiters_Grounds_Compass",
    "Snowpeak_Ruins_Compass",
    "Temple_of_Time_Compass",
    "City_in_The_Sky_Compass",
    "Palace_of_Twilight_Compass",
    "Hyrule_Castle_Compass",
    "Ilias_Scent",
    "Poe_Scent",
    "Reekfish_Scent",
    "Youths_Scent",
    "Medicine_Scent",
    "Forest_Temple_Dungeon_Map",
    "Goron_Mines_Dungeon_Map",
    "Lakebed_Temple_Dungeon_Map",
    "Arbiters_Grounds_Dungeon_Map",
    "Snowpeak_Ruins_Dungeon_Map",
    "Temple_of_Time_Dungeon_Map",
    "City_in_The_Sky_Dungeon_Map",
    "Palace_of_Twilight_Dungeon_Map",
    "Hyrule_Castle_Dungeon_Map",
    "Male_Beetle",
    "Female_Beetle",
    "Male_Butterfly",
    "Female_Butterfly",
    "Male_Stag_Beetle",
    "Female_Stag_Beetle",
    "Male_Grasshopper",
    "Female_Grasshopper",
    "Male_Phasmid",
    "Female_Phasmid",
    "Male_Pill_Bug",
    "Female_Pill_Bug",
    "Male_Mantis",
    "Female_Mantis",
    "Male_Ladybug",
    "Female_Ladybug",
    "Male_Snail",
    "Female_Snail",
    "Male_Dragonfly",
    "Female_Dragonfly",
    "Male_Ant",
    "Female_Ant",
    "Male_Dayfly",
    "Female_Dayfly",
    "Progressive_Fused_Shadow",
    "Fused_Shadow_2",
    "Fused_Shadow_3",
    "Ancient_Sky_Book_First_Character",
    "Ancient_Sky_Book_Second_Character",
    "Ancient_Sky_Book_Third_Character",
    "Ancient_Sky_Book_Fourth_Character",
    "Ancient_Sky_Book_Fifth_Character",
    "Poe_Soul",
    "Progressive_Hidden_Skill",
    "Shield_Attack",
    "Back_Slice",
    "Helm_Splitter",
    "Mortal_Draw",
    "Jump_Strike",
    "Great_Spin",
    "Progressive_Sky_Book",
    "Ancient_Sky_Book_Partly_Filled",
    "Ancient_Sky_Book_Completed",
    "Ooccoo_CitS",
    "Purple_Rupee_Links_House",
    "North_Faron_Woods_Gate_Key",
    "Gate_Keys",
    "Snowpeak_Ruins_Ordon_Pumpkin",
    "Snowpeak_Ruins_Ordon_Goat_Cheese",
    "Snowpeak_Ruins_Bedroom_Key",
    "Got_Lantern_Back",
    "Goron_Mines_Key_Shard",
    "Goron_Mines_Key_Shard_Second",
    "Goron_Mines_Key_Shard_3",
    "Goron_Mines_Big_Key",
    "Coro_Key",
    "Gives_Vanilla",
]

export default itemList
