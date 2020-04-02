Name Card - Stretching Your Thoughts

Which web event did you hook into to update the display name? I used the addEventListener method to update the display name.

Where in your HTML did you link to your JavaScript file? Are there better places? What's the best place? I linked at the bottom of the file, inside the body but after all other elements. I tried linking at the top in the head tag but then the Javascript was loading before the HTML body and preventing the event handler from working. The form was following the action listed in the tag versus being intercepted by the event listener. I am not sure if there is a better place to link the javascript file.

Why is it best practice to store your CSS/JS in external files rather than in your HTML file? Storing the CSS and Javascript in separate files is more organized and easier to read. HTML, styling, and coding can already be very lengthy files, so it is easier to understand and update/edit the files if they are separated into their own files and linked.