# Shopgate Connect - Extension page-switcher

This extension adds a page switcher to the standard header. The selected page will be the 'home page' on the next start.

## Configuration

Set the following value in your Shopgate Connect Admin:

  * `pageLinking` - (json) Array
    * `label` - (string) The text displayed for the link.
    * `path` - (string) The internal path to the linked page.
    * `categoryId` - (string) The linked page belongs to this category.
    * `externalUrl` - (string) The URL to an external page. If specified, this URL is used instead of `path`.
    * `icon` - (string) If specified, the switch button will be this icon.
  * `linkColor` - (string) Color of links.
  * `linkSelectedColor` - (string) Color of the selected link.
  * `underlineOnActive` - (boolean) If `true`, the active link is underlined.
  * `showSwitcherInHeader` - (boolean) If `true`, the switcher is displayed inside the header - otherwise, it is positioned below.
  * `switcherBarBgColor` - (string) Background color of the switcher bar (when in after header mode).
  * `hideOnScroll` - (boolean) If `true`, the switcher bar hides when scrolling (when in after header mode).

## Example
```
{
  "pageLinking": [
    {
      "path": "/",
      "label": "Women",
      "categoryId": "123",
      "externalUrl": "",
      "icon": "<svg XYZ></svg>",
    },
    {
      "path": "/page/men",
      "label": "Men",
      "categoryId": "456",
      "externalUrl": "",
      "icon": "<svg XYZ></svg>",
    },
    {
      "path": "",
      "label": "Shopgate",
      "categoryId": "",
      "externalUrl": "https://www.shopgate.com",
    }
  ],
  "linkColor": "",
  "linkSelectedColor": "#000",
  "underlineOnActive": false,
  "navBarBgColor": "#fff",
  "showSwitcherInHeader": true,
  "hideOnScroll": true
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

