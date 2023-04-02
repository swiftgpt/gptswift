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

The author section is used to provide information about the creator of the prompt, such as their name and support link(such as buymeacoffee) information. Here's an example:

```json
"author": {
    "name": "GPT Swift",
    "link": "https://www.buymeacoffee.com/gptswift"
}
```

### Parameters

The parameters section is used to define the variables that will be used in the prompts. Each parameter should include a question and a default value. Please note that you don't need to include language parameter as it will be injected automatically. Here's an example:

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

The prompts section is used to define the different questions or prompts that the user will receive. Each prompt should include a title and a prompt string that includes variables defined in the parameters section. Although GPTSwift will automatically ask ChatGPT to continue response from unfinished responses, please limit the response to 1 - 2 pages. These prompts will be executed in order. Here's an example:

```json
"prompts": [
    {
        "title": "Overview",
        "prompt": "Please provide me with a list of the best restaurants for $cuisine in $location."
    },
    {
        "title": "Recommendations",
        "prompt": "Can you please narrow the answers within my budget limit of $price. "
    }
]
```

By defining these four sections, you can create a structured template that allows for the dynamic generation of prompts based on user input.

## How to submit

At the moment please submit it through Github Issue https://github.com/swiftgpt/gptswift/issues/new , we are developing an easier way to allow you to test and submit your prompts through the extension. 
