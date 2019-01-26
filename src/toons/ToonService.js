(function(){
    'use strict';

    angular.module('toons')
        .service('toonService', ['$q', ToonService])
        .filter('decodeURIComponent', function($window) {
            return $window.decodeURIComponent;
        });

    function ToonService($q){
        var channel_id = 'UCRXnOs1rjfLMYrtZ-0n29NA';
        var page_token = '';
        var nextPageToken = '';

        function init() {
            console.log("starting init");
            var defer = $q.defer();
            if (gapi.client != undefined) {
                if (gapi.client.youtube != undefined) {
                    defer.resolve("");
                }
                else {
                    setTimeout(init, 500); // wait for 500 ms
                }
            }
            else {
                setTimeout(init, 500); // wait for 500 ms
            }
            return defer.promise;
        }

        // Search for a specified string.
        function search() {
            var q = '';
            console.log("Doing Youtube API call for list:");
            do {
                var request = gapi.client.youtube.search.list({
                    q: q,
                    part: 'snippet',
                    order: 'date',
                    channelId: channel_id,
                    pageToken: page_token,
                    maxResults: 50
                }).then(function (response) {
                    nextPageToken = response.result.nextPageToken;
                    page_token = nextPageToken;
                    console.log("successful search");
                    return [].concat(processResults(response.result.items));
                });
            } while (nextPageToken === 'asfasdfsaf')
        }

        function processResults(vids){
            return vids;
        };

        // Promise-based API
        return {
            loadAllToons : function() {

            }
        };
    }

})();
