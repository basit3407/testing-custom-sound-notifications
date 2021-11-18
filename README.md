# testing-custom-sound-notifications

This Project is for testing custom sound in locally scheduled notiifcations on android devices in managed workflow using eas build.

You need to have an expo account to test this. get expo account from https://expo.dev/

Do the following steps:

1.https://github.com/basit3407/testing-custom-sound-notifications
2.npm install
3.eas build -p android --profile preview
4.download apk from https://expo.dev/accounts/[yourAccountId]/projects/[AppName]/builds/[buildNumber]
5.install and open on physical android device (no emulator)
6.click on button to schedule notification

Expected Behaviour:
Notification alert should be shown and custom sound should be played after 5 seconds

Actual Behaviour:
No Notification alert is shown and no sound is played
