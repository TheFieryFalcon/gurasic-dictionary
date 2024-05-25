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
        "word": "lmao",
        "uses": [
            {
                "type": "Exclaimation",
                "definition": "An exclamation of mirth and humor",
                "example": '"Ligma balls" "lmao"',
                "exampleTranslation": '"Ligma balls" "That is really funny"'
            },
            {
                "type": "Expression",
                "definition": "An expression of incredulity at a situation",
                "example": '"My house just burned down lmao"',
                "exampleTranslation": '"My house just burned down, can you believe it?"'
            },
            {
                "type": "Exclaimation",
                "definition": "An exclamation of pity and/or mocking at someone's situation, usually in all caps",
                "example": '"My house just burned down lmao" "LMAO"',
                "exampleTranslation": '"My house just burned down lmao" "I feel sorry for you"'
            },
            {
                "type": "Other",
                "definition": "An otherwise meaningless word that serves to add a whimsical, alleviating, or optimistic tone to the statement",
                "example": 'My laptop just broke lmao',
                "exampleTranslation": "My laptop just broke, but it's fine because I have a spare"
            }   
        ]
    },
]

Dictionary.sort((a, b) => a.word.localeCompare(b.word));
