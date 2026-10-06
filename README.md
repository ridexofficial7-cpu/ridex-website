# RideX Public Website

Public landing website for **myxride.com**.

## Purpose

This repository contains only the public RideX website. It is intentionally separate from:

- RideX Backend
- RideX Broadcaster Provider
- RideX Admin Panel

## Current state

The homepage is a responsive, lightweight static site using:

- `index.html`
- `style.css`
- `script.js`
- `assets/reference/homepage-design-reference.png`

## Public links configuration

Edit `script.js` and replace these placeholders once the final URLs are confirmed:

```js
const RIDEX_SITE_CONFIG = {
  adminLoginUrl: "#",
  customerAppUrl: "#",
  driverAppUrl: "#",
};
```

Do **not** put API keys, database URLs, private keys, passwords or backend secrets in the public website repository.

## Local test

Open `index.html` directly in a browser, or serve the folder with any static HTTP server.

Example:

```powershell
python -m http.server 8080
```

Then open:

`http://localhost:8080`

## Deployment target

Public website:

`https://myxride.com/`

The Admin Login button should point to the separately hosted RideX Admin Web service after its final public URL is confirmed.
