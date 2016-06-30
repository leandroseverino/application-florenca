angular.module("appSite").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            active_banners: ["bannerAPI", function (bannerAPI) {
                return bannerAPI.getBanners();
            }],
            total_imoveis: ["totalImovelAPI", function(totalImovelAPI) {
                return totalImovelAPI.getTotalImoveis();
            }],
            destaques: ["destaqueAPI", function(destaqueAPI) {
                return destaqueAPI.getDestaques();
            }]
        }
    });
    $routeProvider.when("/empresa", {
        templateUrl: "view/empresa.html"
    });
    // Imóveis para venda
    $routeProvider.when("/casas-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Casas";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/apartamentos-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Apartamentos";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/terrenos-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Terrenos";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/lojas-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Lojas";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/pavilhoes-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Pavilhoes";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/salas-comerciais-para-venda", {
        templateUrl: "view/casas-para-venda.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Salas Comerciais";
            }],
            imoveis: ["imovelVendaAPI", function(imovelVendaAPI) {
                return imovelVendaAPI.getImoveis();
            }]
        }
    });
    // Imóveis para locação
    $routeProvider.when("/casas-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Casas";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/apartamentos-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Apartamentos";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/terrenos-areas-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Terrenos/Áreas";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/salas-comerciais-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Salas Comerciais";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/lojas-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Lojas";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/pavilhoes-para-locacao", {
        templateUrl: "view/casas-para-locacao.html",
        controller: "imoveisCtrl",
        resolve: {
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "Pavilhões";
            }],
            imoveis: ["imovelLocacaoAPI", function(imovelLocacaoAPI) {
                return imovelLocacaoAPI.getImoveis();
            }]
        }
    });
    $routeProvider.when("/como-vender", {
        templateUrl: "view/como-vender.html"
    });
    $routeProvider.when("/como-alugar", {
        templateUrl: "view/como-alugar.html"
    });
    $routeProvider.when("/cadastro-imovel", {
        templateUrl: "view/cadastro-imovel.html"
    });
    $routeProvider.when("/contato", {
        templateUrl: "view/contato.html",
        controller: "contatoCtrl"
    });

    $routeProvider.when("/detalhe-imovel/:slug", {
        templateUrl: "view/detalhe-imovel.html",
        controller: "detalhesImovelCtrl",
        resolve: {
            imovel: ["detalhesImovelAPI", "$route", function (detalhesImovelAPI, $route) {
                console.log("========== ID ========= " + $route.current.params.slug);
                return detalhesImovelAPI.getImovel($route.current.params.slug);
            }]
        }
    });

    $routeProvider.otherwise({redirectTo: "/home"});
}]);
