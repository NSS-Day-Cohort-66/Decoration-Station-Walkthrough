# UseState and UseEffect

In this session of the Decoration Station workshop, we talked about useState and useEffect. 
In `itemsService.js` and `seasonsService.js` we wrote a functions to get all the items and all the seasons from the database.
In `App.js` we wrote a component to display all those items in the DOM. We also added a dropdown to filter the items by their season. 

We did all this by creating state to hold the `items`, `seasons`, `seasonChoice`, and `filteredItems`. We watched for a change in the `seasonChoice` state with a `useEffect`. When the user selects a season from the dropdown, the `seasonChoice` state will update with the id of the season the user chose. The `useEffect` that watches the `seasonChoice` will trigger, calling the function we passed it to filter our items. 