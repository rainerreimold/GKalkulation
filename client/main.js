Meteor.subscribe('GastroKalkulations');
Meteor.subscribe('Rezepte');
Meteor.subscribe('Zutaten');

// client
Meteor.subscribe("userData");
/**
 /* tippt man exakt das in die Konsole: Roles.userIsInRole(Meteor.user(), ['admin'])
erh�lt man true...


*/




        // im Template


   if (Meteor.isClient) {
	   accountsUIBootstrap3.setLanguage('de');
  /*  Template.adminTemplate.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
            console.log("Roles.userIsInRole(Meteor.user(), ['admin'])");
        }
    }) */
}
