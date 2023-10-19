<!DOCTYPE html>
<html> 
<head>
<meta charset="utf-8" /> 
<title>React Samples</title>	
</head> 
<body>
// Target container 
<div id="root"></div>
//< React library & ReactDOM (Development Version)
      <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script> 
<script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
<script>
// Pure React and JavaScript code
function IngredientsList()  { 
return React.createElement(
"ul",
{  className: "ingredients" },
React.createElement("li",  null,  "1 cup unsalted butter"),

React.createElement("li", null, "1 cup crunchy peanut butter"),
React.createElement("li",  null,  "1 cup brown sugar"),
React.createElement("li",  null,  "1 cup white sugar"),
React.createElement("li",  null,  "2 eggs"),
React.createElement("li",  null,  "2.5 cups all purpose flour"),
React.createElement("li",  null,  "1 teaspoon baking powder"),
React.createElement("li",  null,  "0.5 teaspoon salt")
); 
}
ReactDOM.render(
React.createElement(IngredientsList,  null,  null), 
document.getElementById("root")
);
</script> 
</body>
</html>
