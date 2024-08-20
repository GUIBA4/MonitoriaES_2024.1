import { Zoo, Animal } from './zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('should add a new animal', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  test('should remove an animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).not.toContainEqual(animal);
  });

  test('should not remove an animal if the name does not exist', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    zoo.removeAnimal('NonExistent');
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  test('should get an animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    const foundAnimal = zoo.getAnimal('Leo');
    expect(foundAnimal).toEqual(animal);
  });

  test('should get all animals of a specific species', () => {
    const lion = new Animal('Leo', 'Lion', 5);
    const tiger = new Animal('Tiggy', 'Tiger', 3);
    const lioness = new Animal('Nala', 'Lion', 4);
    zoo.addAnimal(lion);
    zoo.addAnimal(tiger);
    zoo.addAnimal(lioness);
    const lions = zoo.getAnimalsBySpecies('Lion');
    expect(lions).toEqual([lion, lioness]);
  });

  test('should calculate the average age of all animals', () => {
    const lion = new Animal('Leo', 'Lion', 5);
    const tiger = new Animal('Tiggy', 'Tiger', 3);
    zoo.addAnimal(lion);
    zoo.addAnimal(tiger);
    const averageAge = zoo.getAverageAge();
    expect(averageAge).toBe(4);
  });

  test('should handle adding multiple animals with the same name but different species', () => {
    const lion = new Animal('Leo', 'Lion', 5);
    const tiger = new Animal('Leo', 'Tiger', 4);
    zoo.addAnimal(lion);
    zoo.addAnimal(tiger);
    expect(zoo.getAllAnimals()).toEqual([lion, tiger]);
  });

  test('should handle removing one of multiple animals with the same name', () => {
    const lion = new Animal('Leo', 'Lion', 5);
    const tiger = new Animal('Leo', 'Tiger', 4);
    zoo.addAnimal(lion);
    zoo.addAnimal(tiger);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).toHaveLength(1);
    expect(zoo.getAllAnimals()).toContainEqual(tiger);
  });
});
