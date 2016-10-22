angular.module("appSite").controller("empresaCtrl", ["$scope", "$http", "$location", "Upload", "$timeout", function ($scope, $http, $location, Upload, $timeout) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    }
    $scope.submit = function(empresaform) {
        $scope.submitted = true;
        console.log($scope.formData);
        console.log($scope.f);

        var fdata = new FormData();
        fdata.append("file", $scope.f);
        console.log('fdata');
        console.log(fdata);

        Object.keys($scope.formData).forEach(function(key) {
            console.log('dentro');
            console.log($scope.formData[key]);
            fdata.append(key, $scope.formData[key]);
        });

        if (empresaform.$valid) {
            $http({
                method  : 'POST',
                url     : 'bin/contact_me.php',
                data    : $.param(fdata),  // $scope.formData param method from jQuery
                headers : { 'Content-Type': 'undefined' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = 'Muito obrigado, dados enviados com sucesso !, aguarde nosso contato.';
                    $scope.result='bg-success';
                    delete $scope.formData;
                    $scope.formData = {};
                    $scope.empresaform.$setPristine();
			        $location.path("/empresa");
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = '[ SERVER ERROR COMUNICATION ] ' + data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = empresaform.$invalid;
            $scope.resultMessage = 'Por favor !, verifique os campos do formulário e tente novamente !.';
            $scope.result='bg-danger';

        }
    }
}]);
