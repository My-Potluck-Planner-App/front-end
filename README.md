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
