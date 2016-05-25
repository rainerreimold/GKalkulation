/** Ziel 1 ermittle das UserObjekt **/

Template.erstelleRezept.helpers({
	selected: function(key, value) {
	 	return key == value ? {selected:'selected'}: '';
 	},
	artikel1: function(){
		console.log ("Meteor.settings.artikel1[] "+Meteor.settings.artikel1.preis);
		return Meteor.settings.artikel1;
	}
});
/*

saettigung1: function(){
	return Meteor.settings.public.saettigung;
},

Template.editIssue.helpers({
	selected: function(key, value) {
	 	return key == value ? {selected:'selected'}: '';
 	}
});
*/

Template.erstelleRezept.rendered = function() {
//   $('#rezeptZubereitungsHinweise').ckeditor();
  // $('#problemHinweise').ckeditor();
 };

Template.erstelleRezept.events = {
//  'click input[type=submit]': function(event){
/* Ich möchte das auslösende Ereignis ändern auf
   den Klick auf das Textfeld

   Dann soll das Objekt angelegt und die ID zurückgegeben werden.

	 */


  //'click input[type=text]': function(event
		'click input[type=submit]': function(event){
    event.preventDefault();

     // Zufallszahl - sollte
     var Zufallszahl = Math.random() * 1000000000;
   //  console.log(Zufallszahl);
     var Zufall = Math.floor(Zufallszahl) +1;
     console.log(Zufall);
  //   alert (Zufall);
  //  debugging;

    var DatumZeit = new Date();
    console.log(DatumZeit.toLocaleString());
		var dayOfMonth = DatumZeit.getDate();
/*
  	// Für die Schlauberger soll die Fälligkeit immer positiv sein auch wenn ein negativer Wert eingegeben wird.
    var faelligkeitInTagenVonHeuteAn=$('#dueDate').val()>0?$('#dueDate').val():($('#dueDate').val()*-1);
		console.log('faelligkeitInTagenVonHeuteAn '+faelligkeitInTagenVonHeuteAn);

		var faelligkeitAbsolut=parseInt(faelligkeitInTagenVonHeuteAn)+parseInt(dayOfMonth);
		console.log('faelligkeitAbsolut '+faelligkeitAbsolut);

		var DatumZeitFaelligkeit = new Date();
		console.log('DatumZeitFaelligkeit: '+DatumZeitFaelligkeit);

    DatumZeitFaelligkeit.setDate(faelligkeitAbsolut);

*/

	//	console.log('DatumZeitFaelligkeit: '+DatumZeitFaelligkeit);

  // Problem Status ('offen') hinzugef�gt.


  // ich m�chte den Problemmelder hinterlegen Meteor.userId() is available "Anywhere but publish functions"  The variable this.userId
//    var thisUserId = Meteor.userId();
  //  console.log('thisUserId :'+thisUserId);


   // var thisUser = Meteor.userAddress();
   // console.log('thisUserId :'+thisUser);

   // System.exit(0);

   // Argument - das nach einer �bernahme und Bearbeitung ein Ticket nicht mehr ge�ndert werden kann.
    var editable = true;

    var rezeptMProp = {
      rezeptBezeichnung: $('#rezeptBezeichnung').val(),
      keyString: Zufall.toString()
  }



    Meteor.call('erstelleRezept', rezeptMProp,
        function(error, result) {
	    if (error) {
				return alert("Fehlergrund: "+'\n'+error.reason+'\n'+'erstelleRezept');
	      }
				else {
					console.log ("Eintrag in MongoDB erfolgreich"+'\n');
				}

			/*	else {
					console.log ("1231231");
					return Rezepte.find({rezeptBezeichnung: ''});
					console.log ("71231231");

				} */
		console.log ("Zufall: "+Zufall+'\n');
		//console.log ("Router.go: "+ 'aendereRezept/'+Zufall.toString());
		//Router.go('aendereRezept/'+Zufall.toString());

//Die Weiterleitung sollte zu einem geeignetem Template erfolgen.

		if ($('#speisenart').val() == "Hauptgericht3") {
			console.log ("korrekt verzweigt.");
		  Router.go('/aendereRezept/'+Zufall);
		 //Router.go('/aendereRezept/'+this._id);
	  }
		else if ($('#speisenart').val() == "Hauptgericht2") {
		  Router.go('/aendereRezept/'+Zufall);
		 //Router.go('/aendereRezept/'+this._id);
	  }
		else if ($('#speisenart').val() == "Dessert") {
			Router.go('/aendereDessert/'+Zufall);
		}
		else if ($('#speisenart').val() == "Vorspeise") {
			Router.go('/aendereVorspeise/'+Zufall);
		}
		else if($('#speisenart').val() == "Suppe") {
			Router.go('/aendereSuppe/'+Zufall);
	  }
		else {
			  console.log ("Weiterleitung: "+$('#speisenart').val() );
		    Router.go('/aendereRezept/'+Zufall);
	  }
	});
}
}
