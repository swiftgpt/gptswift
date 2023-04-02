# GPTSwift

## Contributor Guide

The prompt template consists of four main sections: the title, author, parameters, and prompts. Each section serves a specific purpose in defining the parameters of the prompt and generating the desired output.

Example Template: [https://github.com/swiftgpt/gptswift/blob/main/templates.json](https://github.com/swiftgpt/gptswift/blob/main/templates.json)

### Title

The title section is used to give a name to the prompt. It should be a brief and descriptive title that conveys the purpose of the prompt. Here's an example:

```json
"title": "Generate Restaurant Recommendations"
```

### Author

The author section is used to provide information about the creator of the prompt, such as their name and contact information. Here's an example:

```json
"author": {
    "name": "Jane Smith",
    "link": "https://www.example.com/contact"
}
```

### Parameters

The parameters section is used to define the variables that will be used in the prompts. Each parameter should include a question and a default value. Here's an example:

```json
"parameters": {
    "location": {
        "question": "Where are you looking for restaurants?",
        "value": "New York City"
    },
    "cuisine": {
        "question": "What type of cuisine are you interested in?",
        "value": "Italian"
    },
    "price": {
        "question": "What is your budget for this meal?",
        "value": "$$$"
    }
}
```

### Prompts

The prompts section is used to define the different questions or prompts that the user will receive. Each prompt should include a title and a prompt string that includes variables defined in the parameters section. Here's an example:

```json
"prompts": [
    {
        "title": "Overview",
        "prompt": "I can provide you with a list of the best restaurants for $cuisine in $location. What is your budget for this meal?"
    },
    {
        "title": "Recommendations",
        "prompt": "Based on your preferences, I recommend the following restaurants:\n\n1. Example Restaurant\n2. Another Example Restaurant\n3. Yet Another Example Restaurant\n\nLet me know if you would like more information on any of these options."
    }
]
```

By defining these four sections, the prompt engineer can create a structured template that allows for the dynamic generation of prompts based on user input.
