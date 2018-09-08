(function(){
    'use strict';

    angular.module('toons')
        .service('toonService', ['$q', ToonService])
        .filter('decodeURIComponent', function($window) {
            return $window.decodeURIComponent;
        });

    function ToonService($q){
        var channel_id = 'UCRXnOs1rjfLMYrtZ-0n29NA';

        //var toons = [
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/FMCLWebW26vF-r3DUzIBXOhGf8w\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "qYAOKO3eE3M"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-07-07T17:55:53.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "What Libertarians Actually Believe: Stereotypes",
        //            "description": "http://freedomtoons.com http://patreon.com/freedomtoons http://freetomtoons.tip.me (I accept space nickles [bitcoin]) http://facebook.com/freedomtoons.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/qYAOKO3eE3M/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/qYAOKO3eE3M/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/qYAOKO3eE3M/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/rozoPBVQZws9gyiI6PbzQ1umRqY\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "dVouaFFMJiI"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-02-25T21:49:10.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "How to give a regressive a heart attack (feat. Mark Edge)",
        //            "description": "http://Patreon.com/freedomtoons Thanks to Mark Edge for playing the tolerant progressive. Thanks to Pat Oberle for animating the lip syncing and thanks to Chris ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/dVouaFFMJiI/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/dVouaFFMJiI/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/dVouaFFMJiI/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/si6Mv80T64uJb_mHIZN55RTlKsc\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "GaQRjKDfUFA"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-10-11T16:28:40.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "SCREW THE FIRST AMENDMENT???",
        //            "description": "This week two feminist leaders went to the UN to talk about cyber violence. This is how we feel about that. http://patreon.com/freedomtoons Free speech made ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/GaQRjKDfUFA/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/GaQRjKDfUFA/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/GaQRjKDfUFA/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/oZ5IL_37PaR-ZffrK3Iyl8Rftsw\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "VTlKfpt6tgU"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-08-04T16:39:58.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Fund Planned Parenthood you Anti-Feminist Woman Hater!",
        //            "description": "http://patreon.com/freedomtoons help me produce more content! The point of this video is NOT to convince you to be pro-life or pro-choice. The point is to ask a ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/VTlKfpt6tgU/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/VTlKfpt6tgU/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/VTlKfpt6tgU/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/5EcOSGGuDNRqb8kiMXLP0NZcFR4\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "eS36zOikcwY"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-04-28T18:04:51.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Huffington Post Has No Chill",
        //            "description": "Saw this absurd, tasteless huffpo video yesterday. Pat Oberle was willing to do the lip syncing so I was able to write and crank this out with him in about a day.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/eS36zOikcwY/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/eS36zOikcwY/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/eS36zOikcwY/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/vY-RHG2GCCSTiEDkTQvkfvNg0hU\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "MchxUdi0MO8"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-04-15T16:17:19.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "How Feminism Works",
        //            "description": "My video originally seen on \"That Guy T\"'s youtube channel! Sorry Im late with the upload! We have gained 800 new subs in the 24 hours since T uploaded it, ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/MchxUdi0MO8/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/MchxUdi0MO8/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/MchxUdi0MO8/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/GXyOPaUHDGH5RX9PHpoZgIezU2w\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "sujCgaVsHn4"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-17T22:06:56.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "\"Free\" Birth Control",
        //            "description": "patreon.com/freedomtoons Did yall miss Social Contractor? Well, he's back! http://Patreon.com/freedomtoons Thanks to Pat Oberle for animating the lip syncing ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/sujCgaVsHn4/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/sujCgaVsHn4/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/sujCgaVsHn4/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/jyfRDwm7QFXmV3DXeAOnaQrkJ2M\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "EfOPH9H6IEg"
        //        },
        //        "snippet": {
        //            "publishedAt": "2014-12-09T23:02:00.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "How American Democracy Works",
        //            "description": "special thanx 2 Leslee Frost :) Subscribe! http://FreedomToons.com http://www.patreon.com/FreedomToons.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/EfOPH9H6IEg/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/EfOPH9H6IEg/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/EfOPH9H6IEg/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/Gzhvq0xx28TDTDa_5-T7rRI8hgQ\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "rk2CRqYSveM"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-01-18T04:32:12.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Anita and The Patriarchy",
        //            "description": "Saw ABC do a story on #GamerGate so I had to make this. Thanks Leslee ;) https://www.patreon.com/freedomtoons http://freedomtoons.com.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/rk2CRqYSveM/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/rk2CRqYSveM/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/rk2CRqYSveM/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/oGKAmvh-HIxl48mgKZwqtNSDX6Y\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "DYlbEXM5Eqg"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-31T19:00:02.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "The Drug War",
        //            "description": "Ready to cringe?? Really though, you should probably watch the original \"Social Contractor\" videos first (They are still on the channel. First couple videos).",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/DYlbEXM5Eqg/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/DYlbEXM5Eqg/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/DYlbEXM5Eqg/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/UDEHx3FdKDeFc1G6BoMmaIvl9PU\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "QBcpiq-HUoM"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-04T16:29:16.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Emojis Are Misogyny?!?",
        //            "description": "I saw a video about misogynistic emojis so I pulled an all nighter making this. I hope you enjoy it. Patrons not charged for this one.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/QBcpiq-HUoM/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/QBcpiq-HUoM/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/QBcpiq-HUoM/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/xvLnUFjwszQoz6_zuat0X9rx6RM\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "D_nVEH2woBQ"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-10T21:27:18.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Income Inequality",
        //            "description": "patreon.com/freedomtoons Income Inequality: This is kinda what it looks like when Americans complain about it Thanks to Pat Oberle for animating the lip ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/D_nVEH2woBQ/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/D_nVEH2woBQ/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/D_nVEH2woBQ/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/POYq6uL-K30a9hyrwxBHQ90yVh0\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "htafiCywieU"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-24T23:03:53.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "How Regressives Discuss Radical Islam",
        //            "description": "http://patreon.com/freedomtoons Yes, we know there are many, MANY peaceful Muslims who are super cool people. And I also know many Priests who are ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/htafiCywieU/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/htafiCywieU/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/htafiCywieU/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/p8l6vONi3CLua2QFIGq1RBV_-8A\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "JaoT97f573M"
        //        },
        //        "snippet": {
        //            "publishedAt": "2014-10-02T03:08:31.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "How Government Works",
        //            "description": "Hey guys! Haven't uploaded anything in over a year, been super busy with lots of animation gigs. Enjoy! SUBSCRIB! Http://freedomtoons.com (Chaymsh)",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/JaoT97f573M/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/JaoT97f573M/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/JaoT97f573M/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/7RefbzkeOEjXK7Cxq_L8g_G7csQ\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "frEz9hNecN8"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-03-03T22:11:41.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Gendered Language 2.0!",
        //            "description": "Remember the old oppressive gendered language created by patriarchy to oppress you? Well this is the new and improved gendered language created my ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/frEz9hNecN8/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/frEz9hNecN8/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/frEz9hNecN8/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/j1Bg3vqVJgQnn4iLDeZM_-1owUk\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "7dS1l92G5Mw"
        //        },
        //        "snippet": {
        //            "publishedAt": "2014-11-20T16:23:26.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "HOW THE MEDIA WORKS",
        //            "description": "NOT ONE OF THEM IS A PUPPET! http://freedomtoons.com http://www.patreon.com/freedomtoons.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/7dS1l92G5Mw/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/7dS1l92G5Mw/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/7dS1l92G5Mw/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/H8KbCgR5nE9GH66_E_fhsIQ3T9M\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "7Mrer_Xf_gw"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-09-28T13:47:51.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "I officially non-sarcastically endorse Donald Trump I swear guise",
        //            "description": "Who would possible not want this man to be president? (actually watch before rating/commenting) http://Patreon.com/freedomtoons ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/7Mrer_Xf_gw/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/7Mrer_Xf_gw/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/7Mrer_Xf_gw/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/nPitxwXxMKNFY9iz1PVOU9FwdwU\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "0eb9_B9Jwug"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-04-30T22:40:45.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "What Libertarians Actually Believe: Habeas Corpus",
        //            "description": "Promo for my new kahtoon series about liberty and whatnot! SUBSCRIBE! http://freedomtoons.com http://patreon.com/freedomtoons.",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/0eb9_B9Jwug/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/0eb9_B9Jwug/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/0eb9_B9Jwug/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/fDcxcjDTnfSYVswoG3Jd1tykHR8\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "DE4C5qYuA_8"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-04-18T16:34:10.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "TRIGGER WARNING #TRUMP #HATECRIME SEEN AT #SCAD!!!!!!!!!1!!!!1!",
        //            "description": "OMG I WAS JUST WALKING TO AN EXTRA CURRICULAR GENDER STUDIES SEMINAR TO SOOTH MY INNER WOMYN AFTER ALL OF THE MISOGYNY I ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/DE4C5qYuA_8/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/DE4C5qYuA_8/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/DE4C5qYuA_8/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/dDuTWbsIHFe_vo2TCFCAubiDEIE\"",
        //        "id": {
        //            "kind": "youtube#channel",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA"
        //        },
        //        "snippet": {
        //            "publishedAt": "2012-04-10T01:25:58.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "FreedomToons",
        //            "description": "I'm Seamus and I make cartoons! Like my facebook page so you can get updates about developing cartoons at: https://facebook.com/FreedomToons Visit ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://yt3.ggpht.com/-tGqUlMgeuPo/AAAAAAAAAAI/AAAAAAAAAAA/0VOSTu_u0MA/s88-c-k-no-rj-c0xffffff/photo.jpg"
        //                },
        //                "medium": {
        //                    "url": "https://yt3.ggpht.com/-tGqUlMgeuPo/AAAAAAAAAAI/AAAAAAAAAAA/0VOSTu_u0MA/s240-c-k-no-rj-c0xffffff/photo.jpg"
        //                },
        //                "high": {
        //                    "url": "https://yt3.ggpht.com/-tGqUlMgeuPo/AAAAAAAAAAI/AAAAAAAAAAA/0VOSTu_u0MA/s240-c-k-no-rj-c0xffffff/photo.jpg"
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/o8d3rbWwSbnCzCXlfsIlwWxHuxo\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "rAerQw-z7Ok"
        //        },
        //        "snippet": {
        //            "publishedAt": "2015-04-14T17:37:14.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Update/Outdoor Libertarian",
        //            "description": "",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/rAerQw-z7Ok/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/rAerQw-z7Ok/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/rAerQw-z7Ok/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/VL1aG83tGksWOwS8s8vGe7rnZd8\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "qNuIfkIF-pE"
        //        },
        //        "snippet": {
        //            "publishedAt": "2013-05-25T18:31:50.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "XBOX DEAD!",
        //            "description": "",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/qNuIfkIF-pE/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/qNuIfkIF-pE/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/qNuIfkIF-pE/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/pG3_i7fNU1WKDHemgEuuyF1rV_c\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "xK3i3mugpGI"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-01-29T00:32:20.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "UPDATE VIDEO!!!!!!!!",
        //            "description": "",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/xK3i3mugpGI/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/xK3i3mugpGI/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/xK3i3mugpGI/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    },
        //    {
        //        "kind": "youtube#searchResult",
        //        "etag": "\"zekp1FB4kTkkM-rWc1qIAAt-BWc/hOYoTLgmC3Swk_esYCcUMo5YCuE\"",
        //        "id": {
        //            "kind": "youtube#video",
        //            "videoId": "CZ_8j9sJ-Zo"
        //        },
        //        "snippet": {
        //            "publishedAt": "2016-05-19T21:03:36.000Z",
        //            "channelId": "UCRXnOs1rjfLMYrtZ-0n29NA",
        //            "title": "Mainstream Media",
        //            "description": "Fear Mongering Left Wing Media Wonders Why You're Paranoid... http://patreon.com/freedomtoons http://facebook.com/freedomtoons THANKS SO MUCH TO ...",
        //            "thumbnails": {
        //                "default": {
        //                    "url": "https://i.ytimg.com/vi/CZ_8j9sJ-Zo/default.jpg",
        //                    "width": 120,
        //                    "height": 90
        //                },
        //                "medium": {
        //                    "url": "https://i.ytimg.com/vi/CZ_8j9sJ-Zo/mqdefault.jpg",
        //                    "width": 320,
        //                    "height": 180
        //                },
        //                "high": {
        //                    "url": "https://i.ytimg.com/vi/CZ_8j9sJ-Zo/hqdefault.jpg",
        //                    "width": 480,
        //                    "height": 360
        //                }
        //            },
        //            "channelTitle": "FreedomToons",
        //            "liveBroadcastContent": "none"
        //        }
        //    }
        //];

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
