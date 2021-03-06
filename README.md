# Memelon
----

Share funny moments and memories as memes privately within circles of friends.

![memelon](http://oi59.tinypic.com/1pdq52.jpg)

# About progress (1 person team)
----

This app was build in 48h during HackZurich hackathon (10-12 Oct 2014) in the team of 4 programmers.
During the Facebook Hackathon I was extending this app with the crucial functionalities:

* :boom: account system
	* user can register and create new account
	* user can log in/out, remind password, etc
* :boom: circles logic
	* user can create circles and invite new friends
	* memes are finally sent to circles and possible to view only for the users within them

# Technology
----

The app was built using:

* Meteor.js
* Cordova
* Bootstrap

It works on the following platforms:

* web browsers
* as native app on:
	* Android
	* (not tested!) iOS

# Running
----

1. Install meteor http://docs.meteor.com/
2. Attach Android device (tested with Android 4.4.2)
	* make sure it's listed in `adb devices`
	* make sure it's connected to the same network as your laptop
3. In the project main directory run:
	```meteor run android-device -p 3000```

This page can help with any issues: https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration

# Screenshots
----

**Created during Facebook Hackathon:**

Accounts & login & public feed for anonymous users

![memelon](http://oi59.tinypic.com/judffl.jpg)

Creating circles and circles functionality

![memelon](http://oi58.tinypic.com/34xes5z.jpg)

![memelon](http://oi58.tinypic.com/4t2fm8.jpg)

**Created at HackZurich:**

Creating a meme:

![memelon](http://oi59.tinypic.com/28sn52c.jpg)

Layout, menus, etc

![memelon](http://oi57.tinypic.com/30sy79g.jpg)

# Thanks! :)
