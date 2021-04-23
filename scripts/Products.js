import { getProducts } from "./database.js"

// event listener creates popup of price when product is clicked
// ***** look up "document.addEventListener"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            // look up .split and ("--")
            const [, productId] = itemClicked.id.split("--")

            //  for..of loop to iterate through product names by id
            for (const product of products) {
                // if product id is same as the productId defined above in the click event, show alert
                if (product.id === parseInt(productId)) {
                    window.alert(`Price for ${product.name}: ${product.price}`)
                }
            }
        }
    }
)

// creates copy of products array in its current state for use in this module
const products = getProducts()

// exports list of products formatted in html as interpolated strings

export const Products = () => {
    // assigns string for an unordered list tag to variable named html
    let html = "<ul>"

    // for..of loop that iterates through product array
    for (const product of products) {
        // ***** I don't understand the id portion of this statement
        html += `<li id="product--${product.id}">${product.name}</li>`
    }
    // closes html ul tag. += (not =) so as not to overwrite the list evaluated in the for..of loop
    html += "</ul>"
        // returns evaluation of running for..of loop
    return html
}