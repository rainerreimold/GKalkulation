Template.zutatListe.helpers({
  /*isProfile: function() {
    var templateData = Template.instance().data;
    return templateData.context === "profile" ? true : false;
  },*/
  zutaten: function() {
  		// zeige nur die Tickets ProblemStatus offen
  		// return Tickets.find({loeschbar: false, problemStatus: 'offen'});
  		var userId = Meteor.userId();

  		// Tickets.find({loeschbar: false, problemMelderId: userId });
      return Zutat.find();
  	},
  currentList: function() {
    return Template.instance().data;
  }
  /*,
  rezepte: function() {
    var data = Template.instance().data.content;

    if ( data ) {
      return data;
    }
  }*/
});
