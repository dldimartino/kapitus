This is the Stock-Checker coding challenge.

This project was created using the create-react-app starting point (my first time trying this functionality)
I found that it was a quick and easy starting point for a react application. I've also read that Next.js is a good starting point
and plan to build my next project using Next.js as a learning experience.

This application is under construction (mosly CSS/design) but has been made available in it's current form due to time constraints and so viewers can keep track of updates as they come.

The current setup attempts a GET request to a 3rd party API for stock/company information. As this is a free version of the API, there is a limited number of daily requests allowed.
If the number of daily requests have been reached, the app will default to the demo/test GET request which sends back AAPL information.

The search form has been split up into different components and each is passed the required data as props. I did this to show how applications can be broken down into smaller pieces/components and also to make it easier for a code reviewer to read the JSX.

There will be updates to follow, but I hope you enjoy the current status of the application.

Dan DiMartino
dandimartino@gmail.com


Challenge Description:
You can use any JavaScript framework you feel comfortable with (not typescript).
The Rest API I picked is documented here (this is just one I found online (I’m told it may now require registering to use): https://financialmodelingprep.com/developer/docs/companies-key-stats-free-api
The particular endpoint will be the “Company Profile” one.

The requirements but can expand:
User provides stock symbol of any company, retrieves and views company’s profile information

- Given that the company data for “changes” or “changesPercentage” are positive, when displayed the field should be green

- Given that the company data for “changes” or “changesPercentage” are negative, when displayed the field should be red

- Given that the price field has data, it should be displayed with the $ sign

- Given that the “website” field has a link, when I click on it, it should take me to the website