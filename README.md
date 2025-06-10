# AusGov Website Demo

This is a simple HTML+JS demo showcasing a reusable **Australian Government masthead** component. It highlights how to indicate an official `.gov.au` website with best practices in design and security.

## Features

- ✅ Automatically inserts an AusGov masthead at the top of the page  
- 🔒 Educates users about `.gov.au` domains and HTTPS security  
- 📱 Responsive, accessible layout with toggleable information panel

## Basic Usage

1. Include the `masthead.js` module in your HTML:

   ```html
   <script type="module">
     import { mount } from './masthead.js';
     mount(); // Optional: pass a selector to mount in a specific element
   </script>
   ```

2. The masthead is injected at the top of the page by default if no container is specified.

## Files

- `index.html`: Sample government agency webpage  
- `masthead.js`: Shadow DOM-based AusGov masthead module  

## Hosting & Deployment

This component is intended to be hosted on **AWS infrastructure** (S3 + CloudFront), for scalable, fast, and secure delivery.

*Coming Soon*