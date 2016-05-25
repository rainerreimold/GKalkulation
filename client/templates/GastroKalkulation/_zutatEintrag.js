
/** Ziel 1 ermittle das UserObjekt **/

/* Template._zutatSaettigung.helpers({
	selected: function(key, value) {
    console.log("Ich wäre dann schonmal hier (_zutatEintrag)");
		return key == value ? {selected:'selected'}: '';
 	}
}); */
Template._zutatHauptbestandteil.helpers({
  hauptbestandteil1: function() {
    return Zutat.find({beilagenArt: "Hauptkomponente"});
		//return Meteor.settings.public.hauptbestandteil;
	},
	gewicht: function(){
		return Meteor.settings.public.gewicht;
	}
	});
	Template._zutatGarnitur.helpers({
	garnitur1: function(){
		return Meteor.settings.public.garnitur;
	}
	});
	Template._zutatSaettigung.helpers({
	saettigung1: function(){
    //return Zutat.find({beilagenArt: "Sättigungsbeilage"});
    return Zutat.find({beilagenArt: "Sättigbeilage"});
    //return Meteor.settings.public.saettigung;
  },
	gewicht: function(){
		return Meteor.settings.public.gewicht;
	}
	});
	Template._zutatGemuese.helpers({
	gemuese1: function(){
    return Zutat.find({beilagenArt: "Gemüse"});
    //return Meteor.settings.public.gemuese;
  },
	gewicht: function(){
		return Meteor.settings.public.gewicht;
	}
	});
	Template._zutatSauce.helpers({

  sauceB: function(){
      return Meteor.settings.public.sauceB;
  },
  sauceBName: function(){
      return Meteor.settings.public.sauceB.Name;
  },
  sauceBArtikelnummer: function(){
      return Meteor.settings.public.sauceB.Artikelnummer;
  },
  sauceC: function(){
    return Meteor.settings.public.sauceC;
  },

  // ich wechsle die Ausgabe vom Development settings Tetfile in die Datenbank
  /*sauce: function(){
    return Meteor.settings.public.sauce;
   },*/
  sauce: function() {

  		// zeige nur die Tickets ProblemStatus offen
  		// return Tickets.find({loeschbar: false, problemStatus: 'offen'});
  		var userId = Meteor.userId();

  		// Tickets.find({loeschbar: false, problemMelderId: userId });
      return Zutat.find({beilagenArt: "Soße"});
  	},



});
