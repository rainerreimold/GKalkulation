Zutat = new Mongo.Collection('zutaten');


Meteor.methods({
	aendereZutat: function(zutatId, zutatMProp) {
	/*	check(Meteor.userId(), String);
	Zutat: $('#Zutat').val(),
	Lebensmittelkategorie: $('#Lebensmittelkategorie').val(),
	//Gewicht: $('#GewichtZutat').val(),
	beilagenArt: $('#Beilagenart').val(),
	zubereitungsArt: $('#Zubereitungsart').val(),
*/
check(zutatMProp, {
		Zutat: String,
		Lebensmittelkategorie: String,
		beilagenArt: String,
		zubereitungsArt: String


  });
	Zutat.update(zutatId, {$set: zutatMProp});
	},
	erstelleZutat: function(zutatMProp) {
		//check(Meteor.userId(), String);
		console.log("hier in erstelle Zutat");
		check(zutatMProp, {
			//rezeptId: String,
			Zutat: String,
			Lebensmittelkategorie: String,
			beilagenArt: String,
			zubereitungsArt: String,
		//	problemMeldungDatumZeit: Date,
		//	problemFaelligkeit: Date,
		  DatumZeit: String
		});
		Zutat.insert(zutatMProp);
	}



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
