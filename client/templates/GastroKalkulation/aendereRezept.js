/** Ziel 1 ermittle das UserObjekt **/

Template.updateRezept.helpers({
	selected: function(key, value) {
	 	key == value ? {selected:'selected'}: '';
		console.log ("Returnwert: "+key)
		return key;
 	},
	zutaten: function(){
    return Meteor.settings.public.zutaten;
  } /*,
  sauces: function(){
    return Meteor.settings.public.sauces;
  },*/
});
/*
Template.editIssue.helpers({
	selected: function(key, value) {
	 	return key == value ? {selected:'selected'}: '';
 	}
});
*/

Template.updateRezept.onCreated = function() {

 var Zutaten = new Array ();
 Zutaten[0] = "Steak";
 Zutaten[1] = "Kartoffeln";
 Zutaten[2] = "Pilze";
 return Zutaten;
//   $('#rezeptZubereitungsHinweise').ckeditor();
  // $('#problemHinweise').ckeditor();
 };

Template.updateRezept.events = {
//  'click input[type=submit]': function(event){
/* Ich möchte das auslösende Ereignis ändern auf
   den Klick auf das Textfeld

   Dann soll das Objekt angelegt und die ID zurückgegeben werden.

	 */

	 /*'input[type=button]': function(event){
     event.preventDefault();

    console.log("Ich wäre dann ebenfalls hier");
	}, */

  'click input[type=submit]': function(event){
  //'click input[type=text]': function(event){
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

		var rezeptAngelegt = new Date();
		console.log('DatumZeitFaelligkeit: '+DatumZeitFaelligkeit);

    DatumZeitFaelligkeit.setDate(faelligkeitAbsolut);

 */

/** Wie kann man eine nicht bekannte Zahl an Zutaten auswerten ? */

/*
var i = 0;
do {
	console.log ("Zutat "+i+" "+$('#Zutat['+i+']').val()+'\n');
	//console.log ("Zutat "+i+" "+$('#Zutat[]').val()+'\n');
}while (++i<3)
*/

//System.exit;




	//	console.log('DatumZeitFaelligkeit: '+DatumZeitFaelligkeit);

  // Problem Status ('offen') hinzugef�gt.


  // ich m�chte den Problemmelder hinterlegen Meteor.userId() is available "Anywhere but publish functions"  The variable this.userId
//    var thisUserId = Meteor.userId();
  //  console.log('thisUserId :'+thisUserId);

  // Berechnung Wareneisatzpreis Hauptkomponente
	var HauptkomponenteEinsatzmenge = parseFloat($('#GewichtHauptbestandteil').val() );
	console.log ("HauptkomponenteEinsatzmenge: "+ HauptkomponenteEinsatzmenge );
	var KilopreisHauptkomponente = parseFloat($('#kilopreisHauptkomponente').val() );
  console.log ("KilopreisHauptkomponente: "+ KilopreisHauptkomponente.toString() );
	var WEPHauptkomponente = KilopreisHauptkomponente / 1000 * HauptkomponenteEinsatzmenge;
  console.log ("Wareneinsatzpreis HK: "+WEPHauptkomponente );
  // Wareneinsatz Garnitur
	//var HauptkomponenteEinsatzmenge = parseFloat($('#GewichtHauptbestandteil').val() );
	//console.log ("HauptkomponenteEinsatzmenge: "+ HauptkomponenteEinsatzmenge );
	var KilopreisGarnitur = parseFloat($('#kilopreisGarnitur').val() );
  console.log ("KilopreisGarnitur: "+ KilopreisGarnitur.toString() );
	var EinsatzmengeGarnitur = 100;
	var WEPGarnitur = KilopreisGarnitur / 1000 * EinsatzmengeGarnitur;
  console.log ("Wareneinsatzpreis HK: "+WEPGarnitur );

  // Wareneinsatz Sättigungsbeilage
	var Saettigungsbeilage1Einsatzmenge = parseFloat($('#GewichtSaettigung1').val() );
	console.log ("Saettigungsbeilage1Einsatzmenge: "+ Saettigungsbeilage1Einsatzmenge );
	var KilopreisSaettigung1 = parseFloat($('#kilopreisSaettigung1').val() );
	console.log ("KilopreisSaettigung1: "+ KilopreisSaettigung1.toString() );
	var WEPSaettigung1 = KilopreisSaettigung1 / 1000 * Saettigungsbeilage1Einsatzmenge;
	console.log ("Wareneinsatzpreis SB: "+WEPSaettigung1 );

  // Wareneinsatz Gemüse
	var Gemuese1Einsatzmenge = parseFloat($('#GewichtGemuese1').val() );
	console.log ("Gemuese1Einsatzmenge: "+ Gemuese1Einsatzmenge );
	var KilopreisGemuese1 = parseFloat($('#kilopreisGemuese1').val() );
	console.log ("KilopreisGemuese1: "+ KilopreisGemuese1.toString() );
	var WEPGemuese1 = KilopreisGemuese1 / 1000 * Gemuese1Einsatzmenge;
	console.log ("Wareneinsatzpreis GB: "+WEPGemuese1 );

  // Wareneinsatz Sauce
	//var SauceEinsatzmenge = parseFloat($('#GewichtHauptbestandteil').val() );
	//console.log ("HauptkomponenteEinsatzmenge: "+ HauptkomponenteEinsatzmenge );
	var KilopreisSauce = parseFloat($('#kilopreisSauce').val() );
	console.log ("KilopreisSauce: "+ KilopreisSauce.toString() );
	var SauceEinsatzmenge = 50;
	var WEPSauce = KilopreisSauce / 1000 * SauceEinsatzmenge;
	console.log ("Wareneinsatzpreis Sauce: "+WEPSauce );
  // WareneinsatzGesamtRohPreis
  var WEGRP = WEPHauptkomponente + WEPGarnitur + WEPSaettigung1 + WEPGemuese1 + WEPSauce;
  console.log ("WareneinsatzGesamtRohPreis: "+WEGRP );

  // ermitteln eines Warenangebotspreises aufgrund eines vorgegeben Kalkulationsfaktors
	var Kalkulationsfaktor1 = 2.5;
	var WAP1 = Kalkulationsfaktor1 * WEGRP;
	console.log ("WarenAngebotsRohPreis: "+WAP1 );
  console.log ("===================================");
	console.log ("Der 2. Preis erhöht die Kalk. Einsatzmenge, um den jeweiligen Herstellungs bzw. Zubereitungsverlust");
  console.log ("Es können aus einem Kilogramm Kartoffeln im Einkauf, keine 1000g Kartoffeln verkauft werden. Es entstehen Verluste beim schälen und zubereiten.");

	var WEGRP2 = (WEPHauptkomponente/.75) + WEPGarnitur + (WEPSaettigung1/.8) + (WEPGemuese1/.8) + WEPSauce;
	console.log ("WareneinsatzGesamtRohPreis2: "+WEGRP2 );
	var WAP2 = Kalkulationsfaktor1 * WEGRP2;
	// Aufschlagen der Umsatzsteuer
	var WAPBrutto = WAP2*1.19;
	// Angebotspreis gerundet
	var WAPBrutto = WAPBrutto.toFixed(1)+"0";





	//var WAP2 = WAP1.toFixed(1)+"0";
	//console.log ("WAP2: "+WAP2);
	//var WAP3 = WAP2.toFixed(2);
  console.log ("WarenAngebotsPreis gerundet: "+WAP2 );

  var editable = true;
	var sichtbar = true;

    var rezeptMProp = {
      rezeptBezeichnung: $('#rezeptBezeichnung').val(),
      rezeptKurzbezeichnung: $('#rezeptKurzbezeichnung').val(),
      rezeptZubereitungsHinweise: $('#rezeptZubereitungsHinweise').val(),
      rezeptZubereitungsdauer: $('#rezeptZubereitungsdauer').val(),
      rezeptLevel: $('#rezeptLevel').val(),
      Quelle: $('#Quelle').val(),
			rezeptAngelegt: DatumZeit.toLocaleString(),
			angelegt: DatumZeit,
      Zutaten: {
			  Hauptkomponente: {
							Name: $('#Hauptbestandteil').val(),
			  			HauptkomponenteEinsatzmenge: $('#GewichtHauptbestandteil').val(),
		  			 	KilopreisHauptkomponente: $('#kilopreisHauptkomponente').val(),
							WEPHauptkomponente: WEPHauptkomponente
				},
				Garnitur: {
							Name: $('#Garnitur').val(),
							/* HauptkomponenteEinsatzmenge: $('#GewichtHauptbestandteil').val(), */
							KilopreisGarnitur: $('#kilopreisGarnitur').val()
				},
				Saettigungsbeilage: {
							Name: $('#Saettigung1').val(),
							EinsatzmengeSaettigung1: $('#GewichtSaettigung1').val(),
							KilopreisSaettigung1: $('#kilopreisSaettigung1').val()
	 				},
				Gemuese: {
							Name: $('#Gemuese1').val(),
							EinsatzmengeGemuese1: $('#GewichtGemuese1').val(),
							KilopreisGemuese1: $('#kilopreisGemuese1').val()
				},
				Sauce: {
					   Name: $('#Sauce').val(),
						 KilopreisSauce: $('#kilopreisSauce').val()
				}
		  },
			SpeisenKategorie: "Hauptgericht3",
			Kalkulationsfaktor1: Kalkulationsfaktor1,
			WareneinsatzGesamtRohPreis: WEGRP,
			// reiner Angebotspreis
			WarenAngebotsRohPreis1: WAP1,
			WareneinsatzGesamtRohPreis2: WEGRP2,
			WarenAngebotsNettoPreis: WAP2,
			WarenAngebotsPreisBrutto: WAPBrutto,
			editierbar: editable,
      sichtbar: sichtbar
      // Zutaten
			/*Zutaten: {
			  [ Hauptkomponente: $('#Hauptbestandteil').val(),
				HauptkomponenteEinsatzmenge: $('#gewichtHauptbestandteil').val(),
				KilopreisHauptkomponente: $('#kilopreisHauptkomponente').val()
			]}*/




	/*    problemMeldungDatumZeit: DatumZeit.toLocaleString(),
      problemMeldungDatumZeit: DatumZeit,
      // problemFaelligkeit: $('#dueDate').val(),
      problemFaelligkeit: DatumZeitFaelligkeit.toLocaleString(),
      problemMelderId: thisUserId.toString(),
      prioritaetMelder: $('#priority').val(),
      problemStatus: 'offen',
      loeschbar: false,

      veraenderbar: true,
      zurueckgezogen: false, */

  }




/****

	console.log("vor  Meteor.call");
	Meteor.call('updateTicket', this._id, ticketMProp,
			function(error, result) {
/
**/


    Meteor.call('updateRezept', this._id, rezeptMProp,
        function(error, result) {
	    if (error) {
				return alert("Fehlergrund: "+'\n'+error.reason+'\n'+'updateRezept');
	      }



		Router.go('erstelleRezept');
  });
}
}
