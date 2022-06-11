function scuberGreetingForFeet(ride){
  if (ride <= 400) { 
  return "This one is on me!"
} else if (ride > 2500) {
  return 'No can do.';
} else {
  return 'I will gladly take your thirty bucks.'
}}

function ternaryCheckCity(city){
if (city === 'NYC') {
  return 'Ok, sounds good.';
} else return 'No go.';
}
/*
function switchOnCharmFromTip(tipValue){
switch (tipValue) {
  case (100):
    console.log('Thank you so much.');
    break;
    case (50):
      console.log('Thank you.');
      break;
      case (0):
      console.log('Bye.');
}
}
*/
function switchOnCharmFromTip(tip) {

  if (tip === "generous") {
      return "Thank you so much.";
  } else if (tip === "not as generous") {
      return "Thank you.";
  } else {
      return "Bye.";
  }
}