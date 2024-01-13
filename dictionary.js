Dictionary = [
    {
        "word": "janja",
        "uses": [
            {
                "type": "COMPOUND",
                "compound": "jan + nja",
                "definition": "Catperson and catpeople",
                "example": "janja li suwi.",
                "exampleTranslation": "Catpeople are cute."
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