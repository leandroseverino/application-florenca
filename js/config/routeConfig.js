angular.module("appSite").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
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
        templateUrl: "view/empresa.html",
        controller: "empresaCtrl"
    });
    // Imóveis para venda
    $routeProvider.when("/casas-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Casas";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "casa";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/apartamentos-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Apartamentos";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "apartamento";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/box-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Box";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "box";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/terrenos-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Terrenos";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "terreno";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/lojas-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Lojas";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "loja";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/pavilhoes-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Pavilhoes";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "pavilhao";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/salas-comerciais-para-venda", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Vendas";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Salas Comerciais";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "venda";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "sala-comercial";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    // Imóveis para locação
    $routeProvider.when("/casas-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Casas";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "casa";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/apartamentos-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Apartamentos";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "apartamento";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/box-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Box";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "box";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/terrenos-areas-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Terrenos/Áreas";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "terreno";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/salas-comerciais-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Salas Comerciais";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "sala-comercial";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/lojas-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Lojas";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "loja";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
            }]
        }
    });
    $routeProvider.when("/pavilhoes-para-locacao", {
        templateUrl: "view/lista.html",
        controller: "imoveisCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            finalidade: ["parametroAPI", function (parametroAPI) {
                return "Locações";
            }],
            tipo_descricao: ["parametroAPI", function (parametroAPI) {
                return "Pavilhões";
            }],
            operacao: ["parametroAPI", function (parametroAPI) {
                return "locacao";
            }],
            tipo: ["parametroAPI", function (parametroAPI) {
                return "pavilhao";
            }],
            serviceAPI: ["imovelAPI", function(imovelAPI) {
                return imovelAPI;
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
        templateUrl: "view/cadastro-imovel.html",
        controller: "cadastroImovelCtrl"
    });
    $routeProvider.when("/contato", {
        templateUrl: "view/contato.html",
        controller: "contatoCtrl"
    });

    $routeProvider.when("/detalhe-imovel/:slug", {
        templateUrl: "view/detalhe-imovel.html",
        controller: "detalhesImovelCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                return parametroAPI.getParametros();
            }],
            imovel: ["detalhesImovelAPI", "$route", function (detalhesImovelAPI, $route) {
                return detalhesImovelAPI.getImovel($route.current.params.slug);
            }],
            imoveisRelacionados: ["detalhesImovelAPI", "$route", function (detalhesImovelAPI, $route) {
                return detalhesImovelAPI.getImoveisRelacionados($route.current.params.slug);
            }],
        }
    });
    $routeProvider.otherwise({redirectTo: "/home"});
    $locationProvider.html5Mode(true);
}]);
