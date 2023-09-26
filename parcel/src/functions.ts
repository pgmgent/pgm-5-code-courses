export const functions = {
    runDemos: () => {
        const multiply = (a: number, b: number = 1) => {
            return a * b;
        }

        const groceryList = (importantGrocery: string, ...notImportantGroceries: string[]) => {
            console.log(notImportantGroceries)
        }

        const createClass = (teacher: string, ...students: string[]) => {
            
        }

        console.log(multiply(5))

        console.log(groceryList("WC-papier","Courgette", "Mozarella", "Aubergine"))
    }
}