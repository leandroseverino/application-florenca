angular.module("appSite").controller("homeCtrl", ["$scope", "active_banners", "$http", function ($scope, active_banners, $http) {
    // Generic home page of website messages:
    $scope.welcome_message = "Seja bem vindo à Imobiliária Florença";
    $scope.como_alugar_message = "Ao locador a documentação necessária é a certidão atualizada do imóvel, comprovante de endereço, CPF e documento de identidade.";
    $scope.como_vender_message = "Se você deseja vender ou comprar um imóvel, assessoramos você neste processo, desde o momento da assinatura da autorização até a conclusão da venda.";
    $scope.beneficios_message = "Ao locatário oferecemos a possibilidade de apresentar como garantia de fiança, as seguintes opções: Um fiador com um imóvel, seguro fiança ou Título de Capitalização, o que viabiliza a locação pretendida.";
    $scope.facilidades_message = "A Florença é uma empresa que presa pela qualidade no atendimento e nos produtos e serviços ofertados. Converse conosco e tenha a garantia de ser atendido por profissionais qualificados e experientes que podem lhe ajudar a encontrar o imóvel de seus sonhos, de acordo com a sua necessidade !.";
    $scope.ligue_para_nos_message = "Precisa de um imóvel ? quer comprar, alugar ou vender ? nós entramos em contato com você !. Podemos conversar também pelo Whattsapp !";

    // Specific lists of home page:

    $scope.parameters = [];

    var loadParameters = function () {
        // $http.get("http://localhost:3412/contatos").success(function (data) {
        bannerAPI.getBanners().success(function (data) {
            $scope.parameters = data;
        }).error(function (data, status) {
            console.log("Aconteceu um problema no backend: " + data);
            $scope.message = "Aconteceu um problema no backend: " + data;
        });
    };


    $scope.active_banners = active_banners;

    var loadBanners = function () {
        // $http.get("http://localhost:3412/contatos").success(function (data) {
        bannerAPI.getBanners().success(function (data) {
            $scope.active_banners = data;
        }).error(function (data, status) {
            console.log("Aconteceu um problema no backend: " + data);
            $scope.message = "Aconteceu um problema no backend: " + data;
        });
    };

    $scope.imoveis_in_destaq = [];

    $scope.imoveis_in_destaq = [
        {id:"1", href: "#", code: "A 04.02", title: "<p>Apartamento com 1 dormit&oacute;rio, sala, cozinha, &aacute;rea de servi&ccedil;o, banheiro e Box para carro.</p>", src: "https://lh6.googleusercontent.com/-LmZEYBVNVwE/UPb-qMavopI/AAAAAAAADNQ/v6hSQukTLvg/s576/DSC05073.JPG"},
        {id:"2", href: "#", code: "L 02.01", title: "<p>Sal&atilde;o grande com banheiro.</p>", src: "https://lh4.googleusercontent.com/-P6zH-jR1yDU/Ty84bsy66NI/AAAAAAAABzk/B2xIZTXJOtw/s576/DSC02211.JPG"},
        {id:"3", href: "#", code: "J 13.09", title: "<p>Duas lojas Comercias, medido aproximadamente 70 m&sup2;&nbsp;</p>", src: "https://lh5.googleusercontent.com/-5PfutR-HzEg/VIskPveNyJI/AAAAAAAAH90/ZIPWfJlj1R8/w576-h300-no/DSC09829.JPG"},
        {id:"4", href: "#", code: "F 01.01", title: "<p>Apartamento com 2 dormit&oacute;rios, banheiro, sala, cozinha ampla, sala de jantar, &aacute;rea de servi&ccedil;o e sacada.</p>", src: "https://lh6.googleusercontent.com/-URRhVCdbVxI/TpSIGDplcYI/AAAAAAAAA8Q/PiR3EKcp8ko/s576/Site.JPG"},
        {id:"5", href: "#", code: "G 01.02", title: "<p>Sala n&deg;. 703 Fundos, com 41,86 m&sup2; e um banheiro.</p>", src: "https://lh6.googleusercontent.com/-aejR4kawSFY/UP7kNvUtG9I/AAAAAAAADVs/vk_ZUf_GxbA/s576/DSC02508.JPG"},
        {id:"6", href: "#", code: "S 04.01", title: "<p>Apartamento com &aacute;rea total de 119.715 m&sup2;, e &aacute;rea privativa de 97.794 m&sup2;, localizado no 3&ordm; pavimento, com elevador. Possui 2 dormit&oacute;rios, sala ampla, cozinha, 2 banheiros, &aacute;rea de servi&ccedil;o, depend&ecirc;ncia de empregada, sacada e Box coberto na garagem com 24.360 m&sup2;.</p>", src: "https://lh6.googleusercontent.com/-k9MpPAlHNTs/UOsN8WoJHkI/AAAAAAAADFw/CLJSaDmz7Tc/s576/DSC03494.JPG"},
        {id:"7", href: "#", code: "L 05.01", title: "<p>SALA COMERCIAL com 30 m&sup2; e um Banheiro</p>", src: "https://lh5.googleusercontent.com/-5hrroRGSUgg/Ticn4kzz6KI/AAAAAAAAAWg/5hOHkJ8EGl0/DSC00090.JPG"},
        {id:"9", href: "#", code: "J 02.00", title: "<p>Apartamento n&deg;.201, &nbsp;Fundos com 2 dormit&oacute;rios, sala, cozinha, &aacute;rea de servi&ccedil;o, banheiro <span style=''font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 28px;>e garagem coberta.</span></p><p>&nbsp;</p>", src: "https://lh6.googleusercontent.com/-D6-SY5WnnGI/US-uGlY892I/AAAAAAAADi8/IpNBNB7Emj0/s576/DSC05613.JPG"},
        {id:"10", href: "#", code: "M 01.01", title: "<p>Apartamento &Aacute;rea privativa: 2 Dormit&oacute;rios, 1 Banheiro, Sala, Cozinha, &Aacute;rea de servi&ccedil;o e Garagem para 1 carro coberta. &Aacute;rea social: P&aacute;tio com Brinquedos, Portaria 24h, Sal&atilde;o de festas e Quadra de Esportes.</p>", src: "https://lh5.googleusercontent.com/-MDNn3KfvixE/TlaeY-pzDGI/AAAAAAAAAuk/rU-Y8Q5HKYU/C%2525C3%2525B3pia%252520de%252520C%2525C3%2525B3pia%252520de%252520DSC00662.JPG"}
    ];

    //loadParametros();
    //loadBanners();
    //loadDestaques();

}]);
