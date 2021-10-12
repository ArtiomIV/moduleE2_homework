let x = prompt('Insert a value: ');

switch (typeof(x)) {
  case "number":
    console.log("type of x number")
    break;
  case "boolean":
    console.log("type of x boolean")
    break;
  case "string":
    console.log("type of x string")
    break;
  default:
    console.log("type of x undefined")
}
