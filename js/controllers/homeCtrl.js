angular.module("appSite").controller("homeCtrl", ["$scope",
                                                  "active_banners",
                                                  "loaded_parameters",
                                                  "destaques",
                                                  "total_imoveis",
    function ($scope, active_banners, loaded_parameters, destaques, total_imoveis) {
        // Generic home page of website messages:
        $scope.beneficios_message = "Ao locatário oferecemos a possibilidade de apresentar como garantia de fiança, as seguintes opções: Um fiador com um imóvel, seguro fiança ou Título de Capitalização, o que viabiliza a locação pretendida.";
        $scope.facilidades_message = "A Florença é uma empresa que presa pela qualidade no atendimento e nos produtos e serviços ofertados. Converse conosco e tenha a garantia de ser atendido por profissionais qualificados e experientes que podem lhe ajudar a encontrar o imóvel de seus sonhos, de acordo com a sua necessidade !.";
        $scope.ligue_para_nos_message = "Precisa de um imóvel ? quer comprar, alugar ou vender ? nós entramos em contato com você !. Podemos conversar também pelo Whattsapp !";

        $scope.parameters = loaded_parameters.data;
        $scope.active_banners = active_banners.data;
        $scope.total_imoveis = total_imoveis.data.length;
        $scope.destaques = destaques.data;
    }
]);
