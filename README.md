## ☝️ **Pitch**

If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 

In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.

## ✅  **MVP**

1. As an `organizer` I can create an upcoming `potluck` and invite my friends to attend

2. As an `organizer` I can adjust `date`s, `time`s and `location`s of the potluck

3. As an `organizer` I can use the list feature in my app to add food `items` that we'd like to see at the potluck

4. As a `guest` to a potluck I want to be able to confirm that I'm going to the upcoming `event`

5. As a `guest` I'd like to be able to select which `item`s I'd like to be responsible for bringing

**NOTE: All of the user stories above should only require a single user type. Users can create "potlucks" and add other users to them.**

## 🏃‍♀️ **Stretch**

1. Add a reminders functionality that allows users to link up their upcoming `date`s to their Google calendar.

2. Ability to upload multiple `photos` from the potluck gathering, like a photo gallery for a past event.
        
        
        
        Deployed app:
        https://my-potluck-planner-app.herokuapp.com/
        
        Endpoints:
                [POST] /auth/register - expects a unique username & password
                [POST] /auth/login - expects a username & password
                        For testing: 
                                username = user, 
                                password = password
                [GET] /potlucks - returns an array of all events:
                        [
                                {
                                        id: 1,
                                        name: Party at Patty's,
                                        date: 267289,
                                        time: 1015,
                                        location: 123 Main St.
                                }
                        ]
                [GET] /potlucks/:id - returns the object with that id
                [POST] /potlucks/create - expects an object:
                        {
                                // all fields are required!!
                                name: '',
                                date: 1234,
                                time: 1234,
                                location: ''
                        }
                        returns the created object
                [PUT] /potlucks/:id - expects an object (see /create) & returns the updated event
                [DELETE] /potlucks/:id - returns the deleted object
