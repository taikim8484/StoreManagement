import database from "./schema";

export function initDatabase() {
  try {
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
      let orderdetail_1 = database.create("OrderDetail", {
        id: 1,
        food: drink_id2,
        amount: 2
      });
      let orderdetail_2 = database.create("OrderDetail", {
        id: 2,
        food: drink_id1,
        amount: 1
      });
      let orderdetail_3 = database.create("OrderDetail", {
        id: 3,
        food: drink_id3,
        amount: 4
      });
      let orderdetail_4 = database.create("OrderDetail", {
        id: 4,
        food: another_id4,
        amount: 5
      });
      //Create Order
      let order1 = database.create("Order", { idTable: 1, orderDetails: [] });
      let order2 = database.create("Order", { idTable: 2, orderDetails: [] });
      let order3 = database.create("Order", { idTable: 3, orderDetails: [] });
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

export function deleteDatabase() {
  try {
    database.write(() => {
      database.delete(database.objects("Table"));
      database.delete(database.objects("Food"));
      database.delete(database.objects("Category"));
      database.delete(database.objects("Order"));
      database.delete(database.objects("OrderDetail"));
    });
  } catch (error) {
    console.log(error);
  }
}
