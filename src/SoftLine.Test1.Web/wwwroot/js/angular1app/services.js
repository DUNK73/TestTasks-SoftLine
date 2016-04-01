(function() {
    'use strict';

    var services = angular.module("SLTest.Services")
        .service('metadata', function() {

            this.fields = [
                 {
                     type: "text",
                     name: "fieldAa",
                     value: "value 1",
                     validationRules: {
                     }
                 },
                {
                    type: "text",
                    name: "fieldA",
                    value: "value 1",
                    validationRules: {
                        required: true,
                        minlength: 5,
                        maxlength: 8
                    }
                },
                {
                    type: "numeric",
                    name: "fieldB",
                    value: 123,
                    validationRules: {
                        required: true,
                        min: 5,
                        max: 8
                    }
                },
                {
                    type: "datepicker",
                    name: "fieldC",
                    value: new Date(),
                    validationRules: {
                        required: true
                    }
                },
                {
                    type: "money",
                    name: "fieldD",
                    currency: "USD",
                    validationRules: {
                        required: true,
                        min: 2,
                        max: 8
                    }
                },
                {
                    type: "money",
                    name: "fieldF",
                    currency: "EUR"
                },
                {
                    type: "drop-down",
                    name: "fieldE",
                    value: null,
                    options: [1, 2, 3, 4, 5, 6, 7],
                    validationRules: {
                        required: true
                    }
                }
            ];

        });
})();