# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

TODO's
===

# Home / List Page

[ x ] When a movie poster is clicked, a user should be brought to the /details view for that movie

[ x ] Have a way to get to the 'Add Movie' page

# Details Page 

[ ] Show all details including ALL genres for the selected movie
    ( You will need to store this data in redux ! )
    ( Hint : You can make a GET request for a specific movie. Remember req.params and :id? )

[ x ]  The details page should have a 'Back to List' button, which should bring the user to 
    the Home/List page 
    ( Base functionality does not require the movie details to load correctly after refresh of the browser. )

# Add Movie Page

[ ] This should show:
    [ ] an input field ( for the movie title )
    [ ] an input field ( for the movie poster image URL )
    [ ] a textarea ( for the movie description )
    [ ] a dropdown ( for the genres )

[ ] The 'Add Movie' page should have the buttons
    [ ] 'Cancel' button which should bring the user to the 'Home/List' page
    [ ] 'Save' button which should update the title and description in the database
        and bring the user to the Home/List page ( which now has the new movie )

 # General Considerations 

 [ ] Invest some time in styling it up
    [ ] Research cards for your movie posters on the list page
    [ ] Research grids for your movie posters on the Movie List page
[ ] Commit your code frequently! You should have at 15+ commits on a project of this size.
[ ] Comment your code
[ ] Update this README to include a descripton of the project in your own words