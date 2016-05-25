if (Meteor.isServer) {
    Meteor.startup(function () {
        // bootstrap the admin user if they exist -- You'll be replacing the id later
        if (Meteor.users.findOne("mxDEebD3rZgZdGkcm")) {
            Roles.addUsersToRoles("mxDEebD3rZgZdGkcm", ['admin']);
        }
        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)

//Hier werden die notwendigen Gruppen direkt beim Start der Anwendung angelegt.

        if(!Meteor.roles.findOne({name: "Bearbeiter"}))
            Roles.createRole("Bearbeiter");

        if(!Meteor.roles.findOne({name: "Datenpflege"}))
            Roles.createRole("Datenpflege");

        if(!Meteor.roles.findOne({name: "Service"}))
            Roles.createRole("Service");

        if(!Meteor.roles.findOne({name: "Service-Leitung"}))
            Roles.createRole("Service-Leitung");

        if(!Meteor.roles.findOne({name: "Hotel"}))
            Roles.createRole("Hotel");

        if(!Meteor.roles.findOne({name: "Lager"}))
            Roles.createRole("Lager");

        if(!Meteor.roles.findOne({name: "Einkauf"}))
            Roles.createRole("Einkauf");

        if(!Meteor.roles.findOne({name: "Küche"}))
            Roles.createRole("Küche");

        if(!Meteor.roles.findOne({name: "Küche-Leitung"}))
            Roles.createRole("Küche-Leitung");

    });
    if (Meteor.users.findOne("mxDEebD3rZgZdGkcm")) {
        Roles.addUsersToRoles("mxDEebD3rZgZdGkcm", ['admin']);
    }
    if (Meteor.users.findOne("mxDEebD3rZgZdGkcm")) {
        Roles.addUsersToRoles("mxDEebD3rZgZdGkcm", ['Küche-Leitung']);
    }

    // Sollte ein Benutzer in alle Nutzerrollen eingefügt werden:
    var nutzerID = "";

    if ((nutzerID!="") && (Meteor.users.findOne(nutzerID))) {
        Roles.addUsersToRoles(nutzerID, ['admin']);
        Roles.addUsersToRoles(nutzerID, ['Bearbeiter']);
        Roles.addUsersToRoles(nutzerID, ['Einkauf']);
        Roles.addUsersToRoles(nutzerID, ['Lager']);
        Roles.addUsersToRoles(nutzerID, ['Hotel']);
        Roles.addUsersToRoles(nutzerID, ['Datenpflege']);
        Roles.addUsersToRoles(nutzerID, ['Service-Leitung']);
        Roles.addUsersToRoles(nutzerID, ['Service']);
        Roles.addUsersToRoles(nutzerID, ['Küche']);
        Roles.addUsersToRoles(nutzerID, ['Küche-Leitung']);
    }


//BrowserPolicy.content.allowOriginForAll('cdn.ckeditor.com');
}

  /* Meteor.startup(function () {
      createUserAdminRoles();
    });
    */
