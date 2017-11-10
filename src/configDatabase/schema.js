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
class Bill {}
Bill.schema = {
  name: "Bill",
  properties: {
    idTable: "int",
    food: "Food",
    amount: "int"
  }
};

let storeDatabase = new Realm({
  schema: [Table]
});
export default storeDatabase;
