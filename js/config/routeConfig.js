angular.module("appSite").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeCtrl",
        resolve: {
            loaded_parameters: ["parametroAPI", function (parametroAPI) {
                //return parametroAPI.getParametros();
                var _parameters = [
                    {endereco_facebook: "https://www.facebook.com/florencanegociosimobiliarios"},
                    {endereco_twitter: "#"},
                    {endereco_youtube: "#"},
                    {endereco_google_plus: "#"}
                ];
                return _parameters;
            }],
            active_banners: ["bannerAPI", function (bannerAPI) {

                var _retorno_api = [[],['Aconteceu um erro ao carregar os banners']];

                bannerAPI.getBanners().success(function (data) {
                    console.log(data);
                    _retorno_api[0] = data;
                    _retorno_api[1] = null;
                }).error(function (data, status) {
                    console.log("Aconteceu um problema no backend: " + data);
                });

                // _banners = [
                //     [
                //         {id: 1, src: "img/foto_10_1900x1080.jpg", caption: "Experiência no mercado imobiliário."},
                //         {id: 2, src: "img/foto_07_1900x1080.jpg", caption: "Atendimento personalizado."},
                //         {id: 3, src: "img/foto_11_1900x1080.jpg", caption: ""},
                //         {id: 4, src: "img/foto_12_1900x1080.jpg", caption: ""}
                //     ],
                //     null
                // ];

                _retorno_api[0] = [
                    {id: 1, src: "img/foto_10_1900x1080.jpg", caption: "Experiência no mercado imobiliário."},
                    {id: 2, src: "img/foto_07_1900x1080.jpg", caption: "Atendimento personalizado."},
                    {id: 3, src: "img/foto_11_1900x1080.jpg", caption: ""},
                    {id: 4, src: "img/foto_12_1900x1080.jpg", caption: ""}
                ];
                _retorno_api[1] = null;

                return _retorno_api;
            }],
            imoveis_in_destaq: ["destaqueAPI", function (destaqueAPI) {
                //return destaqueAPI.getDestaques();
                var _destaq_imoveis = [
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
                return _destaq_imoveis;
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
