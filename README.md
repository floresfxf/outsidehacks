<a>
    <img src="http://www.outsidehacks.com/imgs/IMG_3870.PNG" alt="Outside Hacks Logo"/>
</a>

# outsidehacks
Outside Finds is an interactive application written in React Native to enhance the music festival, Outside Lands, experience for all festival goers by creating a scavenger hunt where users must take pictures and record audio of certain areas throughout the 1 mi2 venue. This allowed users to both collect memories of the festival and be able to redeem them for prizes.
Users were tasked with finding certain images or audio clips that would fit the given clue. Once the image or audio clip was verified users would be able to move on to the next clue. The users could then view possible prizes that were redeemable once at a certain step. Each prize has a unique QR code which can be scanned to verify that a user has completed their task(s).
We've even added support for vendors who can track inventory of prizes and confirm the user’s QR code is accurate.

##Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See ‘Running Project’ for notes on how to deploy the project on a live system.

**Prerequisites**
Must install node and/or watchman
```
brew install node
brew install watchman
```
Must have the command react-native in cli
```
npm install -g react-native-cli
```
**Running Project**
git clone project
```
git clone https://github.com/floresfxf/outsidehacks
```
cd into project and run
```
cd /outsidehacks
npm install
react-native run-ios
``` 
Enjoy

##Built With
[React Native](http://www.dropwizard.io/1.0.2/docs/)
* [React Native](https://facebook.github.io/react-native/) - framework used
* [Express](https://expressjs.com) - web framework used
* [Amazon S3](https://aws.amazon.com/s3/) - Used to store users images
* [Amazon Rekognition](https://aws.amazon.com/rekognition/) - Used to confirm incoming images with results
* [Google Vision API](https://cloud.google.com/vision/) - Used to handle and confirm incoming Images form users
* [Gracenote API](https://developer.gracenote.com) - Used to handle and confirm incoming audio form users


##Authors
* Frankie Flores
* Pamela Needle 
* Nikhil Anand
See also the list of [contributors](https://github.com/floresfxf/outsidehacks/graphs/contributors) who participated in this project.
