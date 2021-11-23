// Tri-Angles https://launchschool.com/exercises/4a3e10a1

// function triangle(angle1, angle2, angle3) {
//   const RIGHT_ANGLE = 90;
//   if (!isTriangleValid(angle1, angle2, angle3)) return 'invalid';
  
//   if (angle1 === RIGHT_ANGLE || angle2 === RIGHT_ANGLE || angle3 === RIGHT_ANGLE) return 'right';

//   if (angle1 < RIGHT_ANGLE && angle2 < RIGHT_ANGLE && angle3 < RIGHT_ANGLE) return 'acute';

//   return 'obtuse';
// }

function triangle(angle1, angle2, angle3) {
  const RIGHT_ANGLE = 90;
  if (!isTriangleValid(angle1, angle2, angle3)) {
    return 'invalid';
  } else if (angle1 === RIGHT_ANGLE || angle2 === RIGHT_ANGLE || angle3 === RIGHT_ANGLE) {
    return 'right';
  } else if (angle1 < RIGHT_ANGLE && angle2 < RIGHT_ANGLE && angle3 < RIGHT_ANGLE) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function isTriangleValid(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 !== 180) {
    return false;
  } else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return false;
  } else {
    return true;
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"