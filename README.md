1. Project Title - Weather App

2. Project Description

What your application does:
This application fetches the latest weather data for London. Specifically it displays
weatehr data for te current day and the forthcoming 5 days.

Why you used the technologies you used:
React || Tailwind CSS

Some of the challenges you faced:
Managing the state of the API data, but quickly found a solution with props and effective use of dynamically rendering the data.

Features I would implement in the future:
I would add a select dropwdown which would allow a user to select the day and see the weather data for that specific day. I would do this via a useState hook.

3. Testing the App

The most important components to test are the components which are fetching and displaying API data.
The best way to do this is to actively try to break the app by changing configurations in the test file. For example, if one where to change 'screen.findByText("Weather forecast for")', to text which would not be found in the component the test would fail. Moreover, changing the data found in the ctx.json object would further lead to a failed test. This test illustrates that the API call is effective and running successfully.
