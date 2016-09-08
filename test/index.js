import 'babel-register'
import test from 'ava'
import jsdom from 'jsdom-global'
import scrape from '../'

jsdom(
  `<html>
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="meta_description">
      <meta property="og:description" content="meta_description">
      <meta name="twitter:title" content="meta_title">
    </head>
  </html>`
)

const data = {
  'X-UA-Compatible': 'IE=edge',
  viewport: 'width=device-width, initial-scale=1',
  description: 'meta_description',
  'og:description': 'meta_description',
  'twitter:title': 'meta_title'
}

test('defaults', t => {
  t.plan(1)

  const d = scrape()

  t.deepEqual(d, data)
})

test('regex', t => {
  t.plan(1)

  const d = scrape({name: /property/})

  t.deepEqual(d, {'og:description': 'meta_description'})
})

test('string', t => {
  t.plan(1)

  const d = scrape({name: 'name'})

  t.deepEqual(d, {
    viewport: 'width=device-width, initial-scale=1',
    description: 'meta_description',
    'twitter:title': 'meta_title'
  })
})
