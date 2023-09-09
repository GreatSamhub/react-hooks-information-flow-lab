import React from "react";

function header({ isDarkMode, onDarkModeClick }){

return(
<header>
<h2>Shopster</h2>
<button onClick={onDarkModeClick}>
  {isDarkMode ? "Dark" : "Light"} Mode
</button>
</header>
)
}

export default header