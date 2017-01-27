import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', rating: 1, description: 'Super polite, not rude, no joker. Lacks super strength and easily offended.'},
      {id: 12, name: 'Narco', rating: 3, description: 'Skateboarding among the stars he finds new meals for the planet devouring GalactDust. Also know as Narco Polo.'},
      {id: 13, name: 'Bombasto', rating: 5, description: 'Ultra powerful sonic blasts resonate from his fingertips. Arch enemy of the Funtastic Foursome.'},
      {id: 14, name: 'Celeritas', rating: 3, description: 'This veggie man has total control over plant life. Organic fertilizer only, please!'},
      {id: 15, name: 'Magneta', rating: 4, description: 'With magnetic powers of concentration, he controls all things steel.'},
      {id: 16, name: 'RubberMan', rating: 2, description: 'Elongates his body faster than a shape shifter. Also known as Stretch!'},
      {id: 17, name: 'Dynama', rating: 4, description: 'Super powerful and electrically charged, he hurls lightning bolts at his enemies.'},
      {id: 18, name: 'Dr IQ', rating: 2, description: 'Super smart with an oversized bald head. Straight out of the 1950s DC universe.'},
      {id: 19, name: 'Magma', rating: 4, description: 'A lava based shape shifter. Once cooled he turns to sand.'},
      {id: 20, name: 'Tornado', rating: 5, description: 'Roaring through life like a hurricane, this villain can sure stir up a mess.'}
    ];
    return {heroes};
  }
}