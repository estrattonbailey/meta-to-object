# meta-to-object
A tiny library that scrapes `document.head` for `<meta>` tags with `content` attributes. Useful for gathering social data.

## Usage
```html
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Default description tag.">
    <meta property="og:description" content="Open graph description tag.">
    <meta name="twitter:description" content="Twitter description tag.">
  </head>
</html>
```

```javascript
import scrape from 'meta-to-object'

const data = scrape({
  name: /name|property/,
  value: /description/ 
})

/**

data = {
  'description': 'Default description tag.',
  'og:description': 'Open graph description tag.',
  'twitter:description': 'Twitter description tag.'
}

*/
```

## API

### scrape({ name, value })

#### name 
Either a string or a regex to compare with the attribute name.

#### value 
Either a string or a regex to compare with the attribute found after comparison with the `name` parameter. 

* * *
 MIT License
