# README #

This library is used to simplify the communication process between your [Mini Program](https://developer.vodapay.vodacom.co.za/mini-program) and [web-view](https://developer.vodapay.vodacom.co.za/docs/miniprogram_vodacom/mpdev/component_open_web-view).  
It was originally intended for logical analysis within a web-view but can also be modified for your usecase.

To start the app just run `npm run serve`. You can use the sample site provided in the root directory.

### Setting up Mini Program Webview sample ###

* axml:
```
<web-view id="web-view" src="http://localhost:3000/sample-site/index.html" onMessage="onMessage"></web-view>
```

* js:
```
import { adobeAnalytics } from 'vod-npm-mini-adobe-analytics';

Page({
  data: {
    webViewContext: null
  },
  onLoad() {
    this.webViewContext = my.createWebViewContext("web-view");
  },
  onMessage(e) {
    adobeAnalytics.webViewMessage(e); // Still to be implemented
  }
});
```

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines
