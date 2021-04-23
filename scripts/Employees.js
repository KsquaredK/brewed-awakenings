import { getEmployees, getOrders, getProducts } from "./database.js"

const employees = getEmployees()
const orders = getOrders()
const products = getProducts()

// this function generates an array of employee ids from employees array to find matches to employee ids in products array
document.addEventListener(
        "click",
        (clickEvent) => { // function that runs when item is clicked
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("employee")) {
                const [, employeeId] = itemClicked.id.split("--") // new array named employeeId created using .split method || comma in array brackets means ignore verything before

                /* find new array employeeOrders by iterating and filtering orders where that object's employeeId matches the .id value of the employees array
                I got help on this from Jonathan and Tom, especially the filter - 
                I have a general understanding of it but would have a hard time 
                applying the process in a different context*/
                for (const employee of employees) {
                    if (employee.id === parseInt(employeeId)) { //
                        const employeeOrders = orders.filter(order => order.employeeId === employee.id)
                        window.alert(`${employee.name} sold ${employeeOrders.length} products`)
                    }
                }
            }
        }
    )
    /* From Steve:

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter" 
                     
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${} products `)
                }
            }
        }
    }
)
*/

// exports array of employee names in html to index.html
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


/* From Steve:

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${} products `)
                }
            }
        }
    }
)
*/

/* From MDN: .filter method (how to find # of products an employee sold?): 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
 */

// Array.filter: https://youtu.be/4_iT6EGkQfk with this example const filtered = numbers.filter (n => n>= 0)  which returns all positive integers in an array OR
//https://youtu.be/mJGv12UHqXc const adults = people.filter(person => person.age >=18); console.log(adults) which returns the names and ages of over-18 people in array