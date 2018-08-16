# @blunck/ga

[![Latest Version on NPM](https://img.shields.io/npm/v/@blunck/ga.svg?style=flat-square)](https://www.npmjs.com/package/@blunck/ga)

Simple tool to add Google Analytics tracking code to your website

## Installation
```bash
npm install @blunck/ga
```

## Usage
```javascript
import ga from '@blunck/ga'

// Add gtag.js script & initialize
ga.add('UA-XXXXXXXXX-X')

// Initialize without anonymizing ip address
ga.add('UA-XXXXXXXXX-X', false)

// Initialize with extra options
ga.add('UA-XXXXXXXXX-X', true, {
    page_path: '/home'
})

// Use window.gtag i.e. to send events
gtag('event', '<action>', {})

// Use window.gtagConfig to update configuration
gtagConfig({ 'page_path': '/search' })

// The previous example is short for:
gtag('config', 'UA-XXXXXXXXX-X', { 'page_path': '/search' })
```
