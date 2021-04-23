//imports functions that export arrays in db module
import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
        // variable is assigned before for..loop so it's available outside the loop's scope
        let orderProduct = null
            // for..of loop to find in the products array each product whose id matches the productId in the orders array
        for (const product of allProducts) {
            if (product.id === order.productId) {
                // assigns every product with matching ids to the variable orderProduct
                orderProduct = product
            }
        }
        // returns evaluation
        return orderProduct
    }
    // Very similar to last function
    // Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null
        // Madeline suggested a continue statement as a way to work around an incorrect employee id in the orders db.
    for (const employee of allEmployees) {
        //if (employee.id === null) {
        // jumps over item in array that evaluates null and continues iteration
        //continue;
        //} else 
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

//export function rendering evaluations into html
export const Orders = () => {
    // the variable html will be a string
    let html = ""
        //that string is an unordered list
    html = "<ul>"

    // **** for..of loop iterates through employee and product arrays
    for (const order of orders) {
        // assigns variable of employee to function call findEmployee with parameters of order (an object) and employees (an array)
        //Second attempt at workaround for incorrect emploeeId in orders array - this does not solve for future erros. I thought of using the <= on my own, but looked at Jonathan's code to understand where to place it.
        if (order.employeeId <= 10) {
            const employee = findEmployee(order, employees)
            const product = findProduct(order, products)
                //**Error on line 54: cannot read property "name" of null **  / the variable stores the evaluations of the two functions and outputs it as html content with string interpolation 
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        }
    }
    // appends closing ul tag to evaluation of for..of loop
    html += "</ul>"
        // evaluation output as html content
    return html
}