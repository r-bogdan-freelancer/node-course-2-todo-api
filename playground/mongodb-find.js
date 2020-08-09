const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";
const client = new MongoClient(url, {
  useNewUrlParser: true,
});
const objId = new ObjectID();

client.connect((err, client) => {
  if (err) {
    return console.log("Unable to connect Mongo DB", err);
  }

  const db = client.db("TodoApp");

  db.collection("Users")
    .find({ age: 32 })
    .toArray()
    .then(
      (docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );
});
