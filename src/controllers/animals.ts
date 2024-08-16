import Chance from "chance";

// Make some animals
const chance = new Chance();

// JS doesn't have range by default, so...
const animals = [...Array(999).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

export const getAnimals = (req, res) => {
  const q = req.query.q?.toLowerCase().trim() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.send(results);
};
