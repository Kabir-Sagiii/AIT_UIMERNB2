function findDay(day) {
  switch (day) {
    case "sun":
      console.log("Today is Sunday");
      break;
    case "mon":
      console.log("Today is Monday");
      break;
    case "tue":
      console.log("Today is Tuesday");
      break;
    case "wed":
      console.log("Today is Wednesday");
      break;
    case "thu":
      console.log("Today is Thursday");
      break;
    case "fri":
      console.log("Today is Friday");
      break;
    case "sat":
      console.log("Today is Saturday");
      break;
    default:
      console.log("Given value does not match with any day");
  }
}

findDay("mon");
