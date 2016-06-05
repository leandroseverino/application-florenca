angular.module("homeSite").controller("homeCtrl", function ($scope, $http) {
    // Generic home page of website messages:
    $scope.welcome_message = "Seja bem vindo à Imobiliária Florença";
    $scope.como_alugar_message = "Ao locador a documentação necessária é a certidão atualizada do imóvel, comprovante de endereço, CPF e documento de identidade.";
    $scope.como_vender_message = "Se você deseja vender ou comprar um imóvel, assessoramos você neste processo, desde o momento da assinatura da autorização até a conclusão da venda.";
    $scope.beneficios_message = "Ao locatário oferecemos a possibilidade de apresentar como garantia de fiança, as seguintes opções: Um fiador com um imóvel, seguro fiança ou Título de Capitalização, o que viabiliza a locação pretendida.";
    $scope.facilidades_message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.";
    $scope.ligue_para_nos_message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.";

    // Specific lists of home page:

    $scope.active_banners = [];

    var loadBanners = function () {
        $http.get("http://localhost:3412/contatos").success(function (data) {
            $scope.active_banners = data;
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });
    };

    $scope.imoveis_in_destaq = [];

    var loadDestaques = function () {
        $http.get("http://localhost:3412/contatos").success(function (data) {
            $scope.active_banners = data;
        }).error(function (data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });

    };

    $scope.active_banners = [
        {src: "img/foto_08_1900x1080.jpg", caption: "Experiência no mercado imobiliário."},
        {src: "img/foto_02_1900x1080.jpg", caption: "Departamento jurídico próprio."},
        {src: "img/foto_07_1900x1080.jpg", caption: "Atendimento personalizado."}
    ];
    $scope.imoveis_in_destaq = [
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_01_700x450.jpg"},
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_02_700x450.jpg"},
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_03_700x450.jpg"},
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_04_700x450.jpg"},
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_05_700x450.jpg"},
        {href: "casa_venda_001.html", code: "C001", title: "Casa de 01 de Dormitório em Canoas.", src: "img/foto_06_700x450.jpg"}
    ];

    //loadBanners();
    //loadDestaques();

});
