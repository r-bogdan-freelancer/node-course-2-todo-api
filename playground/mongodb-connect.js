const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

const client = new MongoClient(url, {
  useNewUrlParser: true,
});
const objId = new ObjectID();

client.connect((err, client) => {
  if (err) {
    return console.log("Unable to connect MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  db.collection("Todos").insertOne(
    {
      text: "Something to do",
      completed: false,
      _id: objId,
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  //Insert new doc into Users(name, age, loction)
  db.collection("Users").insertOne(
    {
      name: "Andrew",
      age: 25,
      location: "Philadelphia",
      _id: objId,
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }
      console.log(result.ops);
    }
  );

  client.close();
});
