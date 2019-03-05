function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0
  this.fitness = 10
  this.children = []

  Pet.prototype.growUp = function() {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  }
  Pet.prototype.walk = function() {
    if (this.isAlive() === false) { return 'Your pet is no longer alive :('}
      this.fitness <= 6 ? this.fitness += 4 : this.fitness = 10;  
  }
  Pet.prototype.feed = function() {
    if (this.isAlive() === false) { return 'Your pet is no longer alive :('}
      this.hunger > 2 ? this.hunger -=3 : this.hunger = 0;
  }
  Pet.prototype.checkUp = function() {
    if (this.isAlive() === false) { return 'Your pet is no longer alive :('}

      if (this.hunger > 4 && this.fitness < 4) {
        return 'I am hungry AND I need a walk';
      }
      else if (this.fitness < 4) {
        return "I need a walk";
      }
      else if (this.hunger > 4) {
          return "i am hungry";
      }
      else {
          return "I feel great";
      }
  }
  Pet.prototype.isAlive = function() {
    if (this.fitness === 0 || this.hunger > 9 || this.age > 29) {
      return false;
    }
    else {
      return true;
    }
  }
  Pet.prototype.haveBaby = function(name) {
    name = new Pet(name);
    this.children.push(name)
  }
  Pet.prototype.adoptChild = function(name) {
    this.children.push(name)
  }
}
  module.exports = Pet;