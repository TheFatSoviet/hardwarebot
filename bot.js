const  Discord  =  require ( ' discord.js ' );
const  client  =  nouveau  Discord.Client ();

client . sur ( ' prêt ' , () => {
    console . log ( ' Je suis prêt! ' );
});

client . on ( ' message ' , message  => {
    if ( message . content  ===  ' ping ' ) {
    	un message . répondre ( ' pong ' );
  	}
});

// CECI DOIT ÊTRE DE CETTE FAÇON
client . connexion ( processus . env . NDMyMzAwMDc5NTI5OTg0MDEx.DauD9Q.BiujCwWBr4JQ6RcyCD7S2sKa538 );
