class User {
  constructor(name) {
    this.name = name;
  }

  userTarget() {
    this.target = target;
    this.allTargets = [];
  }

  confirm() {
      return `Welcome ${this.name}--let's exercise your voice!`;
  }
}

class Menu {
  constructor() {
    this.viewTarget = [];
    this.selectedTarget = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.addUser();
          break;
        case '2':
          this.addProgram();
          break;
        case '3':
          this.modifyProgram();
          break;
        case '4':
          this.viewUsers();
          break;
        case '5':
          this.deleteProgram();
          break;
        case '6':
          this.deleteUser();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert('Regular practice pays off!');
  }

  showMainMenuOptions() {
    return prompt(`
    What would you like to do?
      0) Exit
      1) Add yourself as a user
      2) Choose your therapy targets
      3) View your program
      4) View users
      5) Delete your program
      6) Delete user
    `);
  }

  showUserTherapyTargets(targetInfo) {
    return prompt(`
    Choose your therapy target(s).
      0) Go back
      1) Add loudness exercises [ToDo]
      2) Add duration exercises [ToDo]
      3) Add pitch exercises [ToDo]
    `);
  }

  addUser() {
    let name = prompt('Enter your first name as a new user:');
    // ToDo: code for entry of accurate date
    // let registrationDate = prompt('Enter today\'s date in this format: MM/DD.')
    this.viewTarget.push(new User(name));
  }

  addProgram() {
    let selection = this.showUserTherapyTargets();
      switch (selection) {
        case '1':
          this.addLoudness();
          break;
        case '2':
          this.addDuration();
          break;
        case '3':
          this.addPitch();
          break;
      }
  }

  addLoudness() {
    alert ('Loudness Exercises [ToDo]');
    this.allTargets.push(new User(target));
  }

  addDuration() {
    alert ('Duration Exercises [ToDo]');
    this.allTargets.push(new User(target));
  }

  addPitch() {
    alert ('Pitch Exercise [ToDo]');
    this.allTargets.push(new User(target));
  }

  displayTargets() {
    let userString = '';
    for (let i = 0; i < this.allTargets.length; i++) {
      userString += i + ') ' + this.allTargets[i].target + '\n';
    }
    alert(userString);
  }

  viewUsers() {
    let userString = '';
    for (let i = 0; i < this.viewTarget.length; i++) {
      userString += i + ') ' + this.viewTarget[i].name + '\n';
    }
    alert(userString);
  }

  deleteProgram() {
    let index = prompt('Enter the index of the voice target to delete:');
        if (index > -1 && index < this.allTargets.length) {
          this.allTargets.splice(index, 1);
    }
  }

  deleteUser() {
    let index = prompt('Enter the index of the user you wish to delete:');
    if (index > -1 && index < this.viewTarget.length) {
      this.viewTarget.splice(index, 1);
    }
  }
}

let myMenu = new Menu();
myMenu.start();