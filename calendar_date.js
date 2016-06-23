define([

    'moment'

], function (

    Moment

) {

    'use strict';

    /*
     *  Get a formatted date using moment.js
     *
     *  @param moment - Time data (e.g. unix timestamp)
     *  @param format - Format key for the time data supplied ('X' is default for unix timestamps)
     *
     *  See http://momentjs.com/docs/#/parsing/string-format/ for format options
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