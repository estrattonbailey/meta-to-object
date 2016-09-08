const matches = (val) => val instanceof RegExp ? (v) => { return v.match(val) ? true : false } : (v) => val === v

export default (options = {}) => {
  let meta = {}
  let metaTags = [].slice.call(document.head.getElementsByTagName('meta'))

  let matchName = matches(options.name || /./)
  let matchValue = matches(options.value || /./)

  metaTags.forEach(tag => {
    let attrs = [].slice.call(tag.attributes).filter(a => a.nodeName !== 'content')

    attrs.forEach(attr => {
      let val = tag.getAttribute('content') || false

      if (val && matchName(attr.nodeName) && matchValue(attr.value)){
        meta[attr.value] = val
      }
    })
  })

  return meta
}
