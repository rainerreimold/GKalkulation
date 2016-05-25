
Meteor.publish('GastroKalkulations', function() {
	return GastroKalkulations.find();
});

Meteor.publish('Rezepte', function() {
	return Rezepte.find();
});
Meteor.publish('zutaten', function() {
	return Zutaten.find();
});




Meteor.publish('isAdminUser', function() {
	return Users.find({rolle: 'admin'});
});


// suche nach den Datens�tzen mit der Priorit�t "hoch"
/*
Meteor.publish('issues', function() {
	return Issues.find({priority: 'Low'});
});
*/


Meteor.publish("userData", function () {
  if (this.userId) {
	   return Meteor.users.find({_id: this.userId});
   // return Meteor.users.find({_id: this.userId},
   //                          {fields: {'other': 1, 'things': 1}});
  } else {
    this.ready();
  }
});
