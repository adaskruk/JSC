"use strict";

function createExpenseTracker(userOrName, budget) {
  const { log } = console;
  const isObject = (obj) =>
    typeof obj === "object" && !Array.isArray(obj) && obj !== null;
  let name,
    expenses = [];
  if (isObject(userOrName)) {
    name = userOrName.name;
    budget = userOrName.budget;
  } else name = userOrName;
  log(
    `A new expense tracker was created for ${name} with initial budget of ${budget}€.`
  );
  const doc = `This expense tracker has following methods:
 .addExp(amount, category, description): Adds a new expense. Please provide 3 (mandatory) arguments:
    amount: number, category: string, description: string.
 .removeExp(...id): Removes an expenses with provided IDs.
 .updateExp(id, amount, category, description): Updates the expense with provided ID, with provided amount, category and descpription.
    ID argument is mandatory. You can skip other arguments by passing: null or undefined.
 .getSumExp(): Returns the sum of all expenses.
 .getExpByCat(cat): Returns an array of expenses from provided category.
    If no category provided, returns an object with expenses sorted by category (as properties).
 .getHighestExp(): Returns the highest expense.
 .getLowestExp(): Returns the lowest expense.
 .getUserInfo(): Returns user info.
 .getAllExp(): Returns list of expenses.
 .updateUser(userObject or name, budget): Updates user info. Accepts an object with name and or budget properties, or name and or budget arguments.
 .getBudget(): Returns users budget.
 .help(): Prints this info.
`;
  log(doc); // Documentation

  return {
    addExp(description, category, amount) {
      expenses.push({ id: expenses.length + 1, description, category, amount });
      budget -= amount;
      log(
        `A new expense with ID ${expenses.at(-1).id} has been registered.
  Description: ${expenses.at(-1).description}
  Category: ${expenses.at(-1).category}
  Amount: ${expenses.at(-1).amount}`
      );
      if (budget < 0) log("Warning! The budget limit has been exceeded.");
    },
    removeExp(...ids) {
      if (ids.length == 0) log("Please provide at least one ID.");
      ids.forEach((id) => {
        const index = expenses.findIndex((exp) => exp.id == id);
        if (index == -1) {
          log(`No expense with ID ${id} has been found.`);
        } else {
          budget += expenses[index].amount;
          const deleted = expenses.splice(index, 1)[0];
          log("Following expense has been deleted:", deleted);
        }
      });
    },
    updateExp(id, desc, cat, amount) {
      const index = expenses.findIndex((exp) => exp.id == id);
      if (index == -1) {
        log(`No expense with ID ${id} has been found.`);
      } else {
        log(`Updating the expense with ID ${id}:`);
        if (desc != null) {
          log(
            `Updating description: ${expenses[index].description} => ${desc}`
          );
          expenses[index].description = desc;
        } else {
          log("No new description provided -> skipping...");
        }
        if (cat != null) {
          log(`Updating category: ${expenses[index].category} => ${cat}`);
          expenses[index].category = cat;
        } else {
          log("No new category provided -> skipping...");
        }
        if (amount != null) {
          if (typeof amount !== "number") {
            log("Please provide a correct number.");
          } else {
            log(`Updating amount: ${expenses[index].amount} => ${amount}`);
            budget += expenses[index].amount;
            budget -= amount;
            expenses[index].amount = amount;
            if (budget < 0) log("Warning! The budget limit has been exceeded.");
          }
        } else {
          log("No new amount provided -> skipping...");
        }
      }
    },
    getTotalExp() {
      const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);
      log(`${name} spent altogether: €${total}.`);
      return total;
    },
    getExpByCat(cat) {
      if (cat) {
        const expFromCat = expenses.filter((exp) => exp.category == cat);
        if (expFromCat.length == 0) {
          log(`No expenses in category ${cat}`);
        } else {
          log("Expenses from category:", cat);
          console.table(expFromCat);
          return expFromCat;
        }
      } else {
        const grouped = Object.groupBy(expenses, (exp) => exp.category);
        log("Expenses by category:");
        for (let [cat, exps] of Object.entries(grouped)) {
          log(cat);
          console.table(exps);
        }
        return grouped;
      }
    },
    getHighestExp() {
      if (expenses.length > 0) {
        const highest = expenses.reduce((acc, exp) =>
          exp.amount > acc.amount ? exp : acc
        );
        log(highest);
      } else log("No expenses were registered.");
    },
    getLowestExp() {
      if (expenses.length > 0) {
        const lowest = expenses.reduce((acc, exp) =>
          exp.amount < acc.amount ? exp : acc
        );
        log(lowest);
      } else log("No expenses were registered.");
    },
    getUserInfo() {
      log(`Username: ${name}, Budget: ${budget}, \nExpenses:`);
      console.table(expenses);
      return { name, budget, expenses };
    },
    getAllExp() {
      if (expenses.length == 0) {
        log("No expenses were registered.");
      } else {
        log("Expenses:");
        console.table(expenses);
        return expenses;
      }
    },
    updateUser(userN, budgetN) {
      if (isObject(userN)) {
        if (typeof userN.name == "string") {
          name = userN.name;
          log("Name updated to:", name);
        } else log("Name update failed: incorrect name property.");
        if (typeof userN.budget == "number") {
          budget = userN.budget - this.getTotalExp();
          log("Budget updated to:", budget);
        } else log("Budget update failed: incorrect budget property.");
        return;
      }
      if (typeof userN == "string" && userN) {
        name = userN;
        log("Name updated to:", name);
        if (typeof budgetN == "number") {
          budget = budgetN - this.getTotalExp();
          log("Budget updated to:", budget);
        }
      } else {
        if (typeof budgetN == "number") {
          budget = budgetN - this.getTotalExp();
          log("Budget updated to:", budget);
          return;
        }
        log(
          "Incorrect input data. Please enter correct name:string and or budget:number, \nor a user object {name: [string], budget: [number]}."
        );
      }
    },
    getBudget() {
      log("Budget:", budget);
      return budget;
    },
    addMoney(amount) {
      budget += amount;
      console.log(`€${amount} was added to ${name}'s budget.`);
    },
    help() {
      log(doc);
    },
  };
}

const user = { name: "Tim", budget: 5000 };
const newTracker = createExpenseTracker(user);
newTracker.addExp("Microwave", "House", 300);
// newTracker.addExp("Mixer", "House", 100);
// newTracker.addExp("PC Monitor", "Work", 2000);
// newTracker.updateExp(1, "Printer", "Work", 850);
// newTracker.removeExp(1);
// newTracker.getTotalExp();
// newTracker.getExpByCat();
// newTracker.getHighestExp();
// newTracker.getLowestExp();
// newTracker.getUserInfo();
// newTracker.getAllExp();
// newTracker.updateUser("Adam", 50000);
// newTracker.getBudget();
// newTracker.addMoney(123);
// newTracker.help();