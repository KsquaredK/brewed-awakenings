//import export function from each of these modules which provide dynamic html content  
import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

// ***** ?? look up document.querySelector guessing this ties the js to the index.html, specifically the section classed "container"
const mainContainer = document.querySelector("#container")

// variable holds value of a string of html with interpolated arrays for page content
const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`
    // *** ?? don't understand innerHTML, or assigning mainContainer.innerHTML to applicationHTML
mainContainer.innerHTML = applicationHTML