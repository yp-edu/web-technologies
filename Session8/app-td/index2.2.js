const {MongoClient} = require('mongodb');

async function insertMessage(client, dbName){
	const newMessage = {
	author_id: 158,
	date: " XXX ",
	text: "Voilà le texte du commentaire"
	}
	const insertMessage = await client.db(dbName).collection("messages").insertOne(newMessage);
	console.log("[INFO] Message inserted: ", insertMessage);
}

async function main(){
	// URI de connexion. À modifier si on n'est pas en local
	const uri = "mongodb://localhost";
	const client = new MongoClient(uri);
 
	try {
		// Connexion au serveur
		await client.connect();
 
		// ici le code à exécuter...
		await insertMessage(client, "asso");
 
	} catch (e) {
		// si une des promesses n'est pas réalisée
		console.error(e);
	} finally {
		// une fois que tout est terminé, on ferme la connexion
		await client.close();
	}
}
// main est une promesse, donc peut afficher un message en cas d'échec
main().catch(console.error);