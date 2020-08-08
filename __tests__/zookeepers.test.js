const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "jhgdja3ng2" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            "id": "1",
            "name": "Djinn",
            "age": 3121,
            "favoriteAnimal": "penguin"
        },
        {
            "id": "1",
            "name": "Rakshasa",
            "age": 9131,
            "favoriteAnimal": "tiger"
        },
    ];

    const updatedZookeepers = filterByQuery({ age: "3121" }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            "id": "1",
            "name": "Djinn",
            "age": 3121,
            "favoriteAnimal": "penguin"
        },
        {
            "id": "2",
            "name": "Rakshasa",
            "age": 9131,
            "favoriteAnimal": "tiger"
        },
    ];

    const result = findById("2", startingZookeepers);

    expect(result.name).toBe("Rakshasa");
});

test("validates personality traits", () => {
    const zookeeper = {
        "id": "2",
        "name": "Isabella",
        "age": 67,
        "favoriteAnimal": "bear"
    };

    const invalidZookeeper = {
        "id": "2",
        "name": "Isabella",
        "favoriteAnimal": "bear"
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});