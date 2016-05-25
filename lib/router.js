
/*Router.map(function() {
  this.route('/admin', {
    path: '/admin/dashboard',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.redirect('/');
        this.stop();
      }
      return true;
    }
  })
});
*/

// layout loading, notFound
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return
  Meteor.subscribe('Rezepte'); }
});



/* der konkrete Aufruf der updateRezept Seite mit existierendem key Eintrag funktioniert

  der Link von erstelleRezept aber nicht */




// imprint
Router.route('/aendereRezept',{name: 'aendereRezept'});

// imprint
Router.route('/impressum',{name: 'impressum'});

// Routing f�r das NeuAnlegen eines Items

// erstelleTicket
Router.route('/erstelleSpeiseEintrag',{name: 'erstelleSpeiseEintrag'});

Router.route('/erstelleZutat',{name: 'zutatEintrag'});
//Router.route('/zutatEintrag',{name: 'zutatEintrag'});
Router.route('/listeZutat',{name: 'zutatListe'});


// TicketListe
//Router.route('/',{name: 'listeSpeise'});

Router.route('/erstelleRezept',{name: 'erstelleRezept'});
//Router.route('/updateRezept',{name: 'updateRezept'});
Router.route('/listeRezept',{name: 'rezeptListe'});





Router.route('/erstelleLieferant',{name: 'erstelleLieferant'});
/*
Router.route('/updateLieferant',{name: 'updateLieferant'});
// TicketListe mit Status 'offen'
Router.route('/statusOffenAlle',{name: 'ticketMListOffen'});

// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusInBearbeitungAlle',{name: 'ticketMListInBearbeitung'});


// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusInBearbeitung',{name: 'ticketMListInBearbeitungBenutzer'});

// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusOffen',{name: 'ticketMListOffenBenutzer'});

// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusAbgeschlossen',{name: 'ticketMListAbgeschlossenBenutzer'});

// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusZurueckGezogen',{name: 'ticketMListZurueckGezogenBenutzer'});

// TicketListe mit Status 'Erledigt'
Router.route('/statusErledigt',{name: 'ticketMListErledigt'});



// TicketListe mit Status 'in Bearbeitung'
Router.route('/statusInBearbeitungMeine',{name: 'ticketMListInBearbeitungMeine'});

// TicketListe mit Status 'Offen'
Router.route('/statusOffenMeine',{name: 'ticketMListOffenMeine'});

// TicketListe mit Status 'Abgeschlossen'
Router.route('/statusAbgeschlossenMeine',{name: 'ticketMListAbgeschlossenMeine'});

// TicketListe mit Status 'zurueckgezoegen'
Router.route('/statusZurueckGezogenMeine',{name: 'ticketMListZurueckGezogenMeine'});



// TicketListe mit Status 'Erledigt'
//Router.route('/statusErledigt',{name: 'ticketMListErledigt'});

// Loesungsweg
//Router.route('/loesungsweg/:_id',{
Router.route('/loesungsweg/:keyString',{
	name:   'problemLoesungsWeg',
	data:  function() {
	   //return Tickets.findOne({_id: this.params._id});
	   return Tickets.findOne({keyString: this.params.keyString});
	}
});

Router.route('/ticketDetail/:_id',{
	name:   'ticketDetail',
	data:  function() {
	   //return Tickets.findOne({_id: this.params._id});
	   return Tickets.findOne({_id: this.params._id});
	}
});

//aendereEintrag

// Umstellen des Parameters auf 'keyString'
Router.route('/eintrag/:keyString', {
	name:  'aendereEintrag',
	data:  function() {
	   return Tickets.findOne({keyString: this.params.keyString});

	}
});


// L�sche Eintrag
Router.route('/loesche/:keyString', {
	name:  'loescheEintrag',
	data:  function() {
	   return Tickets.findOne({keyString: this.params.keyString});

	}
});

// �ber Zust�ndigkeit den Bearbeiter zuweisen 'keyString' -04.06.
Router.route('/zustaendigkeit/:keyString', {
	name:  'aendereZustaendigkeit',
	data:  function() {
	   return Tickets.findOne({keyString: this.params.keyString});

	}
});

//ticketZurueckZiehen
// �ber Zust�ndigkeit den Bearbeiter zuweisen 'keyString' -04.06.
Router.route('/ticketZurueckZiehen/:keyString', {
	name:  'ticketZurueckZiehen',
	data:  function() {
	   return Tickets.findOne({keyString: this.params.keyString});

	}
});

Router.route('admin', {
        path:'/admin',
        template: 'verwalteNutzer',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
						else
						{
								this.next();
						}
        }
    });

	// 	ticketMListAdmin

		Router.route('ticketAdmin', {

		        template: 'ticketMListAdmin',
		        onBeforeAction: function() {
		            if (Meteor.loggingIn()) {
		                this.render(this.loadingTemplate);
		            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
		                console.log('redirecting');
		                this.redirect('/statusInBearbeitung');
		            }
								else
								{
										this.next();
									}
		        }
		    });

Router.onBeforeAction(function() {
	if(! Meteor.user()) {
		this.render('accessDenied');
	}
	else
	{
	    this.next();
    }
// mehrere Seiten
}, {only: ['aendereEintrag', 'erstelleTicket', 'loescheEintrag']});


*/

// der Nutzer ist ein Admin
/*
Router.route('/aendereRezept/:_id', {
	name:  'updateRezept',
	data:  function() {
	   return Rezepte.findOne({_id: this.params._id});

	}
});
*/

Router.route('/aendereRezept/:keyString', {
	name:  'updateRezept',
	data:  function() {
	   return Rezepte.findOne({keyString: this.params.keyString});

	}
});

//Router.route('/aendereZutat',{name: 'aendereZutat'});
Router.route('/aendereZutat/:_id', {
	name:  'aendereZutat',
	data:  function() {
	   return Zutat.findOne({_id: this.params._id});

	}
});



Router.onBeforeAction(function() {
	if(! Meteor.user()) {
		this.render('accessDenied');
	}
	else
	{
	    this.next();
    }
// mehrere Seiten
}, {only: ['aendereRezept', 'erstelleTicket', 'loescheEintrag']});
