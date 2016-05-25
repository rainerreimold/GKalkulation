GastroKalkulations = new Mongo.Collection('GastroKalkulations');
Users = new Mongo.Collection('user');
Speise = new Mongo.Collection('speisen');
Lieferant = new Mongo.Collection('lieferanten');
Bestellung = new Mongo.Collection('bestellungen');
//Speiseeinheit = new Mongo.Collection('speiseeinheit');
//Rezept = new Mongo.Collection('rezepte');



//console.log("Ticket wurde erzeugt mit der Collection: tickets!");

// Meteor StartupCode
//Meteor.startup(function () {
//      createUserAdminRoles();
//    });


/*
Eigenschaften

* UserId Problemmelder
* ProblemThema -
* ProblemKurzbeschreibung (analog Betreff)  problemTitle
* ProblemAusf�hrlich
* ProblemHinweise
* ProblemTags
* Datum/Uhrzeit TimeStamp Erfassung
* Priorit�t Nutzer
* UserId Bearbeiter		1..n
* Priorit�t Bearbeiter
* Status
* L�sungsweg
* ZusatzAmerkung
* Datum/Uhrzeit TimeStamp Erledigung


*/

/*

Meteor.methods({
	updateTicket: function(ticketId, ticketMProp) {
		check(Meteor.userId(), String);
		check(ticketMProp, {
			problemTitle: String,
			problemBeschreibung: String,
			problemHinweise: String,
			problemFaelligkeit: String,
			prioritaetMelder: String
		});

		console.log("in der Update-Methode");

		Tickets.update(ticketId, {$set: ticketMProp});
	},
	erstelleTicket: function(ticketMProp) {
		//check(Meteor.userId(), String);
		check(ticketMProp, {
			problemTitle: String,
			problemBeschreibung: String,
			problemHinweise: String,
			problemMeldungDatumZeit: String,
			problemFaelligkeit: String,
		//	problemMeldungDatumZeit: Date,
		//	problemFaelligkeit: Date,
			problemMelderId: String,
			prioritaetMelder: String,
			problemStatus: String,
			loeschbar: Boolean,
			veraenderbar: Boolean,
			zurueckgezogen: Boolean,
			keyString: String
		});
		Tickets.insert(ticketMProp);
	},




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

});




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
