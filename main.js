class Player {
  constructor(name) {
    this.name = name;
    // this.position = position;
  }

  describe() {
    return `Welcome ${this.name}`;
  }
}

class User {
  constructor(name) {
    this.name = name;
    // array to hold added teams
    this.players = [];
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
    }
  }

  describe() {
    return `${this.name} has players.`;
  }
}

class Menu {
  constructor() {
    this.users = [];
    this.selectedUser = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createUser();
          break;
        case '2':
          this.viewUser();
          break;
        case '3':
          this.deleteUser();
          break;
        case '4':
          this.displayUsers();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('SeeYouse!');
  }

  showMainMenuOptions() {
    return prompt(`
      0) exit
      1) create new user
      2) view user
      3) delete user
      4) display all users
    `);
  }

  showUserMenuOptions(userInfo) {
    return prompt(`
      0) go back
      --------------------------
      ${userInfo}
    `);
  }

  createUser() {
    let name = prompt('Enter name for new user:');
    let registrationDate = prompt('Enter today\'s date in this format: MM/DD.')
    this.users.push(new User(name));
  }

// this code displays the individual user
  viewUser() {
    let index = prompt('Enter the index of the user you wish to view:');
    if (index > -1 && index < this.users.length) {
      this.selectedUser = this.users[index];
      let description = 'User Name: ' + this.selectedUser.name + '\n';
      for (let i = 0; i < this.selectedUser.players.length; i++) {
        description += i + ') ' + this.selectedUser.players[i].name
          + ' - ' + this.selectedUser.players[i].position + '\n';
      }
      let selection = this.showUserMenuOptions(description);
      switch (selection) {
        case '1':
          this.createAnotherUser();
          break;
        case '2':
          this.deletePlayer();
      }
    }
  }

  deleteUser() {
    let index = prompt('Enter the index of the user you wish to delete:');
    if (index > -1 && index < this.users.length) {
      this.users. splice(index, 1);
    }
  }

// this code shows all the users
  displayUsers() {
    let userString = '';
    for (let i = 0; i < this.users.length; i++) {
      userString += i + ') ' + this.users[i].name + '\n';
    }
    alert(userString);
  }
}

let menu = new Menu();
menu.start();