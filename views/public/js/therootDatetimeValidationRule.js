define([
    'jquery',
    'moment',
    'jquery/ui',
    'jquery/validate',
    'mage/translate'
], function ($, moment) {
    'use strict';
    return function () {
        $.validator.addMethod(
            "therootdatetimevalidationrule",
            function (value, element) {
                return /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/\d\d\d\d\s([0-1]?[0-9]|2?[0-3]):([0-5]\d)$/.test(value);
            },
            $.mage.__("Please enter a valid date and time in this field.")
        );
        $.validator.addMethod(
            "theroot-not-grether-than-current-datetime",
            function (value, element) {
                if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]/.test(value)) {
                    if (moment(value).isSameOrBefore(moment())) {
                        return true;
                    }
                }
                return false;
            },
            $.mage.__("Please enter a valid date equal to or less than now")
        );
    }
});