angular.module("appSite").config(["$routeProvider", function ($routeProvider) {
    console.log("1");
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeCtrl",
        resolve: {
            parameters: ["parametroAPI", function (parametroAPI) {
                //return parametroAPI.getParametros();
                console.log("2");
                return [];
            }],
            active_banners: ["bannerAPI", function (bannerAPI) {
                var _banners = [
                    {id: 1, src: "img/foto_10_1900x1080.jpg", caption: "Experiência no mercado imobiliário."},
                    {id: 2, src: "img/foto_07_1900x1080.jpg", caption: "Atendimento personalizado."},
                    {id: 3, src: "img/foto_11_1900x1080.jpg", caption: ""},
                    {id: 4, src: "img/foto_12_1900x1080.jpg", caption: ""}
                ];
                console.log("3");
                //return bannerAPI.getBanners();
                return _banners;
            }],
            imoveis_in_destaq: ["destaqueAPI", function (destaqueAPI) {
                //return destaqueAPI.getDestaques();
                console.log("4");
                return [];
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
        templateUrl: "view/contato.html"
    });

    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: ["contatosAPI", "$route", function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }]
        }
    });
    $routeProvider.otherwise({redirectTo: "/home"});
}]);
