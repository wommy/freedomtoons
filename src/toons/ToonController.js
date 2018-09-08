(function () {
    angular
        .module('toons')
        .controller('ToonController', [
            '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$scope', '$window', '$http', '$mdMedia', '$mdDialog', '$route',
            ToonController
        ])
        .controller('FreedomLinksController', [
            '$scope',
            FreedomLinksController
        ])
        .controller('VideoPlayerController', [
            '$mdBottomSheet', '$log', '$q', '$scope',
            VideoPlayerController
        ])
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['**']);
        });

    function ToonController($mdSidenav, $mdBottomSheet, $log, $q, $scope, $window, $http, $mdMedia, $mdDialog) {
        console.log("starting controller");

        var self = this;

        self.selected = null;
        self.toons = [];
        self.selectToon = selectToon;
        self.toggleMenu = toggleMenu;

        self.filter_chips = [];

        $scope.loading = false;
        $scope.nextPageToken = '';
        $scope.prevPageToken = '';
        var YOUTUBE_DATA_KEY = 'AIzaSyA0l5XFr4ellwAHn59HKh3AnT4hKanb7OM';
        var channel_id = 'UCRXnOs1rjfLMYrtZ-0n29NA';

        $scope.isNewQuery = true;
        $scope.data = '';

        $scope.grid_mouse_hover = false;

        $scope.showAdvanced = function (ev, selected) {
            $scope.selected = selected;
            console.log(selected);
            $log.info(selected);
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
            $mdDialog.show({
                    controller: VideoPlayerController,
                    templateUrl: 'src/toons/view/videoPlayer.html',
                    parent: angular.element(document.body),
                    scope: $scope,
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function () {
                }, function () {
                });
        }

            $scope.search = function () {
                $scope.loading = true;
                $http.get('https://www.googleapis.com/youtube/v3/search', {
                        params: {
                            key: YOUTUBE_DATA_KEY,
                            type: 'video',
                            maxResults: '30',
                            channelId: channel_id,
                            pageToken: $scope.nextPageToken,
                            part: 'id,snippet',
                            order: 'date',
                            fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/high,items/snippet/channelTitle, nextPageToken',
                            q: this.query
                        }
                    })
                    .success(function (data) {
                        if (data.items.length === 0) {
                            $scope.label = 'No results were found!';
                        }
                        //VideosService.listResults(data, $scope.nextPageToken && !isNewQuery);
                        $scope.isNewQuery = false;
                        $scope.prevPageToken = $scope.nextPageToken;
                        $scope.nextPageToken = data.nextPageToken;
                        $log.info(data);
                        $scope.data = data.items;

                    })
                    .error(function () {
                        $log.info('Search error');
                    })
                    .finally(function () {
                        //$scope.loadMoreButton.stopSpin();
                        //$scope.loadMoreButton.setDisabled(false);
                        $scope.loading = false;
                    })
                ;
            };


            function selectToon(toon) {
                self.selected = angular.isNumber(toon) ? $scope.toons[toon] : toon;
            }

            function toggleMenu() {
                $mdSidenav('left').toggle();
            }

            $scope.search();
        }


        function VideoPlayerController($mdBottomSheet, $log, $q, $scope){
            $scope.getSelectedVideoUrl = function() {
                return "https://www.youtube.com/embed/" + $scope.selected.id.videoId;
            }

            $scope.get_next_toon = function () {
                self.selected++;
            }

            $scope.get_prev_toon = function () {
                self.selected--;
            }
        }

        function FreedomLinksController($scope){
            $scope.alt_image = "http://img.youtube.com/vi/CZ_8j9sJ-Zo/hqdefault.jpg";
            $scope.links = [
                {
                    "image" : "http://thelibertarianrepublic.com/wp-content/uploads/2015/02/logo2.png",
                    "title" : "Liberty Republic",
                    "subtitle": "",
                    "url" : "http://thelibertarianrepublic.com/",
                    "desc" : [""],
                    "facebook":"https://www.facebook.com/libertarianrepublic/",
                    "twitter":"https://twitter.com/TheLibRepublic",
                    "youtube":"https://www.youtube.com/channel/UCrGNgKKJR3EFFyNZumL9ZuQ",
                    "patreon": ""
                },
                {
                    "image" : "https://pbs.twimg.com/profile_images/716006448149364736/WPqrzO8i_400x400.jpg",
                    "title" : "Learn Liberty",
                    "subtitle": "",
                    "url" : "http://www.learnliberty.org/",
                    "desc" : [""],
                    "facebook":"https://www.facebook.com/LearnLiberty/",
                    "twitter":"https://twitter.com/learnliberty",
                    "youtube":"https://www.youtube.com/user/LearnLiberty",
                    "patreon": ""

                },
                {
                    "image" : "https://fee.org/media/15394/facebook_square_logo_960px.png?anchor=center&mode=crop&height=287&widthratio=1.3937282229965156794425087108&rnd=131110138270000000",
                    "title" : "FEE",
                    "subtitle": "Foundation for Economic Education",
                    "url" : "https://fee.org",
                    "desc" : [""],
                    "facebook":"",
                    "twitter":"https://twitter.com/feeonline",
                    "youtube":"",
                    "patreon": ""
                },
                {
                    "image" : "https://pbs.twimg.com/profile_images/378800000642253765/e02acff77314a8381e710c3a6fbe71c5_400x400.jpeg",
                    "title" : "Free To Choose",
                    "subtitle": "",
                    "url" : "http://www.freetochoose.tv/",
                    "desc" : [""],
                    "facebook":"",
                    "twitter":"",
                    "youtube":"",
                    "patreon": ""
                },
                {
                    "image" : "https://dev.ij.org/wp-content/uploads/2015/06/ij_logo_512.png",
                    "title" : "Institute for Justice",
                    "subtitle": "",
                    "url" : "http://ij.org/",
                    "desc" : [
                        "The Institute for Justice is the National Law Firm for Liberty."
                    ],
                    "facebook":"",
                    "twitter":"",
                    "youtube":"",
                    "patreon": ""
                },
                {
                    "image" : "data:image/png;base64,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",
                    "title" : "FIRE",
                    "subtitle": "Foundation For Individual Rights in Education",
                    "url" : "https://www.thefire.org/",
                    "desc" : [""],
                    "facebook":"",
                    "twitter":"",
                    "youtube":"",
                    "patreon": ""
                },
            ];
        }

    }

    )();