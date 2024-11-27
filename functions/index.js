const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize the Firebase Admin SDK
admin.initializeApp();

// Firestore reference
const firestore = admin.firestore();

// Example function to interact with Firestore
exports.addDataToFirestore = functions.https.onRequest(async (req, res) => {
//   try {
//     // Example: Add a document to the "users" collection
//     await db.collection("users").add({
//       name: "John Doe",
//       email: "johndoe@example.com",
//       createdAt: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     res.status(200).send("Data added successfully to Firestore.");
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     res.status(500).send("Error adding document.");
//   }


const result = await firestore.collection('users').add({name:'jesse'})

response.send(result);
});
