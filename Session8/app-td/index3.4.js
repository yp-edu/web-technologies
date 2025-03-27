const {MongoClient} = require('mongodb');

async function performQuery(client, dbName) {
	const cursorListMessages = await client.db(dbName).collection("messages").find({
		"author_id": {$in: [158,198]}
	})
	const arrayListMessages = await cursorListMessages.toArray();
	console.log("[INFO] Messages: ", arrayListMessages);
}

async function main(){
	// URI de connexion. À modifier si on n'est pas en local
	const uri = "mongodb://localhost";
	const client = new MongoClient(uri);
 
	try {
		// Connexion au serveur
		await client.connect();
 
		// ici le code à exécuter...
		await performQuery(client, "asso");
 
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