(function () {
    'use strict';

    angular.module('toons')
        .service('googleApiService', ['$q', GoogleApiService]);

    function GoogleApiService($q) {

        // The client ID is obtained from the {{ Google Cloud Console }}
        // at {{ https://cloud.google.com/console }}.
        // If you run this code from a server other than http://localhost,
        // you need to register your own client ID.
        var OAUTH2_CLIENT_ID = 'freedomtoons-1315';
        var PROJECT_NUMBER = '682804503639';
        var PROJECT_ID = '682804503639';
        var YOUTUBE_DATA_KEY = 'AIzaSyA0l5XFr4ellwAHn59HKh3AnT4hKanb7OM';
        var OAUTH2_SCOPES = [
            'https://www.googleapis.com/auth/youtube'
        ];

        // Prime Promise
        var deferred = $q.defer();

        this.googleApiClientReady = function () {
            gapi.client.setApiKey(YOUTUBE_DATA_KEY);
            gapi.client.load('youtube', 'v3', function () {
                var request = gapi.client.youtube.playlistItems.list({
                    part: 'snippet',
                    playlistId: 'PLila01eYiSBjOtR8oqXkY0i5c1QS6k2Mu',
                    maxResults: 8
                });
                request.execute(function (response) {
                    deferred.resolve(response.result);
                });
            });
            return deferred.promise;
        };

        return {
            loadGoogleAPI : function(){
                return deferred.promise;
            }
        }
    }
})();
