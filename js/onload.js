(function() {
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.8645d252f07ec25fdbc6.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-packages~Information~NoAddressLocation~Payment~PostPurchase~Review~Shipping~ShopPay~Sho~cf13f96e.latest.en.04837ae4ff5a8e949953.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information~Payment~ShopPay.latest.en.84ff9c0024faf7f72c14.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.en.900911b3d82c82309ebf.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-ui~app.latest.en.86cd9328cdcd6cd3a58f.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/vendors~app.latest.en.b4546f9bffad10b3673b.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-packages~app.latest.en.f5154093d2604596d084.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.931851b1b02f1bcae42a.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-ui~app.latest.en.9f2a5e9ec696775e2217.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/vendors~app.latest.en.e788719f193b49c039a3.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.6b4c79ead7042980b29d.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information~Payment~ShopPay.latest.en.da9f06164a980bf8e7ea.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.en.9a0274ab07be120c1902.css"];

    function prefetch(url, as, callback) {
      var link = document.createElement('link');
      if (link.relList.supports('prefetch')) {
        link.rel = 'prefetch';
        link.fetchPriority = 'low';
        link.as = as;
        link.href = url;
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onloadend = callback;
        xhr.send();
      }
    }

    function prefetchAssets() {
      var resources = [].concat(
        scripts.map(function(url) { return [url, 'script']; }),
        styles.map(function(url) { return [url, 'style']; })
      );
      var index = 0;
      (function next() {
        var res = resources[index++];
        if (res) prefetch(res[0], res[1], next);
      })();
    }

    addEventListener('load', prefetchAssets);
   })();




   