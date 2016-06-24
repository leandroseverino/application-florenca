angular.module("appSite").controller("homeCtrl", ["$scope",
                                                  "active_banners",
                                                  "loaded_parameters",
                                                  "imoveis_in_destaq",
                                                  "destaques",
    function ($scope, active_banners, loaded_parameters, imoveis_in_destaq, destaques) {
        // Generic home page of website messages:
        $scope.welcome_message = "Seja bem vindo à Imobiliária Florença";
        $scope.como_alugar_message = "Ao locador a documentação necessária é a certidão atualizada do imóvel, comprovante de endereço, CPF e documento de identidade.";
        $scope.como_vender_message = "Se você deseja vender ou comprar um imóvel, assessoramos você neste processo, desde o momento da assinatura da autorização até a conclusão da venda.";
        $scope.beneficios_message = "Ao locatário oferecemos a possibilidade de apresentar como garantia de fiança, as seguintes opções: Um fiador com um imóvel, seguro fiança ou Título de Capitalização, o que viabiliza a locação pretendida.";
        $scope.facilidades_message = "A Florença é uma empresa que presa pela qualidade no atendimento e nos produtos e serviços ofertados. Converse conosco e tenha a garantia de ser atendido por profissionais qualificados e experientes que podem lhe ajudar a encontrar o imóvel de seus sonhos, de acordo com a sua necessidade !.";
        $scope.ligue_para_nos_message = "Precisa de um imóvel ? quer comprar, alugar ou vender ? nós entramos em contato com você !. Podemos conversar também pelo Whattsapp !";

        $scope.parameters = loaded_parameters;
        $scope.active_banners = active_banners[0];
        $scope.active_banners_error = active_banners[1];
        $scope.imoveis_in_destaq = imoveis_in_destaq;
        console.log("deu pau: " + destaques);
        $scope.destaques = destaques.data;
    }
]);
