const {MongoClient} = require('mongodb');

async function fillDB(client, dbName){
		// Insérer ici votre code
}

async function main(){
	// URI de connexion. À modifier si on n'est pas en local
	const uri = "mongodb://localhost";
	const client = new MongoClient(uri);
 
	try {
		// Connexion au serveur
		await client.connect();
 
		// ici le code à exécuter...
		await fillDB(client, "asso");
 
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