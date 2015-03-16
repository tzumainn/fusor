import Ember from 'ember';
import SatelliteControllerMixin from "../../mixins/satellite-controller-mixin";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(SatelliteControllerMixin, EmberValidations.Mixin, {

  needs: ['satellite', 'deployment'],

  validations: {
    name: {
      presence: true,
    },
  },

  name: Ember.computed.alias("controllers.deployment.name"),
  description: Ember.computed.alias("controllers.deployment.description"),

  organizationTabRouteName: Ember.computed.alias("controllers.deployment.organizationTabRouteName"),

  disableNextOnDeploymentName: Ember.computed.alias("controllers.deployment.disableNextOnDeploymentName"),

});
