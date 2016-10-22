angular.module("appSite").controller("homeCtrl", ["$scope",
                                                  "$http",
                                                  "$location",
                                                  "active_banners",
                                                  "loaded_parameters",
                                                  "destaques",
                                                  "total_imoveis",
    function ($scope, $http, $location, active_banners, loaded_parameters, destaques, total_imoveis) {
        // Generic home page of website messages:
        $scope.beneficios_message = "Ao locatário oferecemos a possibilidade de apresentar como garantia de fiança, as seguintes opções: Um fiador com um imóvel, seguro fiança ou Título de Capitalização, o que viabiliza a locação pretendida.";
        $scope.facilidades_message = "A Florença é uma empresa que presa pela qualidade no atendimento e nos produtos e serviços ofertados. Converse conosco e tenha a garantia de ser atendido por profissionais qualificados e experientes que podem lhe ajudar a encontrar o imóvel de seus sonhos, de acordo com a sua necessidade !.";
        $scope.ligue_para_nos_message = "Precisa de um imóvel ? quer comprar, alugar ou vender ? nós entramos em contato com você !. Podemos conversar também pelo Whattsapp !";

        $scope.youtube_link;
        $scope.twitter_link;
        $scope.facebook_link;
        $scope.google_plus_link;
        $scope.rss_link;

        var _data = loaded_parameters.data;
        $scope.extrai_valores_redes_sociais = function(_data) {
            for (var i = 0; i < loaded_parameters.data.length; i++) {
                if (loaded_parameters.data[i].nome == 'endereco_google_plus') {
                    $scope.google_plus_link = loaded_parameters.data[i].valor;
                } else if (loaded_parameters.data[i].nome == 'endereco_twitter') {
                    $scope.twitter_link = loaded_parameters.data[i].valor;
                } else if (loaded_parameters.data[i].nome == 'endereco_youtube') {
                    $scope.youtube_link = loaded_parameters.data[i].valor;
                } else if (loaded_parameters.data[i].nome == 'endereco_facebook') {
                    $scope.facebook_link = loaded_parameters.data[i].valor;
                } else if (loaded_parameters.data[i].nome == 'endereco_feed_rss') {
                    $scope.rss_link = loaded_parameters.data[i].valor;
                }
            };
        };

        $scope.extrai_valores_redes_sociais();

        $scope.parameters = loaded_parameters.data;
        $scope.active_banners = active_banners.data;
        $scope.total_imoveis = total_imoveis.data.length;
        $scope.destaques = destaques.data;

        $scope.result = 'hidden';
        $scope.resultMessage = '';
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(callForm) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if (callForm.$valid) {
                $http({
                    method  : 'POST',
                    url     : 'bin/call_you.php',
                    data    : $.param($scope.formData),  //param method from jQuery
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-success';
                        //delete $scope.formData;
                        //$scope.formData = [];
                        $scope.callForm.$setPristine(true);
    			        $location.path("/home");
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-danger';
                    }
                });
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
                $scope.result='bg-danger';
            }
        }
        $scope.cleanForm = function(callForm) {
            $scope.submitted = false;
            $scope.result = 'hidden'
            $scope.resultMessage = '';
            $scope.submitButtonDisabled = false;
            //delete $scope.formData;
            //$scope.formData = [];
            $scope.callForm.$setPristine(true);
        }
    }
]);
