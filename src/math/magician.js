import Character from './add';

export default class Magician extends Character {
  constructor(name, attack) {
    super('Magician', attack);
    this.name = name;
  }
}