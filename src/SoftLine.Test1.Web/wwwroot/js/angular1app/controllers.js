(function () {
    "use strict";

    var app = angular.module("SLTest.Controllers")
        .controller("ContactsController", function ($scope, $rootScope, $http) {
            $scope.model = {
                list: []
            };

            // #region обработка событий

            $rootScope.$on("SaveContactsController.ModelUtils.save:success", function(event, model) {
                 loadData();
            });

            // #endregion

            $scope.ListUtils = {
                saveShow: function(item) {
                    $rootScope.$broadcast("ContactsController.ListUtils.saveShow:start", item);
                    $('#myModal').modal('show');
                },
                remove: function(item) {
                    $http.post("/Contact/DeleteContact",item).then(
                    function (response) {
                        loadData();
                    });
                }
            }

            var loadData = function () {
                $http.get("/Contact/Contacts").then(
                    function (response) {
                        $scope.model.list = response.data;
                    });
            }

            // init
            loadData();

            //$rootScope.$broadcast("setTab", 0);

        })
        .controller("SaveContactsController", function ($scope, $rootScope, $http) {

            $scope.model = {
                Model: {}
            };
            
            $scope.ModelUtils = {

                loadData: function (item) {
                    $http.get("/Contact/SaveContact", {
                        params: {id : (item && item.Id) ? item.Id : 0}
                    }).then(function(response) {
                        $scope.model.Model = response.data;
                    });
                },

                save: function(item) {
                    $http.post("/Contact/SaveContact", $scope.model.Model)
                        .then(function (response) {
                            $scope.model.Model = response.data;
                            $rootScope.$broadcast("SaveContactsController.ModelUtils.save:success");
                            $('#myModal').modal('hide');
                        });
                }
            }

            // #region обработка событий

            $rootScope.$on("ContactsController.ListUtils.saveShow:start", function (event,item) {
                $scope.ModelUtils.loadData(item);
            });

            // #endregion

        });

})();