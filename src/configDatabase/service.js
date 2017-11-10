import database from "./schema";

export function initDatabase() {
  database.write(() => {
    //Create Table
    database.create("Table", { id: 1, name: "101" });
    database.create("Table", { id: 2, name: "102" });
    database.create("Table", { id: 3, name: "103" });
    //Create Category
    let drink = database.create("Category", {
      id: 1,
      name: "Thuc uong",
      foods: []
    });
    let another = database.create("Category", {
      id: 1,
      name: "Khac",
      foods: []
    });
    //Create Food
    drink.foods.push({ id: 1, name: "Cafe Sua", price: 14000 });
    drink.foods.push({ id: 2, name: "Cafe Den", price: 14000 });
    drink.foods.push({ id: 3, name: "RedBull", price: 10000 });
    another.foods.push({ id: 4, name: "Khan lanh", price: 2000 });
    drink.foods.push({ id: 5, name: "Pepsi", price: 8000 });
    drink.foods.push({ id: 6, name: "Cafe Sua", price: 14000 });
    //Create Bill
  });
}
