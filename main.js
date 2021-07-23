class User {
  constructor(name) {
    this.name = name;
    this.newUsers = [];
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

    alert('Daily practice will improve your voice!');
  }

  showMainMenuOptions() {
    // ToDo: add user menu
    return prompt(`
    Admin menu:
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
      -----------
      ${userInfo}
    `);
  }

  createUser() {
    let name = prompt('Enter name for new user:');
    // ToDo: code for entry of accurate date
    // let registrationDate = prompt('Enter today\'s date in this format: MM/DD.')
    this.users.push(new User(name));
  }

// this code displays the individual user
  viewUser() {
    let index = prompt('Enter the index of the user you wish to view:');
    if (index > -1 && index < this.users.length) {
      this.selectedUser = this.users[index];
      let description = 'User Name: ' + this.selectedUser.name + '\n';
      for (let i = 0; i < this.selectedUser.newUsers.length; i++) {
        description += i + ') ' + this.selectedUser.newUsers[i].name + '\n';
      }
      let selection = this.showUserMenuOptions(description);
    }
  }

  deleteUser() {
    let index = prompt('Enter the index of the user you wish to delete:');
    if (index > -1 && index < this.users.length) {
      this.users.splice(index, 1);
    }
  }

// this code shows all the users
  // ToDo: HIPAA, need separate admin and user
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