import { generateRandomNumber } from '../shared/utils/generateRandomNumber.js';

import { PLAYER_NAMES_ENUM } from '../shared/enums/playerNamesEnum.js';
import { AVATARS_ENUM } from '../shared/enums/avatarsEnum.js';

class Player {
  id;
  name;
  avatar;

  constructor() {
    this.id = generateRandomNumber(1, 10000);
    this.name = this.randomName();
    this.avatar = this.randomAvatar();

    console.log('Player - id:', this.id);
  }

  randomName() {
    const randomNumber = generateRandomNumber(1, 10);

    const name = PLAYER_NAMES_ENUM[randomNumber];

    console.log(`Player - name: ${name} - ${randomNumber}`);

    return name;
  }

  randomAvatar() {
    const randomNumber = generateRandomNumber(1, 5);

    const avatar = AVATARS_ENUM[randomNumber];

    console.log(`Player - avatar file: ${avatar} - ${randomNumber}`);

    return avatar;
  }
}

export { Player };