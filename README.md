# Shopgate Connect - Extension page-switcher

This extension adds a page switcher to the standard header. The selected page will be the 'home page' on the next start.

## Configuration

Set the following value in your Shopgate Connect Admin:

  * pageLinking - (json) Array
    * label - (string) Link label
    * path - (string) Path to the linked page
    * categoryId - (string) The page represents this category
  * linkColor - (string) Link color
  * linkSelectedColor - (string) Link color of the selected page

## Example
```
{
  "pageLinking": [
    {
      "label": "Women",
      "categoryId": "123",
      "path": "/"
    },
    {
      "label": "Men",
      "categoryId": "456",
      "path": "/page/men"
    },
    {
      "label": "Kids",
      "categoryId": "789",
      "path": "/page/kids"
    }
  ],
  "linkColor": "#bcbcbc",
  "linkSelectedColor": "#45818e"
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

