meteor-webapp-tesi
==================

Academic Dissertation Project for my final exam in [University of Bologna](http://www.unibo.it/en/homepage).

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/christianascone/meteor-webapp-tesi/blob/master/LICENSE)

> - [MeteorJS](https://www.meteor.com)

> - [BlazeJS](http://blazejs.org)

## Meteor Plugins

> - [Zodiase](https://github.com/Zodiase/meteor-mdl) and [Material Design Lite](https://getmdl.io/index.html)

> - [Meteor Collection Helpers](https://github.com/dburles/meteor-collection-helpers)

> - [Iron-router](https://github.com/iron-meteor/iron-router)

> - [msavin/Mongol](https://github.com/msavin/Mongol)

> - [tap-i18n](https://github.com/TAPevents/tap-i18n)


## Getting Started

### Installing

Move inside meteor directory and run:
```
meteor
```
Dependencies will be downloaded.

This project uses [Meteor Mail package](https://docs.meteor.com/api/email.html) to send some data but it is not necessary.
If you want to configure it, the MAIL_URL environment variable can be set in a json file with the email address of recipient who will receive messages.

Place a `settings.json` in meteor directory.

```javascript
{
  "public": {
    "RECIPIENT_MAIL_ADDRESS": "recipient@domain.com",
    "SENDER_MAIL_ADDRESS": "sender@domain.com"
  },
  "private": {
    "MAIL_URL": "smtp://USERNAME%40DOMAIN:PASSWORD@HOST:PORT/"
  }
}
```
Run
```
meteor --settings settings.json
```

Pay attention: special characters (for example @ and /), must be escaped with hex code to be valid.


### Setup

> - Register a new user in homepage and login.
> - Click on **setup tab**
> - Insert the preferred total score
> - Click **Create new mock data**

Mock users will be created and added to leaderboard, using the given score.
It is possible to clear users with **Clear mock data** button.


## Credits

[Main logo](https://github.com/christianascone/meteor-webapp-tesi/blob/master/meteor/TesiMagistrale/public/images/logo.svg) by [Aybigeaya](https://thenounproject.com/aybigeaya/) is licensed under [CC BY 3.0 US](https://creativecommons.org/licenses/by/3.0/us/). ([Original file](https://thenounproject.com/term/screen-game/616239/))

Edited with [Android Material Shadow Generator](https://android-material-icon-generator.bitdroid.de/) licensed under [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/)

Leaderboard images ([1](https://github.com/christianascone/meteor-webapp-tesi/blob/master/meteor/TesiMagistrale/public/images/pole-1.svg), [2](https://github.com/christianascone/meteor-webapp-tesi/blob/master/meteor/TesiMagistrale/public/images/pole-2.svg), [3](https://github.com/christianascone/meteor-webapp-tesi/blob/master/meteor/TesiMagistrale/public/images/pole-3.svg)) by [YouToDesign](http://www.youtodesign.com) is licensed under [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/). ([Original file](http://www.youtodesign.com/Vector/LogosIcons/2014/0729/2765.html))

Memory cards images:
> - [Howl's moving castle](http://i.imgur.com/HzFbUWC.jpg)
> - [Howl's moving castle 2](http://www.gatto999.it/images/stories/Movie/Howls%20Moving%20Castle%20(4).jpg)
> - [Chocobo](http://vignette1.wikia.nocookie.net/ssb-allstars/images/f/fc/CT_Chocobo.png/revision/latest?cb=20130908001258)
> - [Cloud Strife](http://s267.photobucket.com/user/Animecrazy9161/media/Final%20fantasy/CloudStrife4.jpg.html)
> - [Totoro](http://1.bp.blogspot.com/-6-rpLsC-nGM/UVGFxHnjNFI/AAAAAAAAA7Y/j1qbh2_jdEg/s1600/totoro_by_noodlecutie123-d3j76oj.png)
> - [Yoda](http://orig09.deviantart.net/d3f0/f/2013/152/8/9/yoda_is_cool__by_yellow_submarine7-d67hyss.png) by DeviantArt
> - [Laputa's Castle](http://img00.deviantart.net/839e/i/2015/182/0/d/laputa__castle_in_the_sky_over_achensee___wp_by_fantasio-d8zco4i.jpg) by DeviantArt
> - [Pikachu in Charizard Costume](https://s-media-cache-ak0.pinimg.com/originals/98/2c/d8/982cd88ff2d4285eb3596073b14272ad.jpg)
> - [Unknown symbol](http://destiny.wikia.com/wiki/File:Unknown_License.png) by [T3CHNOCIDE](http://destiny.wikia.com/wiki/User:T3CHNOCIDE) licensed under [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).