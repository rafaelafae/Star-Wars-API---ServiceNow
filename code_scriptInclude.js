var StarWarsAPI = Class.create();
StarWarsAPI.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    consultaWars: function() {

		var ID = this.getParameter('sysparm_id');

        var obterStarWars = new sn_ws.RESTMessageV2();
        obterStarWars.setEndpoint('https://swapi.dev/api/people/${id}/');
        obterStarWars.setStringParameterNoEscape('id', ID);
        obterStarWars.setHttpMethod('GET');

        var Response = obterStarWars.execute();

        var ResponseBody = Response.getBody();

		return ResponseBody;
    },

    type: 'StarWarsAPI'
});