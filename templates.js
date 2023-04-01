export const Templates = [
    {
        "title": "Generate Travel Guide",
        "author": {
            "name": "Jierre",
            "support": "buy me a coffee through this link https://www.buymeacoffee.com/jierre",
        },
        "parameters": {
            "destination": {
                "question": "Where do you want to go?",
                "value": "London"
            },
            "time": {
                "question": "When do you want to go?",
                "value": "April"
            },
            "period": {
                "question": "How many days is the trip?",
                "value": "8"
            },
            "style": {
                "question": "What is your travel style?",
                "value": "food obsession"
            },
            "budget": {
                "question": "What is your budget style?",
                "value": "normal"
            }
        },
        "prompts": [
            { "title": "Overview", "prompt": "As a travel expert and tour guide, you have extensive knowledge about travel. The destination is $destination. The time of travel is $time. My travel style is $style. My budget style is $budget. The first quesiton is: Please give me a comprehensive overview of $destination for someone traveling there during $time with a budget style of $budget?" },
            { "title": "Travel Itinerary", "prompt": "May I kindly request for your assistance in designing a comprehensive travel itinerary for a $period day trip to $destination in $time, taking into consideration my $style travel style and $budget budget? The itinerary should include detailed information, including every 30-minute segment, on transportation details, suggested attractions to visit, recommended hotels and restaurants, as well as helpful travel tips. Additionally, please provide the associated costs for each activity and location. Lastly, kindly provide two compelling reasons for each activity on the itinerary." },
            { "title": "History", "prompt": "Please share more details about history in $destination with specific stories." },
            { "title": "Lifestyle", "prompt": "Please share mode details about lifestyle in $destination with specific examples." },
            { "title": "Experiences", "prompt": "May I request for a comprehensive list of the top 10 recommended experiences to partake in $destination during $time? Kindly provide elaborate information on the activities, such as the location, means of transportation, associated costs, and specific details on what to do in each place. Additionally, please include two compelling reasons to visit each location and two factors that may deter one from visiting." },
            { "title": "Attractions", "prompt": "May I also inquire about the top 10 attractions in $destination during $time? Could you please provide a detailed overview of each attraction, including customer feedback, both positive and negative, along with their corresponding ratings and cost.Additionally, please include two compelling reasons to visit each location and two factors that may deter one from visiting." },
            { "title": "Areas", "prompt": "Kindly provide an overview of the various areas to reside in $destination, encompassing factors such as convenience, safety, and corresponding costs. Additionally, please include two compelling reasons to select each area, as well as two potential factors that may dissuade one from choosing to reside in said area." },
            { "title": "Local Dishes", "prompt": "May I kindly request for a list of the top 10 renowned local dishes in $destination during $time? Kindly provide two compelling reasons to try each dish, as well as two potential factors that may deter one from sampling said cuisine." },
            { "title": "Restaurants", "prompt": "May I kindly request for a list of the top 10 recommended restaurants to indulge in authentic local cuisine in $destination during $time, while keeping in mind my preference for $budget budget style? Please provide comprehensive information on the location, means of transportation, associated costs, and unique features of each restaurant. Furthermore, please include two compelling reasons to visit each establishment, as well as two potential reasons that may discourage one from dining there." },
            { "title": "Hotels", "prompt": "May I kindly request for a list of the top 10 hotels that are suitable for my $budget budget style and preference for a $style travel style? Kindly provide comprehensive details on the location, means of transportation, associated costs, and unique features of each hotel. Additionally, please include two compelling reasons to consider each hotel, as well as two potential reasons that may discourage one from choosing to stay at said establishment." },
            { "title": "Transportation", "prompt": "May I kindly request for information on how to navigate $destination during $time, both through public transportation and car rental, taking into consideration my $style travel style and $budget budget style? Kindly provide details on associated costs, as well as any pertinent factors I should be aware of when utilizing each mode of transportation." },
            { "title": "Packing Checklist", "prompt": "Kindly provide me with a list of the top 10 essential items to include in a travel packing checklist for a trip to $destination in $time, along with the reasons why each item is recommended for inclusion." },
            { "title": "What to Bring Back?", "prompt": "Kindly provide me with a list of the top 10 recommended items to bring back as souvenirs or mementos from a trip to $destination in $time, along with the reasons why each item is suggested for inclusion in the checklist." }

        ]
    }

];
