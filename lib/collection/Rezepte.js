Rezepte = new Mongo.Collection('rezepte');




Meteor.methods({
	updateRezept: function(rezeptId, rezeptMProp) {
	//	check(Meteor.userId(), String);
		check(rezeptMProp, {
			rezeptBezeichnung: String,
			rezeptKurzbezeichnung: String,
			rezeptZubereitungsHinweise: String,
      rezeptZubereitungsdauer: String,
      rezeptLevel: String,
      Quelle: String,
			rezeptAngelegt: String,
			angelegt: Date,
			Zutaten: {
				 Hauptkomponente: {
					 Name: String,
				   HauptkomponenteEinsatzmenge: String,
				   KilopreisHauptkomponente: String,
					 WEPHauptkomponente: Number
				 },
				 Garnitur: {
					 Name: String,
					 KilopreisGarnitur: String
				 },
				 Saettigungsbeilage: {
					 Name: String,
					 EinsatzmengeSaettigung1: String,
					 KilopreisSaettigung1: String
				 },
				 Gemuese: {
					 Name: String,
					 EinsatzmengeGemuese1: String,
					 KilopreisGemuese1: String
				 },
				 Sauce: {
					 Name: String,
					 KilopreisSauce: String
					 //Einsatzmenge:
				 }
			},
			//
			SpeisenKategorie: String,
			Kalkulationsfaktor1: Number,
			WareneinsatzGesamtRohPreis: Number,
			// reiner Angebotspreis
			WarenAngebotsRohPreis1: Number,
			WareneinsatzGesamtRohPreis2: Number,
			WarenAngebotsNettoPreis: Number,
			WarenAngebotsPreisBrutto: String,
			editierbar: Boolean

		});

		console.log("in der Rezept Update-Methode");

		Rezepte.update(rezeptId, {$set: rezeptMProp});
	},
	erstelleRezept: function(rezeptMProp) {
		//check(Meteor.userId(), String);
		check(rezeptMProp, {
			rezeptBezeichnung: String,
			keyString: String
		});
		Rezepte.insert(rezeptMProp);
	},



/*
	loescheTicket:  function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			loeschbar: Boolean
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	},


	// Zust�ndigkeit �ndern - bei �bernahme des Tickets durch einen Bearbeiter
	aendereZustaendigkeitTicket:  function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			problemStatus: String,
			problemBearbeiterId: String,
			problemBeginnBearbeitung: String
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	},

	//      problemStatus: 'zurueckgezogen',

	ticketZurueckZiehen:  function(ticketId, ticketMProp) {
		//check(Meteor.userId(), String);
		check(ticketMProp, {
			problemStatus: String,
			loeschbar: Boolean,
			veraenderbar: Boolean,
			zurueckgezogen: Boolean,
			DatumProblemZurueckGezogen: Date
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	},

	loesungTicket: function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			problemStatus: String,
			problemLoesungsweg: String,
			mitteilungAnMelder: String,
			mitteilungAnMelderSichtbar: Boolean,
			mitteilungAnMelderSichtbarZaehler: Number
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	},

	incrementZaehler:  function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			mitteilungAnMelderSichtbar: Boolean,
			mitteilungAnMelderSichtbarZaehler: Number
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	},
*/
});

/*


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

objProperties = function (myObject){
  var out = new Array();
  for( property in myObject ) {
    out.push(property + " = " + myObject[property]);
  }
  return out;
};
*/


/*
function objProperties(myObject){
  var out = new Array();
  for( property in myObject ) {
    out.push(property + " = " + myObject[property]);
  }
  return out;
}
*/

/*

	aendereZustaendigkeitTicket:  function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			problemStatus: String,
			problemBearbeiterId: String,
			problemBearbeiterUser: String
		});
		Tickets.update(ticketId, {$set: ticketMProp});
	}


 problemTitle: $('#ProblemKurzbezeichnung').val(),
      problemBeschreibung: $('#problemBeschreibung').val(),
      problemHinweise: $('#problemHinweise').val(),
      problemMeldungDatumZeit: DatumZeit.toString(),
      problemFaelligkeit: $('#dueDate').val(),
      prioritaetMelder: $('#priority').val(),
      keyString: Zufall.toString()

      */
