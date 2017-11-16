import database from "./schema";

export function initDatabase() {
  try {
    database.write(() => {
      //Create Table
      database.create("Table", { id: 1, name: "101" });
      database.create("Table", { id: 2, name: "102" });
      database.create("Table", { id: 3, name: "103" });
      database.create("Table", { id: 4, name: "104" });
      database.create("Table", { id: 5, name: "105" });
      database.create("Table", { id: 6, name: "106" });
      database.create("Table", { id: 7, name: "107" });
      //Create Category
      const drink = database.create("Category", {
        id: 1,
        name: "Thuc uong",
        foods: []
      });
      const another = database.create("Category", {
        id: 2,
        name: "Khac",
        foods: []
      });
      //Create Food
      const drink_id1 = database.create("Food", {
        id: 1,
        name: "Cafe Sua",
        price: 14000
      });
      const drink_id2 = database.create("Food", {
        id: 2,
        name: "Cafe Den",
        price: 14000
      });
      const drink_id3 = database.create("Food", {
        id: 3,
        name: "RedBull",
        price: 10000
      });
      const another_id4 = database.create("Food", {
        id: 4,
        name: "Khan Lanh",
        price: 2000
      });
      //Push food to category
      drink.foods.push(drink_id1);
      drink.foods.push(drink_id2);
      drink.foods.push(drink_id3);
      another.foods.push(another_id4);
      //Create OrderDetail
      const orderdetail_1 = database.create("OrderDetail", {
        food: drink_id2,
        amount: 2
      });
      const orderdetail_2 = database.create("OrderDetail", {
        food: drink_id1,
        amount: 1
      });
      const orderdetail_3 = database.create("OrderDetail", {
        food: drink_id3,
        amount: 4
      });
      const orderdetail_4 = database.create("OrderDetail", {
        food: another_id4,
        amount: 5
      });
      //Create Order
      const order1 = database.create("Order", { idTable: 1, orderDetails: [] });
      const order2 = database.create("Order", { idTable: 5, orderDetails: [] });
      const order3 = database.create("Order", { idTable: 7, orderDetails: [] });
      order1.orderDetails.push(orderdetail_1);
      order1.orderDetails.push(orderdetail_2);
      order2.orderDetails.push(orderdetail_3);
      order3.orderDetails.push(orderdetail_4);
    });
  } catch (error) {
    console.log("Error", error);
  }
}

export function isDatabaseEmpty() {
  return database.objects("Table").length === 0 ? true : false;
}

export function deconsteDatabase() {
  try {
    database.write(() => {
      database.deconste(database.objects("Table"));
      database.deconste(database.objects("Food"));
      database.deconste(database.objects("Category"));
      database.deconste(database.objects("Order"));
      database.deconste(database.objects("OrderDetail"));
    });
  } catch (error) {
    console.log(error);
  }
}
