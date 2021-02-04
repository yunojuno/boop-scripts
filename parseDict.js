/**
  {
    "api":1,
    "name":"Python to JSON",
    "description":"Converts a Python dict to JSON",
    "author":"YunoJuno",
    "icon":"snake",
  }
**/
function main(state) {
  state.text = JSON.stringify(
    JSON.parse(
      state.text
        .replace(/True/g, "true")
        .replace(/None/g, "null")
        .replace(/'/g, '"')
    ),
    null,
    "\t"
  );
}
