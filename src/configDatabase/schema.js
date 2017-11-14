import Realm from "realm";
class Table {}
Table.schema = {
  name: "Table",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string"
  }
};

class Food {}
Food.schema = {
  name: "Food",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    price: "float"
  }
};
class Category {}
Category.schema = {
  name: "Category",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    foods: "Food[]"
  }
};
class Order {}
Order.schema = {
  name: "Order",
  properties: {
    idTable: "int",
    orderDetails: "OrderDetail[]"
  }
};
class OrderDetail {}
OrderDetail.schema = {
  name: "OrderDetail",
  properties: {
    id: "int",
    food: "Food",
    amount: "int"
  }
};
class Bill {}
Bill.schema = {
  name: "Bill",
  properties: {
    id: "int",
    order: "Order",
    date: "date"
  }
};
let storeDatabase = new Realm({
  schema: [Table, Food, Category, Order, OrderDetail, Bill]
});
export default storeDatabase;
