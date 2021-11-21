function generateUUID() {
  const CHARS = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f'
  ];
  const SECTIONS = [8, 4, 4, 4, 12];
  
  let uuid = '';
  SECTIONS.forEach((sectionLength, sectionIdx) => {
    for (let idx = 0; idx < sectionLength; idx += 1) {
      let randomNum = Math.floor(Math.random() * CHARS.length);
      let char = CHARS[randomNum];
      uuid += char;
    }
    
    if (sectionIdx < SECTIONS.length - 1) {
      uuid += '-';
    }
    
  });

  return uuid;
}
