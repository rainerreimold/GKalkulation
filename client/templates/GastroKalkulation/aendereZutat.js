Template.aendereZutat.helpers({
	selected: function(key, value) {
	  return 	key == value ? {selected:'selected'}: '';

		//console.log ("Returnwert: "+key)
		//alert ("key");
		//return key;
 	}
  });

	Template.aendereZutat.events = {
	  'click input[type=submit]': function(event){
	    event.preventDefault();
	    //alert("stop");
	    //console.log("jetzt ebenfalls hier: zutatEintrag Events");
	    var DatumZeit = new Date();
	    //console.log(DatumZeit.toLocaleString());
			var dayOfMonth = DatumZeit.getDate();
			var editable = true;

			zutatId= $('#_Id').val();
	    var zutatMProp = {
		    Zutat: $('#Zutat').val(),
        Lebensmittelkategorie: $('#Lebensmittelkategorie').val(),
			  //Gewicht: $('#GewichtZutat').val(),
				beilagenArt: $('#Beilagenart').val(),
				zubereitungsArt: $('#Zubereitungsart').val(),
	    }


	    Meteor.call('aendereZutat', this._id, zutatMProp,
	     function(error, result) {
		    if (error) {
		      return alert(error.reason+'\n'+'aendereZutat');
	      }else	{
			//		console.log("Eintrag einer Zutat erfolgreich !");
			  }
		//		console.log("Ich wäre dann ebenfalls hier 2");

			Router.go('/listeZutat');
	    //Router.go('/aendereRezept/'+this._id);
	  });

	}
	}
