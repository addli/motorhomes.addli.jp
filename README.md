# motorhomes.addli.jp  [![CircleCI](https://circleci.com/gh/addli/motorhomes.addli.jp.svg?style=shield)](https://circleci.com/gh/addli/motorhomes.addli.jp)
This project purpose is demonstration of web development by +Li, Inc.
It has almost the same design as the native application.
Riot.js made it possible.
I am strongly influenced by iOS development.

## Point

### Project structure
* I bundled by rollup. I solved dependencies between libraries.
* Install libraries for npm. Looking at package.json makes it possible to understand dependent libraries. This was also conscious of native applications.
* I pulled out only grid system from bootstrap.We are assembling the style required by SPA from scratch.
* Logic is written in TypeScript.
  However, warnings are not output due to the [problem of rollup-plugin-typescript](https://github.com/rollup/rollup-plugin-typescript/issues/43). The benefits of adopting TypeScript have partially disappeared. Respond as soon as possible.
* Hjson is adopted so that you can write comments directly in the settings. My favorite configuration file format. json < yaml < hjson.

### Application implement
* It is a complete Single Page Application.
* Using OSS riot-tab, riot-nav of iq3AddLi. Implemented view management with screen transitions.
* Internationalized by i18next. Language automatically switches according to the language setting of the browser.
* Rendered markdown using marked.js.
* Not using JQuery. However, ajax is used for calling JSONP.

## What info is displayed in this application?
It is a list of motorhome builder in Japan. They make cars for residence rather than camping. As far as I know.
Someday I will develop from this demonstration. It might make a site handling motorhome information.
I long for motorhome.
Someday I'd like to make a nice motorhome I saw at Pintarest. Based on TOYOTA QuickDelivery.

## How to build this project

First, you need to put the following information in a file called .env.
```
GOOGLE_MAP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXXX-X
```

Please prepare .env and build the project.

```
gulp
```
or Shortcut in VSCode, Command + Shift + B.

## Appendix: Web technology substitutable to iOS Framework

iOS Frameworks| Web
:---|:--- 
UIAppDelegate & UIViewController | riot.js
NSNotificationCenter | riot-observable
UINavigationController | riot-nav
UITabBarController | riot-tab
NSDate & NSDateFormatter | moment.js
NSLocalizedString | i18next.js
Xcode | VSCode
Xcode ToolChain | gulp & rollup
CocoaPods | npm
Auto Layout | CSS
Universal Link | riot-route

## Technology used this time
* riot.js
* TypeScript
* Rollup
* gulp
* i18next.js
* marked.js
* moment.js
* HJson
* Sassy CSS(SASS)

I appreciate everyone who wrote these wonderful OSS.