
/** Ziel 1 ermittle das UserObjekt **/

Template.zutatEintrag.helpers({
	selected: function(key, value) {
    //console.log("Ich wäre dann schonmal hier");
		return key == value ? {selected:'selected'}: '';
 	}
});


Template.zutatEintrag.rendered = function() {
  //debugger;
	// $('#problemBeschreibung').ckeditor();
  // $('#problemHinweise').ckeditor();
 };

	//'click input[type=submit]': function(event){

Template.zutatEintrag.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();
    //alert("stop");
    //console.log("jetzt ebenfalls hier: zutatEintrag Events");
    var DatumZeit = new Date();
    //console.log(DatumZeit.toLocaleString());
		var dayOfMonth = DatumZeit.getDate();




  // Problem Status ('offen') hinzugef�gt.


  // ich m�chte den Problemmelder hinterlegen Meteor.userId() is available "Anywhere but publish functions"  The variable this.userId
/*
		var thisUserId = Meteor.userId();
    console.log('thisUserId :'+thisUserId);
*/

   // var thisUser = Meteor.userAddress();
   // console.log('thisUserId :'+thisUser);

   // System.exit(0);

   // Argument - das nach einer �bernahme und Bearbeitung ein Ticket nicht mehr ge�ndert werden kann.
    var editable = true;

    var zutatMProp = {
			//rezeptId: $('#RezeptId').val(),
		//	rezeptId: this._id,
      Zutat: $('#Zutat').val(),
      Lebensmittelkategorie: $('#Lebensmittelkategorie').val(),
			beilagenArt: $('#Beilagenart').val(),
			zubereitungsArt: $('#Zubereitungsart').val(),
      DatumZeit: DatumZeit.toLocaleString()
      // problemMeldungDatumZeit: DatumZeit,
      // problemFaelligkeit: $('#dueDate').val(),

      //problemFaelligkeit: DatumZeitFaelligkeit.toLocaleString(),
    //  problemMelderId: thisUserId.toString(),
    /*  prioritaetMelder: $('#priority').val(),
      problemStatus: 'offen',
      loeschbar: false,
      veraenderbar: true,
      zurueckgezogen: false,
      keyString: Zufall.toString() */
  }


    Meteor.call('erstelleZutat', zutatMProp,
        function(error, result) {
	    if (error) {
	      return alert(error.reason+'\n'+'erstelleZutat');
      }else	{
		//		console.log("Eintrag einer Zutat erfolgreich !");
		  }
	//		console.log("Ich wäre dann ebenfalls hier 2");

		Router.go('/erstelleZutat');
    //Router.go('/aendereRezept/'+this._id);
  });
//	console.log("Ich wäre dann ebenfalls hier3");
}
}
