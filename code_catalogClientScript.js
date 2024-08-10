function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    var ID = g_form.getValue('id_do_personagem');

    var obterPersonagem = new GlideAjax('StarWarsAPI');
    obterPersonagem.addParam('sysparm_name', 'consultaWars');
    obterPersonagem.addParam('sysparm_id', ID);
    obterPersonagem.getXML(callbackStarWars);

    function callbackStarWars(response) {

        var ObjetoPersonagem = response.responseXML.documentElement.getAttribute('answer');
        ObjetoPersonagem = JSON.parse(ObjetoPersonagem);


        if (!ObjetoPersonagem.name) {

            g_form.setValue('id_do_personagem', '');
            g_form.setValue('personagem', '');
            g_form.setValue('altura', '');
            g_form.setValue('peso', '');
            g_form.setValue('cor_dos_olhos', '');
            g_form.setValue('genero', '');

            g_form.showFieldMsg('id_do_personagem', 'Personagem inválido', 'error');

        } else {

            g_form.setValue('personagem', ObjetoPersonagem.name);
            g_form.setValue('altura', ObjetoPersonagem.height);
            g_form.setValue('peso', ObjetoPersonagem.mass);
            g_form.setValue('cor_dos_olhos', ObjetoPersonagem.eye_color);
            g_form.setValue('genero', ObjetoPersonagem.gender);

        }
    }
}