const {MongoClient} = require('mongodb');

async function performQuery(client, dbName) {
	async function getMessageID(idAuthor, text) {
		const query = {author_id : idAuthor, text: text};
		const options = {projection: {text: 1}}
		const cursorListMessages = await client.db(dbName).collection("messages").find(query,options);
		const arrayListMessages = await cursorListMessages.toArray();
		return (arrayListMessages[0]._id)
	}
	const IDres = await getMessageID(158, "Voilà le texte du commentaire");
	const message = await client.db(dbName).collection("messages").findOne( {_id: IDres} );
	console.log("[INFO] Message: ", message);
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