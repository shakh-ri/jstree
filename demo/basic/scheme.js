$(function() {
    const fetchData = async () => {
        const dataFromApi = {
                "root": {
                    "id": 1,
                    "title": "Главная",
                    "children": {
                        "sections": [
                            {
                                "id": 111,
                                "title": "Доставка",
                                "children": {
                                    "sections": [
                                        {
                                            "id": 5111,
                                            "title": "Дос2313123123тавка",
                                            "children": {}
                                        },
                                        {
                                            "id": 5112,
                                            "title": "Шоппинг",
                                            "children": {}
                                        },
                                        {
                                            "id": 5113,
                                            "title": "Развлечение",
                                            "children": {}
                                        },
                                        {
                                            "id": 5114,
                                            "title": "Полезное",
                                            "children": {}
                                        }
                                    ],
                                    "messages": {
                                        "id": 121,
                                        "title": "Приветствие"
                                    },
                                    "content": {
                                        "id": 131,
                                        "title": "Самые лучшие боты в Узб"
                                    }
                                }
                            },
                            {
                                "id": 112,
                                "title": "Шоппинг",
                                "children": {}
                            },
                            {
                                "id": 113,
                                "title": "Развлечение",
                                "children": {}
                            },
                            {
                                "id": 114,
                                "title": "Полезное",
                                "children": {}
                            }
                        ],
                        "messages": {
                            "id": 121,
                            "title": "Приветствие"
                        },
                        "content": {
                            "id": 131,
                            "title": "Самые лучшие боты в Узб"
                        }
                    }
                },
                "unattached_sections": [
                    {
                        "id": 21,
                        "title": "Пустая секция"
                    },
                    {
                        "id": 22,
                        "title": "Пустая секция 2"
                    }
                ],
                "unattached_messages": [
                    {
                        "id": 31,
                        "title": "Пустое сообщение"
                    },
                    {
                        "id": 432,
                        "title": "Пустая сообщение 2"
                    }
                ],
                "unattached_content": [
                    {
                        "id": 321,
                        "title": "Пустой контент"
                    },
                    {
                        "id": 532,
                        "title": "Пустой контент 2"
                    }
                ]
        };

        return dataFromApi;
    }

    const parseDataFromApi = (data) => {
        if (!data) {
            return {};
        }

        const parseSection = (section) => {
            const result = {
                id: section.id,
                text: section.title,
                children: [],
                icon: 'asdasd'
            };

            const children = section.children;
            
            if (children) {
                if (children.sections && children.sections.length) {
                    result.children.push(...children.sections.map((childSection) => {
                        return parseSection(childSection);
                    }));
                }
                
                if (children.messages && children.messages.length) {
                    result.children.push(...children.messages.map((childMessage) => {
                        return parseMessage(childMessage);
                    }));
                }
                
                if (children.content && children.content.length) {
                    result.children.push(...children.content.map((childContent) => {
                        return parseContent(childContent);
                    }));
                }
            }

            return result;
        };

        const parseMessage = (message) => {
            return {
                id: message.id,
                text: message.title,
                icon: 'asdasd'
            };
        };

        const parseContent = (content) => {
            return {
                id: content.id,
                text: content.title,
                icon: 'asdasd'
            };
        };

        const root = parseSection(data.root);

        const unattachedSections = data.unattached_sections.map((section) => {
            return parseSection(section);
        });

        const unattachedMessages = data.unattached_messages.map((message) => {
            return parseMessage(message);
        });

        const unattachedContent = data.unattached_content.map((content) => {
            return parseContent(content);
        });

        
        return [
            {
                id : root.id,
                text: root.text,
                children: root.children
            },
            {
                id : null,
                text: 'unattachedSections',
                children: unattachedSections
            },
            {
                id : null,
                text: 'unattachedMessages',
                children: unattachedMessages
            },
            {
                id : null,
                text: 'unattachedContent',
                children: unattachedContent
            },
        ];
    }

    const createJsTree = (data) => {
        $('#test').jstree({
            'core' : {
                'data' : data
            }
        });
    }

    const init = async () => {
        const dataFromApi = await fetchData();
        const data = parseDataFromApi(dataFromApi);

        createJsTree(data);
    }

    init();

});