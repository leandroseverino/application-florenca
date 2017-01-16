angular.module("appSite").controller("cadastroImovelCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    // setup editor options
    $scope.editorOptions = {
        language: 'en',
        uiColor: '#ffffff'
    };
    $scope.$on("ckeditor.ready", function( event ) {
        $scope.isReady = true;
    });
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(cadastroImovelForm) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (cadastroImovelForm.$valid) {
            $http({
                method  : 'POST',
                url     : 'bin/cadastro_imovel.php',
                data    : $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data){
                if (data.success) {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = 'Muito obrigado, dados enviados com sucesso !, aguarde nosso contato.';
                    $scope.result='bg-success';
                    delete $scope.formData;
                    $scope.formData = {};
                    $scope.empresaForm.$setPristine();
			        $location.path("/cadastro-imovel");
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = '[ SERVER ERROR COMUNICATION ] ' + data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = cadastroImovelForm.$invalid;
            $scope.resultMessage = 'Por favor !, verifique os campos do formulário e tente novamente !.';
            $scope.result='bg-danger';
        }
    }
}]);
