App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('portfolio');
    this.resource('contact');
});

App.WeaponsView = Ember.View.extend({
    didInsertElement: function() {
        $('.weapons li').tooltip();
    }
});
