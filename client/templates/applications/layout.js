Template.layout.helpers({

	isAdminUser:  function() {
    //      console.log("Roles.userIsInRole(Meteor.user(), ['admin'])");
            return Roles.userIsInRole(Meteor.user(), ['admin']);

  },
  isBearbeiterUser: function() {
	        console.log("Roles.userIsInRole(Meteor.user(), ['Bearbeiter'])");
           return Roles.userIsInRole(Meteor.user(), ['Bearbeiter']);

  },
  isDatenpflegeUser: function() {
	        console.log("Roles.userIsInRole(Meteor.user(), ['Datenpflege'])");
           return Roles.userIsInRole(Meteor.user(), ['Datenpflege']);

  },
	isServiceUser: function() {
	        console.log("Roles.userIsInRole(Meteor.user(), ['Service'])");
           return Roles.userIsInRole(Meteor.user(), ['Service']);

  },
	isServiceLeitungUser: function() {
	        console.log("Roles.userIsInRole(Meteor.user(), ['ServiceLeitung'])");
           return Roles.userIsInRole(Meteor.user(), ['ServiceLeitung']);

  },
	isLagerUser: function() {
	        console.log("Roles.userIsInRole(Meteor.user(), ['Lager'])");
           return Roles.userIsInRole(Meteor.user(), ['Lager']);

  },
  isheute: function() {
          var heute = new Date();
           return heute.toLocaleString();
  }

});

Template.layout.events = {
  'click input[type=submit]': function(event){
    event.preventDefault();


  Router.go('erstelleRezept');
 }
}
