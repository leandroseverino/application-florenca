angular.module("appSite").config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "homeCtrl",
        resolve: {
            parameters: function (parametroAPI) {
                //return parametroAPI.getParametros();
                return [];
            },
            active_banners: function (bannerAPI) {
                var _banners = [
                    {id: 1, src: "img/foto_10_1900x1080.jpg", caption: "Experiência no mercado imobiliário."},
                    {id: 2, src: "img/foto_07_1900x1080.jpg", caption: "Atendimento personalizado."},
                    {id: 3, src: "img/foto_11_1900x1080.jpg", caption: ""},
                    {id: 4, src: "img/foto_12_1900x1080.jpg", caption: ""}
                ];
                //return bannerAPI.getBanners();
                return _banners;
            },
            imoveis_in_destaq: function (destaqueAPI) {
                //return destaqueAPI.getDestaques();
                return [];
            }
        }
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({redirectTo: "/"});
});
