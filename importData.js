// importData.js

const admin = require("firebase-admin");
const serviceAccount = require("./kenstone-27096-firebase-adminsdk-708vp-cd5bdfbb49.json"); // Replace with your service account key

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kenstone-27096.firebaseio.com", // Replace with your Firestore database URL
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();
const data = require("./data.json");

const importData = async () => {
  try {
    // Function to check if a document exists
    const documentExists = async (collection, id) => {
      const doc = await db.collection(collection).doc(id).get();
      return doc.exists;
    };

    const batch = db.batch();

    // Import clients
    for (const client of data.clients) {
      const exists = await documentExists("clients", client.id);
      if (!exists) {
        const docRef = db.collection("clients").doc(client.id);
        batch.set(docRef, client);
      } else {
        console.log(
          `Client with ID ${client.id} already exists. Skipping import.`
        );
      }
    }

    // Import users
    for (const user of data.users) {
      const exists = await documentExists("users", user.id);
      if (!exists) {
        const docRef = db.collection("users").doc(user.id);
        batch.set(docRef, user);
      } else {
        console.log(`User with ID ${user.id} already exists. Skipping import.`);
      }
    }

    await batch.commit();
    console.log("Data imported successfully!");
  } catch (error) {
    console.error("Error importing data: ", error);
  } finally {
    admin.app().delete(); // Clean up Firebase Admin instance
  }
};

importData();
