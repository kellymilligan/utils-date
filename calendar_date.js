define([

    'moment'

], function (

    Moment

) {

    'use strict';

    /*
        Generate a formatted date using moment.js
        ---
        Format options: http://momentjs.com/docs/#/parsing/string-format/

        moment       Str       Date/Time date in a supported format (e.g. unix timestamp)
        format       Str       Format key for the supplied moment ('X' is default for unix timestamps)

    */

    return function ( moment, format ) {

        var CALENDAR_FORMAT = {
            'sameDay': '[Today]',
            'lastDay': '[Yesterday]',
            'lastWeek': '[Last] dddd',
            'sameElse': 'MM/DD/YYYY'
        };

        if ( moment === undefined ) {

            console.error( 'Calendar Date Util: No moment was passed as a parameter. The default is a Unix timestamp, e.g. Date.now()' );
            return;
        }

        format = format || 'X';

        // 'Calendar Time' formatting - http://momentjs.com/docs/#/displaying/calendar-time/
        var formattedDate = new Moment( moment, format ).calendar( null, CALENDAR_FORMAT );

        return formattedDate;
    };

});