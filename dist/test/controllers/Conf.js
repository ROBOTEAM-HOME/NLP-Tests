Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_BODY = {
    'id': '675389f8-f0f5-4dd9-8765-6408520f88fa',
    'timestamp': '2018-01-21T13:08:18.828Z',
    'lang': 'en',
    'status': {
        'code': 200,
        'errorType': 'success',
        'webhookTimedOut': false,
    },
    'sessionId': '6b2e20ab-3dd5-451f-b2b9-a77b4e221734',
};
// region full queries to compare with full expected results
exports.FULLQUERY_WHOIS_MADONNA = {
    "source": "agent",
    "resolvedQuery": "who is madonna",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "person": "madonna",
        "last_name2": "",
        "knowledge": "person",
        "given_name": "",
        "last_name": "",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "person.original": "madonna",
                "last_name2": "",
                "last_name2.original": "",
                "given_name.original": "",
                "last_name.original": "",
                "knowledge.original": "",
                "person": "madonna",
                "last_name": "",
                "given_name": "",
                "knowledge": "person"
            },
            "lifespan": 2
        }
    ],
    "metadata": {
        "intentId": "baa11ed3-6233-4fa5-8f29-e47954c85e77",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Person:who-is"
    },
    "fulfillment": {
        "speech": "I don't know who that is yet, but I'm still learning.",
        "messages": [
            {
                "type": 0,
                "speech": "I don't know who that is yet, but I'm still learning."
            }
        ]
    },
    "score": 1
};
exports.FULLQUERY_WHOIS_ALBERTEINSTEIN = {
    "source": "agent",
    "resolvedQuery": "who is albert einstein",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "person": "albert einstein",
        "last_name2": "",
        "knowledge": "person",
        "given_name": "",
        "last_name": "",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "person.original": "albert einstein",
                "last_name2": "",
                "last_name2.original": "",
                "given_name.original": "",
                "last_name.original": "",
                "knowledge.original": "",
                "person": "albert einstein",
                "last_name": "",
                "given_name": "",
                "knowledge": "person"
            },
            "lifespan": 2
        }
    ],
    "metadata": {
        "intentId": "baa11ed3-6233-4fa5-8f29-e47954c85e77",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Person:who-is"
    },
    "fulfillment": {
        "speech": "I don't know who that is yet, but I'm still learning.",
        "messages": [
            {
                "type": 0,
                "speech": "I don't know who that is yet, but I'm still learning."
            }
        ]
    },
    "score": 1
};
exports.FULLQUERY_WHOIS_BILLSMITH = {
    "source": "agent",
    "resolvedQuery": "who is bill smith",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "person": "bill smith",
        "last_name2": "",
        "knowledge": "person",
        "given_name": "",
        "last_name": "",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "person.original": "bill smith",
                "last_name2": "",
                "last_name2.original": "",
                "given_name.original": "",
                "last_name.original": "",
                "knowledge.original": "",
                "person": "bill smith",
                "last_name": "",
                "given_name": "",
                "knowledge": "person"
            },
            "lifespan": 2
        }
    ],
    "metadata": {
        "intentId": "baa11ed3-6233-4fa5-8f29-e47954c85e77",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Person:who-is"
    },
    "fulfillment": {
        "speech": "I don't know who that is yet, but I'm still learning.",
        "messages": [
            {
                "type": 0,
                "speech": "I don't know who that is yet, but I'm still learning."
            }
        ]
    },
    "score": 0.75
};
exports.FULLQUERY_WHOIS_POTUS = {
    "source": "agent",
    "resolvedQuery": "who is the president of the usa",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "leader": [
            "president"
        ],
        "geo_country": "United States of America",
        "company": "",
        "geo_city": "",
        "geo_state_us": "",
        "knowledge": "person.simple",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "leader": [
                    "president"
                ],
                "geo_city.original": "",
                "geo_state_us.original": "",
                "company.original": "",
                "knowledge.original": "",
                "geo_country.original": "usa",
                "geo_city": "",
                "geo_country": "United States of America",
                "geo_state_us": "",
                "company": "",
                "leader.original": "president",
                "knowledge": "person.simple"
            },
            "lifespan": 2
        }
    ],
    "metadata": {
        "intentId": "bcd5b892-6dc6-4077-9498-82d1dffde2b7",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Person:leader"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "type": 0,
                "speech": ""
            }
        ]
    },
    "score": 0.9836437471173937
};
exports.FULLQUERY_WHOIS_FASTESTMAN = {
    "source": "agent",
    "resolvedQuery": "who is the fastest man in the world",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "subject": "fastest man in the world",
        "knowledge": "person.simple",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge-person",
            "parameters": {
                "subject.original": "fastest man in the world",
                "knowledge.original": "",
                "subject": "fastest man in the world",
                "knowledge": "person.simple"
            },
            "lifespan": 5
        },
        {
            "name": "knowledge",
            "parameters": {
                "subject.original": "fastest man in the world",
                "subject": "fastest man in the world",
                "knowledge.original": "",
                "search_term": "chair",
                "search_term.original": "chair",
                "knowledge": "person.simple"
            },
            "lifespan": 98
        }
    ],
    "metadata": {
        "intentId": "debb96f4-7248-4a56-bce1-ea0d5c0e2a55",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Person:who-did"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "type": 0,
                "speech": ""
            }
        ]
    },
    "score": 0.8655292893150024
};
exports.FULLQUERY_WHATIS_CHAIR = {
    "source": "agent",
    "resolvedQuery": "what is a chair",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "search_term": "chair",
        "knowledge": "thing",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "knowledge.original": "",
                "search_term": "chair",
                "search_term.original": "chair",
                "knowledge": "thing"
            },
            "lifespan": 99
        }
    ],
    "metadata": {
        "intentId": "3e1bd8b6-1adf-45a3-a7d8-133efee3444c",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Thing:what-is"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "type": 0,
                "speech": ""
            }
        ]
    },
    "score": 0.8655292893150024
};
exports.FULLQUERY_WHATIS_COCACOLA = {
    "source": "agent",
    "resolvedQuery": "what is coca cola",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "search_term": "coca cola",
        "knowledge": "thing",
        "testrun": true
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "knowledge.original": "",
                "search_term": "coca cola",
                "search_term.original": "coca cola",
                "knowledge": "thing"
            },
            "lifespan": 99
        }
    ],
    "metadata": {
        "intentId": "3e1bd8b6-1adf-45a3-a7d8-133efee3444c",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Thing:what-is"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "type": 0,
                "speech": ""
            }
        ]
    },
    "score": 0.75
};
exports.FULLQUERY_DISTANCEFROMATOB = {
    "source": "agent",
    "resolvedQuery": "what's the distance from tokyo to new york in kilometers",
    "action": "knowledge",
    "actionIncomplete": false,
    "parameters": {
        "location1": {
            "admin-area": "Tokyo",
            "testrun": true
        },
        "location2": {
            "admin-area": "New York"
        },
        "landmark1": "",
        "landmark2": "",
        "knowledge": "geography.simple"
    },
    "contexts": [
        {
            "name": "knowledge",
            "parameters": {
                "knowledge.original": "",
                "location1.original": "tokyo",
                "location1": {
                    "admin-area": "Tokyo",
                    "admin-area.original": "tokyo",
                    "admin-area.object": {}
                },
                "landmark1.original": "",
                "landmark1": "",
                "location2": {
                    "admin-area": "New York",
                    "admin-area.original": "new york",
                    "admin-area.object": {}
                },
                "landmark2": "",
                "landmark2.original": "",
                "knowledge": "geography.simple",
                "location2.original": "new york"
            },
            "lifespan": 2
        }
    ],
    "metadata": {
        "intentId": "382b70aa-618d-4219-91d6-f6f6ce6173fc",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "Knowledge:Geography:distance"
    },
    "fulfillment": {
        "speech": "",
        "messages": [
            {
                "type": 0,
                "speech": ""
            }
        ]
    },
    "score": 0.9983325963462933
};
// endregion
// region expected results for the full queries
exports.GENERAL_WHAT_AGENT_IS_THIS_EXPECTED = {
    "id": "6b97ce43-97d6-4c29-8f50-52fb813c5c14",
    "timestamp": "2018-08-08T08:20:10.676Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "what agent is this",
        "action": "smalltalk",
        "actionIncomplete": false,
        "parameters": {},
        "contexts": [
            {
                "name": "genericskill_context",
                "parameters": {},
                "lifespan": 5
            }
        ],
        "metadata": {
            "intentId": "7bf16e4a-1426-4733-80f5-3990d44ab5c5",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Test:agent"
        },
        "fulfillment": {
            "speech": "Agent is temi_integration",
            "messages": [
                {
                    "type": 0,
                    "speech": "Agent is temi_integration"
                }
            ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.WEATHER_WEATHER_TODAY_EXPECTED = {
    "id": "87384347-3646-4539-8c1a-ac508c66074b",
    "timestamp": "2018-07-26T10:02:45.17Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "what's the weather today",
        "action": "weather",
        "actionIncomplete": false,
        "parameters": {
            "date_time": "2018-07-26",
            "address": "",
            "unit_temp": "",
            "temperature": ""
        },
        "contexts": [
            {
                "name": "weather",
                "parameters": {
                    "date_time": "2018-07-26",
                    "date_time.original": "today",
                    "temperature": "",
                    "unit_temp.original": "",
                    "temperature.original": "",
                    "address.original": ""
                },
                "lifespan": 99
            }
        ],
        "metadata": {
            "intentId": "561c7608-9f31-4bab-94e2-ce96feb9d5de",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Weather"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.GENERAL_SIMPLE_DISTANCE_EXPECTED = {
    "id": "c2a960e2-c178-4e68-9db1-997cb6140292",
    "timestamp": "2018-07-26T11:07:06.121Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "what's the distance from Tokyo to Berlin",
        "action": "knowledge",
        "actionIncomplete": false,
        "parameters": {
            "location1": {
                "admin-area": "Tokyo"
            },
            "location2": {
                "city": "Berlin"
            },
            "landmark1": "",
            "landmark2": "",
            "knowledge": "geography.simple"
        },
        "contexts": [
            {
                "name": "knowledge",
                "parameters": {
                    "knowledge.original": "",
                    "location1.original": "Tokyo",
                    "location1": {
                        "admin-area": "Tokyo",
                        "admin-area.original": "Tokyo",
                        "admin-area.object": {}
                    },
                    "landmark1.original": "",
                    "landmark1": "",
                    "location2": {
                        "city": "Berlin",
                        "city.original": "Berlin",
                        "city.object": {}
                    },
                    "landmark2": "",
                    "landmark2.original": "",
                    "knowledge": "geography.simple",
                    "location2.original": "Berlin"
                },
                "lifespan": 2
            }
        ],
        "metadata": {
            "intentId": "382b70aa-618d-4219-91d6-f6f6ce6173fc",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Knowledge:Geography:distance"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 0.9954933506735761
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.GENERAL_WHOIS_ALBERTEINSTEIN_EXPECTED = {
    "id": "69dadae0-7b2c-4ccd-b471-0045f960bb76",
    "timestamp": "2018-08-09T13:24:47.633Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "who is albert einstein",
        "action": "knowledge",
        "actionIncomplete": false,
        "parameters": {
            "person": "albert einstein",
            "last_name2": "",
            "knowledge": "person",
            "given_name": "",
            "last_name": ""
        },
        "contexts": [
            {
                "name": "knowledge",
                "parameters": {
                    "person.original": "albert einstein",
                    "last_name2": "",
                    "last_name2.original": "",
                    "given_name.original": "",
                    "last_name.original": "",
                    "knowledge.original": "",
                    "person": "albert einstein",
                    "last_name": "",
                    "given_name": "",
                    "knowledge": "person"
                },
                "lifespan": 2
            }
        ],
        "metadata": {
            "intentId": "baa11ed3-6233-4fa5-8f29-e47954c85e77",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Knowledge:Person:who-is"
        },
        "fulfillment": {
            "speech": "I don't know who that is yet, but I'm still learning.",
            "messages": [
                {
                    "type": 0,
                    "speech": "I don't know who that is yet, but I'm still learning."
                }
            ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.GENERAL_WHOIS_POTUS_EXPECTED = {
    "id": "e69f04fd-0822-46b2-909b-a013e08b21dd",
    "timestamp": "2018-08-09T13:47:47.935Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "who is the president of the USA",
        "action": "knowledge",
        "actionIncomplete": false,
        "parameters": {
            "leader": [
                "president"
            ],
            "geo_country": "United States of America",
            "company": "",
            "geo_city": "",
            "geo_state_us": "",
            "knowledge": "person.simple"
        },
        "contexts": [
            {
                "name": "knowledge",
                "parameters": {
                    "leader": [
                        "president"
                    ],
                    "geo_city.original": "",
                    "geo_state_us.original": "",
                    "company.original": "",
                    "knowledge.original": "",
                    "geo_country.original": "USA",
                    "geo_city": "",
                    "geo_country": "United States of America",
                    "geo_state_us": "",
                    "company": "",
                    "leader.original": "president",
                    "knowledge": "person.simple"
                },
                "lifespan": 2
            }
        ],
        "metadata": {
            "intentId": "bcd5b892-6dc6-4077-9498-82d1dffde2b7",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Knowledge:Person:leader"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 0.9836437471173937
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.EXPECTEDRESPONSE_WHOIS_ALBERTEINSTEIN = [{
        "version": "",
        "success": true,
        "userInput": "who is albert einstein",
        "spokenResult": "Here's some info for you: ",
        "resultsType": "full",
        "provider": {
            "name": "Wikipedia",
            "image": ""
        },
        "knowledgeResult": {
            "pages": [{
                    "title": "Albert Einstein",
                    "subtitle": "",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
                    "type": "overview",
                    "summary": "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science."
                }
            ]
        }
    }, {
        "version": "",
        "success": true,
        "userInput": "who is albert einstein",
        "spokenResult": "Here's some info for you: ",
        "resultsType": "full",
        "provider": {
            "name": "Wolfram Alpha",
            "image": ""
        },
        "knowledgeResult": {
            "pages": [{
                    "title": "Notable facts",
                    "facts": ["His investigations into the thermal properties of light laid the foundation of the photon theory of light", "Settled in the United States when Hitler came to power in Germany and became an American citizen in 1940", "Encouraged the United States to develop nuclear weapons, but later joined philosopher Bertrand Russell and other distinguished scientists to warn of their dangers", "Associated with the Institute for Advanced Study in Princeton, New Jersey"],
                    "type": "facts"
                }, {
                    "type": "info",
                    "title": "Basic information",
                    "table": {
                        "full name": "Albert Einstein",
                        "date of birth": "Friday, March 14, 1879 (139 years ago)",
                        "place of birth": "Ulm, Baden-Wurttemberg, Germany",
                        "date of death": "Monday, April 18, 1955 (age: 76 years), (63 years ago)",
                        "place of death": "Princeton, New Jersey"
                    }
                }
            ]
        }
    }
];
exports.VIDEO_NEXT_VIDEO = {
    "contexts": [],
    "lang": "en",
    "query": "go to the next video",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.RADIO_LOOK_FOR_MADONNA = {
    "contexts": [],
    "lang": "en",
    "query": "look for madonna",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.RADIO_LOOK_FOR_MADONNA_EXPECTED = {
    "id": "2238481d-755f-4e42-9e40-a8ac56ac3b67",
    "timestamp": "2018-07-26T11:03:43.166Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "look for madonna",
        "action": "radio.search",
        "actionIncomplete": false,
        "parameters": {
            "term": "madonna",
            "country": "",
            "language": "",
            "radio_type": "",
            "podcast_topic": "",
            "nearby": "",
            "sort_by": "",
            "app_name": "I heart radio"
        },
        "contexts": [
            {
                "name": "media",
                "parameters": {
                    "country": "",
                    "radio_type.original": "",
                    "term.original": "madonna",
                    "podcast_topic": "",
                    "language.original": "",
                    "country.original": "",
                    "nearby.original": "",
                    "language": "",
                    "sort_by": "",
                    "nearby": "",
                    "podcast_topic.original": "",
                    "app_name": "I heart radio",
                    "app_name.original": "",
                    "term": "madonna",
                    "sort_by.original": "",
                    "radio_type": ""
                },
                "lifespan": 99
            },
            {
                "name": "radio",
                "parameters": {
                    "country": "",
                    "radio_type.original": "",
                    "term.original": "madonna",
                    "podcast_topic": "",
                    "language.original": "",
                    "country.original": "",
                    "nearby.original": "",
                    "language": "",
                    "sort_by": "",
                    "nearby": "",
                    "podcast_topic.original": "",
                    "app_name": "I heart radio",
                    "app_name.original": "",
                    "term": "madonna",
                    "sort_by.original": "",
                    "radio_type": ""
                },
                "lifespan": 99
            }
        ],
        "metadata": {
            "intentId": "75bfd998-90dd-49fc-980e-00c1539f8643",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Radio:search"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 0.550000011920929
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.VIDEO_NEXT_VIDEO_EXPECTED = {
    "id": "245e3eb1-5e27-4dfe-8b06-44d2936e9145",
    "timestamp": "2018-07-26T10:51:56.04Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "go to the next video",
        "action": "robot.move.gotolocation.start",
        "actionIncomplete": false,
        "parameters": {
            "location": "next video"
        },
        "contexts": [
            {
                "name": "move",
                "parameters": {
                    "location.original": "next video",
                    "location": "next video"
                },
                "lifespan": 99
            }
        ],
        "metadata": {
            "intentId": "7af0063f-3622-4e23-b52b-8d4193b7b770",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Move:go-to-location"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 0.9403985389889412
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.VIDEO_NEXT_VIDEO_CTX = {
    "contexts": [{
            "name": "video",
            "parameters": {},
            "lifespan": 99
        }, {
            "name": "media",
            "parameters": {},
            "lifespan": 99
        }],
    "lang": "en",
    "query": "go to the next video",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.VIDEO_NEXT_VIDEO_CTX_EXPECTED = {
    "id": "1da2051c-2626-4f2d-ac97-d9947f43e4cc",
    "timestamp": "2018-07-26T10:26:40.472Z",
    "lang": "en",
    "result": {
        "source": "agent",
        "resolvedQuery": "go to the next video",
        "action": "video.next",
        "actionIncomplete": false,
        "parameters": {},
        "contexts": [
            {
                "name": "move",
                "parameters": {
                    "location.original": "next video",
                    "location": "next video"
                },
                "lifespan": 98
            },
            {
                "name": "video",
                "parameters": {},
                "lifespan": 99
            },
            {
                "name": "media",
                "parameters": {},
                "lifespan": 99
            }
        ],
        "metadata": {
            "intentId": "f241ecc7-bd95-44c7-a084-69436852d9cf",
            "webhookUsed": "false",
            "webhookForSlotFillingUsed": "false",
            "isFallbackIntent": "false",
            "intentName": "Video:next"
        },
        "fulfillment": {
            "speech": "",
            "messages": [
                {
                    "type": 0,
                    "speech": ""
                }
            ]
        },
        "score": 1
    },
    "status": {
        "code": 200,
        "errorType": "success"
    },
    "sessionId": "12345"
};
exports.EXPECTEDRESPONSE_WHOIS_BILLSMITH = [{
        "version": "",
        "success": true,
        "userInput": "who is bill smith",
        "spokenResult": "Here's some info for you: ",
        "resultsType": "full",
        "provider": {
            "name": "Bing",
            "image": ""
        },
        "knowledgeResult": {
            "pages": [{
                    "title": "Bill Smith",
                    "subtitle": "",
                    "image": "",
                    "type": "overview",
                    "summary": "Bill Smith was a British former Grand Prix motorcycle road racer. His specialty was road circuits such as the Isle of Man TT, the North West 200 and the Ulster Grand Prix."
                }
            ]
        }
    }, {
        "version": "",
        "success": true,
        "userInput": "who is bill smith",
        "spokenResult": "I'm not sure I found the right \"Bill Smith\", but here's my best guess:",
        "resultsType": "full",
        "provider": {
            "name": "Wolfram Alpha",
            "image": ""
        },
        "knowledgeResult": {
            "pages": [{
                    "type": "info",
                    "title": "Basic information",
                    "table": {
                        "full name": "William Smith",
                        "date of birth": "May 1936 (82 years ago)",
                        "place of birth": "United Kingdom",
                        "date of death": "September 2011 (age: 75 years), (6 years ago)",
                        "place of death": "United Kingdom"
                    }
                }
            ]
        }
    }];
exports.EXPECTEDRESPONSE_WHOIS_POTUS = {
    "version": "",
    "success": true,
    "userInput": "who is the president of the usa",
    "spokenResult": "Donald Trump .",
    "resultsType": "simple",
    "provider": {
        "name": "Wolfram Alpha",
        "image": ""
    },
    "knowledgeResult": {
        "pages": []
    },
    "textResult": "Donald Trump (from January 20, 2017 to present)."
};
exports.EXPECTEDRESPONSE_WHOIS_POTUS_DEV = {
    "version": "",
    "success": true,
    "userInput": "who is the president of the usa",
    "spokenResult": "Donald Trump from 20/01/2017 to present.",
    "resultsType": "simple",
    "provider": {
        "name": "Wolfram Alpha",
        "image": ""
    },
    "knowledgeResult": {
        "pages": []
    },
    "textResult": "Donald Trump from 20/01/2017 to present."
};
exports.EXPECTEDRESPONSE_WHOIS_FASTESTMAN = {
    "version": "",
    "success": true,
    "userInput": "who is the fastest man in the world",
    "spokenResult": "Usain Bolt.",
    "resultsType": "simple",
    "provider": {
        "name": "Wolfram Alpha",
        "image": ""
    },
    "knowledgeResult": {
        "pages": []
    },
    "textResult": "Usain Bolt."
};
exports.EXPECTEDRESPONSE_WHATIS_CHAIR = {
    "version": "",
    "success": true,
    "userInput": "what is a chair",
    "spokenResult": "Here's some info for you: ",
    "resultsType": "full",
    "provider": {
        "name": "Wikipedia",
        "image": ""
    },
    "knowledgeResult": {
        "pages": [{
                "title": "Chair",
                "subtitle": "",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/PostureFoundationGarments05fig3.png",
                "type": "overview",
                "summary": "A chair is a piece of furniture with a raised surface supported by legs, commonly used to seat a single person. Chairs are supported most often by four legs and have a back; however, a chair can have three legs or can have a different shape."
            }
        ]
    }
};
exports.EXPECTEDRESPONSE_WHATIS_COCACOLA = {
    "version": "",
    "success": true,
    "userInput": "what is coca cola",
    "spokenResult": "Here's some info for you: ",
    "resultsType": "full",
    "provider": {
        "name": "Bing",
        "image": ""
    },
    "knowledgeResult": {
        "pages": [{
                "title": "Coca-Cola",
                "subtitle": "",
                "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/500px-Coca-Cola_logo.svg.png",
                "type": "overview",
                "summary": "Coca-Cola, or Coke, is a carbonated soft drink produced by The Coca-Cola Company."
            }
        ]
    }
};
exports.EXPECTEDRESPONSE_DISTANCEFROMATOB = {
    "version": "",
    "success": true,
    "userInput": "what's the distance from tokyo to new york in kilometers",
    "spokenResult": "about 10879 kilometers.",
    "resultsType": "simple",
    "provider": {
        "name": "Wolfram Alpha",
        "image": ""
    },
    "knowledgeResult": {
        "pages": []
    },
    "textResult": "about 10879 kilometers."
};
// endregion
exports.WOLFRAM_FULL_KNOWLEDGE_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'who is albert einstein',
    'action': 'knowledge',
    'actionIncomplete': false,
    'parameters': {
        'person': 'albert einstein',
        'knowledge': 'person',
    },
    'contexts': [
        {
            'name': 'news',
            'parameters': {
                'country': '',
                'country.original': '',
                'sort': '',
                'category.original': '',
                'category': '',
                'sort.original': '',
            },
            'lifespan': 99,
        },
        {
            'name': 'video',
            'parameters': {
                'country': '',
                'app_name': 'youtube',
                'term.original': 'madonna',
                'country.original': '',
                'app_name.original': 'youtube',
                'term': 'madonna',
                'sort': '',
                'category.original': '',
                'category': '',
                'sort.original': '',
            },
            'lifespan': 98,
        },
        {
            'name': 'media',
            'parameters': {
                'country': '',
                'app_name': 'youtube',
                'term.original': 'madonna',
                'country.original': '',
                'app_name.original': 'youtube',
                'term': 'madonna',
                'sort': '',
                'category.original': '',
                'category': '',
                'sort.original': '',
            },
            'lifespan': 98,
        },
    ],
    'metadata': {
        'intentId': 'f371d8e8-1e19-48ed-bc54-aeb4ef1313e9',
        'webhookUsed': false,
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:Person:who-is',
    },
    'score': 1,
};
exports.WIKI_KNOWLEDGE_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'who is donald trump?',
    'action': 'knowledge',
    'actionIncomplete': false,
    'parameters': {
        'person': 'donald trump',
        'given-name1': [],
        'last-name1': '',
        'last-name2': '',
        'knowledge': 'person',
    },
    'metadata': {
        'intentId': 'f371d8e8-1e19-48ed-bc54-aeb4ef1313e9',
        'webhookUsed': false,
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:Person:who-is',
    },
};
exports.WOLFRAM_SIMPLE_KNOWLEDGE_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'what is the time in Israel',
    'action': 'knowledge',
    'actionIncomplete': false,
    'parameters': {
        'city': '',
        'country': 'Israel',
        'knowledge': 'time',
    },
    'metadata': {
        'intentId': 'de24bc04-bd86-403c-aad8-f98a35724cd4',
        'webhookUsed': 'false',
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:Time:what-is-the-time',
    },
    'score': 1,
};
exports.GENERAL_WHAT_AGENT_IS_THIS = {
    "contexts": [],
    "lang": "en",
    "query": "what agent is this",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.GENERAL_WHOIS_ALBERTEINSTEIN = {
    "contexts": [],
    "lang": "en",
    "query": "who is albert einstein",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.GENERAL_WHOIS_POTUS = {
    "contexts": [],
    "lang": "en",
    "query": "who is the president of the USA",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.GENERAL_SIMPLE_DISTANCE = {
    "contexts": [],
    "lang": "en",
    "query": "what's the distance from Tokyo to Berlin",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.WEATHER_WEATHER_TODAY = {
    "contexts": [],
    "lang": "en",
    "query": "what's the distance from Tokyo to Berlin",
    "sessionId": "12345",
    "timezone": "America/New_York"
};
exports.DEFAULT_FALLBACK_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'bla bla',
    'action': 'smalltalk',
    'actionIncomplete': false,
    'parameters': {},
    'contexts': [],
    'metadata': {
        'intentId': '9aef1f39-350e-4bc4-b8bf-d7ce7e0e3fd4',
        'webhookUsed': false,
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Default Fallback Intent',
    },
    'fulfillment': {
        'speech': 'I didn\'t get that.',
        'messages': [
            {
                'type': 0,
                'speech': 'I\'m not sure I know what you mean.',
            },
        ],
    },
    'score': 1,
};
exports.DEFAULT_FALLBACK_RESPONSE = {
    "speech": "I didn't get that.",
    "displayText": "I didn't get that.",
    "messages": [{
            "type": 0,
            "speech": "I didn't get that."
        }
    ],
    "data": {},
    "contextOut": [],
    "source": "",
    "followupEvent": {}
};
exports.YELP_FALLBACK_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'the best',
    'action': 'smalltalk',
    'actionIncomplete': false,
    'parameters': {},
    'contexts': [],
    'metadata': {
        'intentId': '35560f8d-8cf7-4a44-b83e-a44730ae1d64',
        'webhookUsed': 'false',
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Yelp:fallback',
    },
    'fulfillment': {
        'speech': 'Whoops, I don\'t think I heard you.',
        'messages': [
            {
                'type': 0,
                'speech': 'Whoops, I don\'t think I heard you.',
            },
        ],
    },
    'score': 1,
};
exports.YELP_FALLBACK_RESPONSE = {
    "speech": "Whoops, I don't think I heard you.",
    "displayText": "Whoops, I don't think I heard you.",
    "messages": [{
            "type": 0,
            "speech": "Whoops, I don't think I heard you."
        }
    ],
    "data": {},
    "contextOut": [],
    "source": "",
    "followupEvent": {}
};
exports.IMAGE_SEARCH_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'photos of arik einstein',
    'action': 'knowledge.search.image',
    'actionIncomplete': false,
    'parameters': {
        'term': 'arik einstein',
    },
    'contexts': [],
    'metadata': {
        'intentId': '81bde98f-c848-486c-bc41-05cc6106eccc',
        'webhookUsed': 'false',
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:image_search',
    },
};
exports.BING_KNOWLEDGE_RESULT = {
    'source': 'agent',
    'resolvedQuery': 'who is donald trump?',
    'action': 'bing',
    'actionIncomplete': false,
    'parameters': {
        'person': 'donald trump',
        'given-name1': [],
        'last-name1': '',
        'last-name2': '',
        'knowledge': 'bing.person',
    },
    'metadata': {
        'intentId': 'f371d8e8-1e19-48ed-bc54-aeb4ef1313e9',
        'webhookUsed': false,
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:Person:who-is',
    },
};
exports.WRONG_INTENT_KNOWLEDGE_RESULT = {
    'resolvedQuery': 'wrong intent',
    'action': 'knowledge.wrong.intent',
    'actionIncomplete': false,
    'parameters': {
        'user_rejection': '',
    },
    'metadata': {
        'intentId': 'e72882b5-34b0-4238-9c5d-6f6e3615f7ca',
        'webhookUsed': 'false',
        'webhookForSlotFillingUsed': 'false',
        'intentName': 'Knowledge:wrong-intent',
    },
    'fulfillment': {
        'speech': 'I\'m sorry, I\'m still learning new things all the time.',
        'messages': [
            {
                'type': 0,
                'speech': 'I\'m sorry. I\'ll try to do better next time.',
            },
        ],
    },
};
//# sourceMappingURL=Conf.js.map