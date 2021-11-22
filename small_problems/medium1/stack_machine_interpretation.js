// Stack Machine Interpretation https://launchschool.com/exercises/026e99f0


// // first
// function minilang(command) {
//   let stack = [];
//   let register = 0;
//   let words = command.split(' ');

//   for (let idx = 0; idx < words.length; idx += 1) {
//     if (parseInt(words[idx])) {
//       // stack.push(register);
//       register = parseInt(words[idx]);
//       continue;
//     }

//     switch (words[idx]) {
//       case 'ADD':
//         register += stack.pop();
//         break;
//       case 'DIV':
//         register = parseInt(register / stack.pop());
//         break;
//       case 'MULT':
//         register *= stack.pop();
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'REMAINDER':
//         register = parseInt(register % stack.pop());
//         break;
//       case 'SUB':
//         register -= stack.pop();
//         break;
//       default:
//         console.log(`${words[idx]} is not a recognized command.`);
//     }
//   }
// }

// first
function minilang(program) {
  let stack = [];
  let register = 0;

  program.split(' ').forEach(cmd => {
    switch (cmd) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = parseInt(register / stack.pop());
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'POP':
        if (stack.length === 0) {
          stackEmptyError();
          break;
        }
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'REMAINDER':
        register = parseInt(register % stack.pop());
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      default:
        if (parseInt(cmd)) {
          register = parseInt(cmd);
        } else {
          commandError(cmd);
        }
    }
  });
}

function commandError(cmd) {
  throw `\n\tCommandError: command ${cmd} not found.\n`;
}

function stackEmptyError() {
  throw '\n\tStackEmptyError: attempted to POP from empty stack\n';
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('POP');

// minilang('BADCOMMAND');