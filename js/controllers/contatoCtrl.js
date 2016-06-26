angular.module("appSite").controller("contatoCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'bin/contact_me.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log("Dados retornados no PHP: " + data);
                if (data.success) { //success comes from the return json object
                    console.log("SUCCESS");
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    console.log(data.message);
                    $scope.result='bg-success';
                } else {
                    console.log("FALHA");
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    console.log(data.message);
                    $scope.result='bg-danger';
                }
            });
        } else {
            console.log("FORM INVÁLIDO !");
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
}]);
