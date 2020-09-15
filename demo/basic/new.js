$(function () {
    const CONTENT_TYPE = 'content';
    const SECTION_TYPE = 'section';
    const MESSAGE_TYPE = 'message';

    const UNATTACHED_ROOT_ID = 'root';
    const UNATTACHED_SECTIONS_ID = 'unattachedSections';
    const UNATTACHED_CONTENT_ID = 'unattachedContent';
    const UNATTACHED_MESSAGES_ID = 'unattachedMessages';


    //const CONTEXT_MENU_VIEW_URL = window.property.getProperty('contentMenuViewUrl');
    const CONTEXT_MENU_VIEW_URL = 'http://bot.myday.uz/admin/content/view';
    //const CONTEXT_MENU_EDIT_URL = window.property.getProperty('contentMenuEditUrl');
    const CONTEXT_MENU_EDIT_URL = 'http://bot.myday.uz/admin/content/edit';

    const fetchData = async () => {
        // const apiDeleteLink = window.proprety.getProperty('API_LINK_DELETE');
        // const apiGetInfo = window.proprety.getProperty('API_LINK_GET_INFO');
        // const apiLinkMove = window.proprety.getProperty('API_LINK_MOVE');
        // const apiLinkSort = window.proprety.getProperty('API_LINK_SORT');
        // const myLink = window.proprety.getProperty('')
        const dataFromApi = {
            "success": true,
            "message": "SUCCESS",
            "data": {
                "root": {
                    "children": {
                        "sections": [{
                                "children": {
                                    "sections": [{
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 521,
                                            "title": "🎲 Настольные Игры",
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 522,
                                            "title": "💐 Цветы"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 523,
                                            "title": "🎁 Подарки"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 524,
                                            "title": "🛵 Службы доставки"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 515,
                                            "title": "💄 Beauty/Гигиена"
                                        },
                                        {
                                            "children": {
                                                "sections": [{
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 571,
                                                                "title": "Apptechka"
                                                            }]
                                                        },
                                                        "id": 631,
                                                        "title": "APPTECHKA"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 570,
                                                                "title": "Oxymed"
                                                            }]
                                                        },
                                                        "id": 633,
                                                        "title": "OXYMED"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 572,
                                                                "title": "Go Apteka"
                                                            }]
                                                        },
                                                        "id": 632,
                                                        "title": "GO APTEKA"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 573,
                                                                "title": "Таблетка"
                                                            }]
                                                        },
                                                        "id": 630,
                                                        "title": "ТАБЛЕТКА"
                                                    }
                                                ],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 516,
                                            "title": "💊 Аптеки"
                                        },
                                        {
                                            "children": {
                                                "sections": [{
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 629,
                                                                "title": "ECO-MARKET"
                                                            }]
                                                        },
                                                        "id": 648,
                                                        "title": "ECO-MARKET"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 651,
                                                                "title": "BORDEAUX"
                                                            }]
                                                        },
                                                        "id": 640,
                                                        "title": "BORDEAUX"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 638,
                                                                "title": "LEGION"
                                                            }]
                                                        },
                                                        "id": 641,
                                                        "title": "LEGION"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 650,
                                                                "title": "МОЛОЧНАЯ КУХНЯ"
                                                            }]
                                                        },
                                                        "id": 642,
                                                        "title": "МОЛОЧНАЯ КУХНЯ"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 639,
                                                                "title": "LEBAZAR"
                                                            }]
                                                        },
                                                        "id": 643,
                                                        "title": "LEBAZAR"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 637,
                                                                "title": "LAVINI"
                                                            }]
                                                        },
                                                        "id": 644,
                                                        "title": "LAVINI"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 636,
                                                                "title": "GREEN APPLE MARKET"
                                                            }]
                                                        },
                                                        "id": 645,
                                                        "title": "GREEN APPLE"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 635,
                                                                "title": "GO MART"
                                                            }]
                                                        },
                                                        "id": 646,
                                                        "title": "GOMART"
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [],
                                                            "messages": [],
                                                            "content": [{
                                                                "id": 634,
                                                                "title": "CHIPLAND "
                                                            }]
                                                        },
                                                        "id": 647,
                                                        "title": "CHIPLAND"
                                                    }
                                                ],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 517,
                                            "title": "🍏 Продукты"
                                        },
                                        {
                                            "children": {
                                                "sections": [{
                                                        "children": {
                                                            "sections": [{
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 605,
                                                                            "title": "Testo by Zamira"
                                                                        }]
                                                                    },
                                                                    "id": 596,
                                                                    "title": "TESTO BY ZAMIRA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 543,
                                                                            "title": "Franklin's BBQ and Steakhouse"
                                                                        }]
                                                                    },
                                                                    "id": 601,
                                                                    "title": "FRANKLIN’S BBQ AND STEAKHOUSE"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 537,
                                                                            "title": "Go'sht"
                                                                        }]
                                                                    },
                                                                    "id": 602,
                                                                    "title": "GO'SHT"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 539,
                                                                            "title": "Куранты"
                                                                        }]
                                                                    },
                                                                    "id": 603,
                                                                    "title": "КУРАНТЫ"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 538,
                                                                            "title": "Loft"
                                                                        }]
                                                                    },
                                                                    "id": 604,
                                                                    "title": "LOFT"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 550,
                                                                            "title": "Breadly (Felicita)"
                                                                        }]
                                                                    },
                                                                    "id": 600,
                                                                    "title": "BREADLY"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 606,
                                                                            "title": "Burger & Lounge grill bar "
                                                                        }]
                                                                    },
                                                                    "id": 599,
                                                                    "title": "BURGER & LOUNGE"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                                "id": 450,
                                                                                "title": "ЧайКоф (Саид Барака)"
                                                                            },
                                                                            {
                                                                                "id": 451,
                                                                                "title": "Чайкоф (Новомосковская)"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 598,
                                                                    "title": "ЧАЙКОФ"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 541,
                                                                            "title": "Timekeeper"
                                                                        }]
                                                                    },
                                                                    "id": 597,
                                                                    "title": "TIMEKEEPER"
                                                                }
                                                            ],
                                                            "messages": [],
                                                            "content": []
                                                        },
                                                        "id": 576,
                                                        "title": " 🥩 Континентальная кухня "
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [{
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 558,
                                                                            "title": "Sushi Bar №1"
                                                                        }]
                                                                    },
                                                                    "id": 607,
                                                                    "title": "SUSHI BAR №1"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 608,
                                                                            "title": "Manna"
                                                                        }]
                                                                    },
                                                                    "id": 609,
                                                                    "title": "MANNA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 554,
                                                                            "title": "Arisu Sarang"
                                                                        }]
                                                                    },
                                                                    "id": 610,
                                                                    "title": "ARISU SARANG"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 466,
                                                                            "title": "Chenson"
                                                                        }]
                                                                    },
                                                                    "id": 611,
                                                                    "title": "CHENSON"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 556,
                                                                            "title": "Sushi time"
                                                                        }]
                                                                    },
                                                                    "id": 612,
                                                                    "title": "SUSHI TIME"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 555,
                                                                            "title": "Assorti"
                                                                        }]
                                                                    },
                                                                    "id": 613,
                                                                    "title": "ASSORTI"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 464,
                                                                            "title": "WOK (Ц-1)"
                                                                        }]
                                                                    },
                                                                    "id": 614,
                                                                    "title": "WOK"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 563,
                                                                            "title": "Yapona Mama (Шота Руставели)"
                                                                        }]
                                                                    },
                                                                    "id": 615,
                                                                    "title": "YAPONA MAMA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 468,
                                                                            "title": "Izumi"
                                                                        }]
                                                                    },
                                                                    "id": 616,
                                                                    "title": "IZUMI"
                                                                }
                                                            ],
                                                            "messages": [],
                                                            "content": []
                                                        },
                                                        "id": 577,
                                                        "title": "🍣 Паназиатская кухня "
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [{
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 559,
                                                                            "title": "Urban food"
                                                                        }]
                                                                    },
                                                                    "id": 624,
                                                                    "title": "URBAN FOOD"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 540,
                                                                            "title": "Black Star Burger"
                                                                        }]
                                                                    },
                                                                    "id": 625,
                                                                    "title": "BLACK STAR BURGER"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 537,
                                                                            "title": "Go'sht"
                                                                        }]
                                                                    },
                                                                    "id": 627,
                                                                    "title": "GO’SHT"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 548,
                                                                            "title": "DODO пицца"
                                                                        }]
                                                                    },
                                                                    "id": 626,
                                                                    "title": "DODO PIZZA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 561,
                                                                            "title": "Chopar pizza (Ц-1)"
                                                                        }]
                                                                    },
                                                                    "id": 617,
                                                                    "title": "CHOPAR PIZZA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 477,
                                                                            "title": "Les Ailes"
                                                                        }]
                                                                    },
                                                                    "id": 618,
                                                                    "title": "LES AILES"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 560,
                                                                            "title": "Московская пицца"
                                                                        }]
                                                                    },
                                                                    "id": 619,
                                                                    "title": "МОСКОВСКАЯ ПИЦЦА"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 549,
                                                                            "title": "KFC"
                                                                        }]
                                                                    },
                                                                    "id": 621,
                                                                    "title": "KFC"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 562,
                                                                            "title": "Max Way"
                                                                        }]
                                                                    },
                                                                    "id": 622,
                                                                    "title": "MAX WAY"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 544,
                                                                            "title": "Шеф Burger"
                                                                        }]
                                                                    },
                                                                    "id": 623,
                                                                    "title": "ШЕФ BURGER"
                                                                }
                                                            ],
                                                            "messages": [],
                                                            "content": []
                                                        },
                                                        "id": 578,
                                                        "title": "🍔 Фастфуд "
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [{
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 545,
                                                                            "title": "Венская пекарня"
                                                                        }]
                                                                    },
                                                                    "id": 581,
                                                                    "title": "ВЕНСКАЯ ПЕКАРНЯ"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 564,
                                                                            "title": "Bon (Шота Руставели)"
                                                                        }]
                                                                    },
                                                                    "id": 582,
                                                                    "title": "BON!"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 542,
                                                                            "title": "Paul"
                                                                        }]
                                                                    },
                                                                    "id": 584,
                                                                    "title": "PAUL"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 448,
                                                                            "title": "Pie Republic"
                                                                        }]
                                                                    },
                                                                    "id": 583,
                                                                    "title": "PIE REPUBLIC"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                                "id": 450,
                                                                                "title": "ЧайКоф (Саид Барака)"
                                                                            },
                                                                            {
                                                                                "id": 451,
                                                                                "title": "Чайкоф (Новомосковская)"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 587,
                                                                    "title": "ЧАЙКОФ"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 550,
                                                                            "title": "Breadly (Felicita)"
                                                                        }]
                                                                    },
                                                                    "id": 586,
                                                                    "title": "BREADLY"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                                "id": 552,
                                                                                "title": "Black Bear Kofi (Новомосковская)"
                                                                            },
                                                                            {
                                                                                "id": 553,
                                                                                "title": "Black Bear Kofi (Минор)"
                                                                            },
                                                                            {
                                                                                "id": 551,
                                                                                "title": "Black Bear Kofi (Шевченко)"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 585,
                                                                    "title": "BLACK BEAR KOFI"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 565,
                                                                            "title": "Safia гл филиал"
                                                                        }]
                                                                    },
                                                                    "id": 579,
                                                                    "title": "SAFIA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 538,
                                                                            "title": "Loft"
                                                                        }]
                                                                    },
                                                                    "id": 580,
                                                                    "title": "LOFT"
                                                                }
                                                            ],
                                                            "messages": [],
                                                            "content": []
                                                        },
                                                        "id": 574,
                                                        "title": " ☕️ Кофейни "
                                                    },
                                                    {
                                                        "children": {
                                                            "sections": [{
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 423,
                                                                            "title": "Caravan"
                                                                        }]
                                                                    },
                                                                    "id": 595,
                                                                    "title": "CARAVAN"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 569,
                                                                            "title": "Afsona"
                                                                        }]
                                                                    },
                                                                    "id": 588,
                                                                    "title": "AFSONA"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 422,
                                                                            "title": "Sultan Saray"
                                                                        }]
                                                                    },
                                                                    "id": 589,
                                                                    "title": "SULTAN SARAY"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 547,
                                                                            "title": "Sato"
                                                                        }]
                                                                    },
                                                                    "id": 590,
                                                                    "title": "SATO"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 568,
                                                                            "title": "Manas"
                                                                        }]
                                                                    },
                                                                    "id": 591,
                                                                    "title": "MANAS"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 566,
                                                                            "title": "Rayhon"
                                                                        }]
                                                                    },
                                                                    "id": 592,
                                                                    "title": "RAYHON"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 567,
                                                                            "title": "Aksu"
                                                                        }]
                                                                    },
                                                                    "id": 593,
                                                                    "title": "AKSU"
                                                                },
                                                                {
                                                                    "children": {
                                                                        "sections": [],
                                                                        "messages": [],
                                                                        "content": [{
                                                                            "id": 546,
                                                                            "title": "Basri Baba"
                                                                        }]
                                                                    },
                                                                    "id": 594,
                                                                    "title": "BASRI BABA"
                                                                }
                                                            ],
                                                            "messages": [],
                                                            "content": []
                                                        },
                                                        "id": 575,
                                                        "title": "🇺🇿 Национальная кухня"
                                                    }
                                                ],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 518,
                                            "title": "🍽 Еда на дом"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 519,
                                            "title": "👔 Одежда"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 520,
                                            "title": "📚 Книги"
                                        }
                                    ],
                                    "messages": [{
                                            "id": 1608,
                                            "title": "Manna"
                                        },
                                        {
                                            "id": 1568,
                                            "title": "Manas"
                                        },
                                        {
                                            "id": 1569,
                                            "title": "Afsona"
                                        },
                                        {
                                            "id": 1605,
                                            "title": "Testo by Zamira"
                                        },
                                        {
                                            "id": 1606,
                                            "title": "Burger & Lounge grill bar "
                                        }
                                    ],
                                    "content": [{
                                            "id": 608,
                                            "title": "Manna"
                                        },
                                        {
                                            "id": 568,
                                            "title": "Manas"
                                        },
                                        {
                                            "id": 569,
                                            "title": "Afsona"
                                        },
                                        {
                                            "id": 605,
                                            "title": "Testo by Zamira"
                                        },
                                        {
                                            "id": 606,
                                            "title": "Burger & Lounge grill bar "
                                        }
                                    ]
                                },
                                "id": 510,
                                "title": "🛵 Доставка"
                            },
                            {
                                "children": {
                                    "sections": [{
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 528,
                                            "title": "👶🏻 Детям"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 529,
                                            "title": "🏡 MYDAY DOMA"
                                        },
                                        {
                                            "children": {
                                                "sections": [{
                                                    "children": {
                                                        "sections": [],
                                                        "messages": [],
                                                        "content": []
                                                    },
                                                    "id": 531,
                                                    "title": "🎲"
                                                }],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 530,
                                            "title": "🎲 Бросить жребий"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 526,
                                            "title": "🎬 Смотреть"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 527,
                                            "title": "🎓 Обучение"
                                        },
                                        {
                                            "children": {
                                                "sections": [],
                                                "messages": [],
                                                "content": []
                                            },
                                            "id": 525,
                                            "title": "🎧 Слушать"
                                        }
                                    ],
                                    "messages": [],
                                    "content": []
                                },
                                "id": 511,
                                "title": "🎉 Развлечения"
                            },
                            {
                                "children": {
                                    "sections": [],
                                    "messages": [{
                                            "id": 513,
                                            "title": "КоронавирусИнфо"
                                        },
                                        {
                                            "id": 514,
                                            "title": "ГУВД"
                                        }
                                    ],
                                    "content": []
                                },
                                "id": 512,
                                "title": "ℹ️Полезное "
                            }
                        ],
                        "messages": [],
                        "content": []
                    },
                    "id": 403,
                    "title": "Главная",
                },
                "unattached_sections": [],
                "unattached_messages": [{
                    "id": 652,
                    "title": "34234234"
                }],
                "unattached_content": [{
                        "id": 413,
                        "title": "Chustiy's Сuisine"
                    },
                    {
                        "id": 415,
                        "title": "Голубые Купола"
                    },
                    {
                        "id": 421,
                        "title": "Cafe 1991"
                    },
                    {
                        "id": 424,
                        "title": "IKAT"
                    },
                    {
                        "id": 425,
                        "title": "Sal Sal"
                    },
                    {
                        "id": 433,
                        "title": "Di Gavi"
                    },
                    {
                        "id": 434,
                        "title": "Nobile"
                    },
                    {
                        "id": 435,
                        "title": "Basilic"
                    },
                    {
                        "id": 436,
                        "title": "Трюфель"
                    },
                    {
                        "id": 437,
                        "title": "April"
                    },
                    {
                        "id": 438,
                        "title": "Sette"
                    },
                    {
                        "id": 439,
                        "title": "PaSaDo"
                    },
                    {
                        "id": 449,
                        "title": "Ecorn"
                    },
                    {
                        "id": 452,
                        "title": "B&B Coffe House"
                    },
                    {
                        "id": 453,
                        "title": "Multi MaFé"
                    },
                    {
                        "id": 454,
                        "title": "CoffeeMilk"
                    },
                    {
                        "id": 455,
                        "title": "Cari Cake"
                    },
                    {
                        "id": 463,
                        "title": "Yapona Mama (Шевченко)"
                    },
                    {
                        "id": 465,
                        "title": "Barbaris"
                    },
                    {
                        "id": 467,
                        "title": "Jumanji"
                    },
                    {
                        "id": 469,
                        "title": "HORI"
                    },
                    {
                        "id": 478,
                        "title": "Чебуречная№1 на Новомосковской"
                    },
                    {
                        "id": 479,
                        "title": "Chopar Family"
                    },
                    {
                        "id": 480,
                        "title": "Barbeque Burger"
                    },
                    {
                        "id": 481,
                        "title": "The Burger"
                    },
                    {
                        "id": 482,
                        "title": "Street 77"
                    },
                    {
                        "id": 483,
                        "title": "Evos"
                    },
                    {
                        "id": 491,
                        "title": "The Irish Pub"
                    },
                    {
                        "id": 492,
                        "title": "Peggy’s Bar & Grill"
                    },
                    {
                        "id": 493,
                        "title": "Studio Cafe"
                    },
                    {
                        "id": 494,
                        "title": "Gasthaus"
                    },

                ]
            }
        }
        if (dataFromApi.success === false) {
            return alert(dataFromApi.message)
        }
        return dataFromApi
    }
    const parseDataFromApi = (data) => {

        const parseSections = (section) => {

            const result = {
                id: section.id,
                text: section.title,
                children: [],
                icon: './sections.png',
                type: 'section',
            };
            const children = section.children;

            if (children) {
                if (children.sections && children.sections.length) {
                    result.children.push(...children.sections.map((childSection) => {
                        return parseSections(childSection);
                    }));
                }

                if (children.content && children.content.length) {
                    result.children.push(...children.content.map((childContent) => {
                        return parseContent(childContent);
                    }));
                }

                if (children.messages && children.messages.length) {
                    result.children.push(...children.messages.map((childMessage) => {
                        return parseMessage(childMessage);
                    }));
                }
            }
            return result;
        };

        const parseMessage = (message) => {
            return {
                id: message.id,
                text: message.title,
                icon: './messages.png',
                type: 'message',
            };
        };
        const parseContent = (content) => {
            return {
                id: content.id,
                text: content.title,
                icon: './content.png',
                type: 'content',
            };
        };

        const root = parseSections(data.data.root);

        const unattachedSections = data.data.unattached_sections.map((section) => {
            return parseSections(section);
        });

        const unattachedMessages = data.data.unattached_messages.map((message) => {
            return parseMessage(message);
        });

        const unattachedContent = data.data.unattached_content.map((content) => {
            return parseContent(content);
        });

        return [{
                id: root.id,
                text: root.text,
                children: root.children,
                icon: './main.png',
                type: 'root',
            },
            {
                id: 'unattachedSections',
                text: 'unattachedSections',
                children: unattachedSections,
                icon: './sections.png',
                type: 'unattachedSections',
            },
            {
                id: 'unattachedMessages',
                text: 'unattachedMessages',
                children: unattachedMessages,
                icon: './messages.png',
                type: 'unattachedMessages',
            },
            {
                id: 'unattachedContent',
                text: 'unattachedContent',
                children: unattachedContent,
                icon: './content.png',
                type: 'unattachedContent',
            },
        ];
    };
    const createJsTree = (data) => {
        $('#JsSсheme').jstree({
            'core': {
                'animation': true,
                'check_callback': function (op, node, par, pos, more) {
                    if ((op === "move_node" || op === "copy_node") && node.type && node.type == "root") {
                        return false;
                    }
                    if ((op === "move_node" || op === "copy_node") && more && more.core && !confirm('Are you sure ...')) {
                        return false;
                    }
                    return true;
                },
                'data': data
            },
            'contextmenu': {
                "items": customMenu,
            },

            'dnd': {
                "is_draggable": function () {
                    return is_dragging_allowed;
                }
            },
            'plugins': ["search", "dnd", "contextmenu", "types", "show_matches_children", "html_data", "ui", "crrm", ],
            'search': {
                "case_sensitive": false,
                "show_only_matches": false
            }
        });
        let search = false;
        $('.search-input').keyup(function () {
            if (search) {
                clearTimeout(search);
            }
            search = setTimeout(function () {
                var v = $('.search-input').val();
                $('#JsSсheme').jstree(true).search(v);
            }, 250);
        });
 
        var is_dragging_allowed = false;
        const modeStatus = document.getElementsByClassName('status')[0];
        const editButton = document.getElementById('edit-mode-off');
        const viewButton = document.getElementById('edit-mode-on');




        editButton.addEventListener('click', function () {
            modeStatus.classList.remove('edit');
            modeStatus.classList.add('normal');
            modeStatus.innerHTML = 'Режим просмотра';
            is_dragging_allowed = false;

        });

        viewButton.addEventListener('click', function () {
            modeStatus.classList.remove('normal');
            modeStatus.classList.add('edit');
            modeStatus.innerHTML = 'Режим редактирования';
            is_dragging_allowed = true;
        })

        // $('#edit-mode-off').on('click', function () {
        //     $('.status').removeClass("edit")
        //     $('.status').addClass("normal")
        //     $('.status').empty()
        //     $('.status').append("status: Normal")
        //     is_dragging_allowed = false;
        // });

        // $('#edit-mode-on').on('click', function () {
        //     $('.status').removeClass("normal")
        //     $('.status').addClass("edit")
        //     $('.status').empty()
        //     $('.status').append("status: Edit")
        //     is_dragging_allowed = true;
        // });

        // "is_draggable": function (node) {
        //     if (node[0].id === '403') {
        //         return false
        //     }

        //     return true
        //     console.log(node[0].id);
        // }

        function customMenu(node) {
            var items = {
                "perview": {
                    "separator_before": true,
                    "separator_after": true,
                    "label": "Просмотреть содержимое",
                    "action":

                        function (obj) {
                            actions.view.run(node)
                            // window.open($node.original.link),
                            // console.log($node),
                            // console.log($node.parent);
                        },
                    "_disabled": function (obj) {
                        const type = node.original.type;
                        if (type === UNATTACHED_ROOT_ID ||
                            type === UNATTACHED_MESSAGES_ID ||
                            type === UNATTACHED_CONTENT_ID ||
                            type === UNATTACHED_SECTIONS_ID) {
                            return true
                        }
                    },
                },
                "edit": {
                    "separator_before": true,
                    "separator_after": true,
                    "label": "Редактировать содержимое",
                    "action": function (obj) {
                        actions.edit.run(node)
                        // window.open($node.original.link)
                    },
                    "_disabled": function (obj) {
                        const type = node.original.type;
                        if (type === UNATTACHED_ROOT_ID ||
                            type === UNATTACHED_MESSAGES_ID ||
                            type === UNATTACHED_CONTENT_ID ||
                            type === UNATTACHED_SECTIONS_ID) {
                            return true
                        }
                    },
                },
                "moveTounattached": {
                    "separator_before": true,
                    "separator_after": true,
                    "label": "Удалить/переместить в незакреплённые",
                    "action":

                        function (obj) {
                            actions.delete.run(node)
                            // actions.delete.methods.moveToUnattached($node)

                        },
                    // "_disabled": function (obj) {
                    //     const type = node.original.type;
                    //     const parent = node.parent;
                    //     if (type === UNATTACHED_ROOT_ID ||
                    //         type === UNATTACHED_MESSAGES_ID ||
                    //         type === UNATTACHED_CONTENT_ID ||
                    //         type === UNATTACHED_SECTIONS_ID ||
                    //         parent === UNATTACHED_CONTENT_ID ||
                    //         parent === UNATTACHED_MESSAGES_ID ||
                    //         parent === UNATTACHED_SECTIONS_ID) {
                    //         return true
                    //     }
                    // },
                }
            }

            if ($('.status').hasClass("normal")) {
                delete items.moveTounattached;
            }


            return items;

        }
    };

    const actions = {
        view: {
            methods: {
                composeUrl: (id) => {
                    const url = new URL(CONTEXT_MENU_VIEW_URL);
                    url.searchParams.set('id', id);

                    return url.href;
                    // const url = CONTEXT_MENU_VIEW_URL;
                    // 'http://bot.myday.uz/admin/content/view/10';
                    // return `${url}/${id}`;
                },
            },
            run: (obj) => {
                const url = actions.view.methods.composeUrl(obj.original.id);
                window.open(url);
            },
        },
        edit: {
            methods: {
                composeUrl: (id) => {
                    const url = new URL(CONTEXT_MENU_EDIT_URL);
                    url.searchParams.set('id', id);

                    return url.href;
                }
            },
            run: (obj) => {
                const url = actions.edit.methods.composeUrl(obj.original.id);
                window.open(url);
            }
        },
        delete: {
            methods: {
                error: (response) => {
                    alert(response.message);
                },
                moveToUnattached: (response, node) => {
                    const type = node.original.type;

                    if (type === CONTENT_TYPE) {
                        $('#JsSсheme').jstree("move_node", node, UNATTACHED_CONTENT_ID, 1);
                    } else if (type === MESSAGE_TYPE) {
                        $('#JsSсheme').jstree("move_node", node, UNATTACHED_MESSAGES_ID, 1);
                    } else {
                        $('#JsSсheme').jstree("move_node", node, UNATTACHED_SECTIONS_ID, 1);
                    }
                    alert('success');
                },
                remove: (response, node) => {
                    // $('#JsSсheme').jstree("delete_node", $node);
                    tree.delete_node(node);
                }
            },
            run: (node) => {
                let thisNode = node.original.type;
                const action = actions.delete;
                const method = actions.method;

                $.ajax({
                        url: 'bot.myday.uz/api/scheme/delete',
                        method: 'POST',
                        data: {
                            id: node.original.id,
                            parentId: node.parent.original.id,
                        },

                        beforeSend: () => {
                            window.components.loader.show();
                        }
                    })
                    .done((response) => {
                        if (!response.success) {
                            return methods.error(response);
                        }

                        // Если данная нода не прикреплена к другому родителя
                        if (response.data.unattached) {
                            return methods.moveToUnattached(response, node);
                        }

                        return methods.remove(response, node);
                    })

                    .fail(() => {
                        alert('ERROR');
                    })
                    .always(() => {
                        window.components.loader.hide();
                    })
            }
        }
    }

    const init = async () => {
        const dataFromApi = await fetchData();
        const data = parseDataFromApi(dataFromApi);
        createJsTree(data);
    };
    init();
})