// Name Swapping https://launchschool.com/exercises/815cc58f

function swapName(name) {
  let nameArray = name.split(' ');
  let swappedName = nameArray.pop() + ',';
  
  nameArray.forEach(name => {
    swappedName += ' ' + name;
  })

  return swappedName;
}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
