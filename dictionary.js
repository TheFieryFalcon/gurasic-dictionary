Dictionary = [
    {
        "word": "based",
        "uses": [
            {
                "type": "Exclaimation",
                "definition": "A subdued exclaimation of respect",
                "example": '"I did ur mom last night" "based"',
                "exampleTranslation": '"I did ur mom last night" "cool"'
            }
        ]
    },
    {
        "word": "janweli",
        "uses": [
            {
                "type": "COMPOUND",
                "compound": "jan + soweli",
                "definition": "furry (animal person)",
                "example": "sina janweli.",
                "exampleTranslation": "You are a furry."
            }
        ]
    },
    {
        "word": "musika",
        "uses": [
            {
                "type": "COMPOUND",
                "compound": "musi + kalama",
                "definition": "Music",
                "example": "mi kute musika.",
                "exampleTranslation": "I listen to music."
            }
        ]
    }
]

Dictionary.sort((a, b) => a.word.localeCompare(b.word));
