1. What problem does the context API help solve?

        Let's us not have to keep drilling for props. Saves us time on writing our application.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        
        Actions in Redux are packets of information that contain an action type and associated data. Store contains our state for our application and is a JavaScript Object. 
        Actions are packets of info that describe events that happened in the UI.
        
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

      The Application state is global, while the component state is local. Application state changes will be reflected globally. Component state changes are limited to a single component

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    
     A middleware package that allows us to give Redux to run asynchronously.
    
5. What is your favorite state management system you've learned and this sprint? Please explain why!
        Context API, because it's easier to deal with then Redux.
