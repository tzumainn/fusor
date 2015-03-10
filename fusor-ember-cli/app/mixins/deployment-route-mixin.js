import Ember from 'ember';

export default Ember.Mixin.create({

  actions: {
    saveDeployment: function(routeNameForTransition) {
      var deployment = this.get('controller.model');
      var self = this;
      deployment.save().then(
        function(result) {
          if (routeNameForTransition) {
            self.transitionTo(routeNameForTransition, result);
          }
        },
        function(error) {
          alert('There was an error trying to save: ' + error);
        }
      );
    },
  }

});


