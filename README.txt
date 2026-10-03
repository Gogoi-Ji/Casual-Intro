ADITYA.EXE PORTFOLIO
====================

FILES
-----
index.html   = page structure
styles.css   = visual theme and responsive layout
script.js    = JavaScript/interactions
config.js    = CHANGE ALMOST EVERYTHING HERE
README.txt   = this guide

HOW TO USE
----------
Keep all files in the same folder.

Open index.html in your browser.

CONFIG.JS
---------
You can now edit the main website content from config.js without changing
HTML or JavaScript.

You can change:
- siteTitle
- name / initials
- badge
- intro
- about / aboutExtra
- currentlyExploring
- socials
- contact
- funCards
- footerName / footerBrand
- polaroidCaption / polaroidHint
- photo.src / photo.alt / photo.fallbackText
- section headings and button text
- secret room text
- light and dark theme colors

DARK / LIGHT MODE
-----------------
A Dark / Light button is fixed at the top-right.

The visitor can switch themes while browsing.

The selected theme is remembered in localStorage when:
theme.rememberChoice = true

Set:
theme.default = "light"
or:
theme.default = "dark"

THEME COLORS
------------
All theme colors are inside config.js:

theme.light = {...}
theme.dark = {...}

Change the hex values there to redesign the whole website.

PROFILE PHOTO
-------------
The profile photo is now fully configurable from config.js.

Change this: \n
photo: {
  src: "profile.jpg",
  alt: "Aditya Gogoi",
  fallbackText: "AG"
}

To use another image, put it beside index.html and change src.
Examples:
  src: "myphoto.jpg"
  src: "assets/profile.png"

If the image cannot be loaded, fallbackText is shown instead.

SOCIAL LINKS
------------
In config.js:

{
  name: "GitHub",
  icon: "⌘",
  url: "https://github.com/YOUR_USERNAME",
  theme: "white"
}

Available themes:
yellow / white / purple / green

CONTACT
-------
Email:
yourmail@example.com

WhatsApp:
country code + number, WITHOUT + or spaces.

Example:
919999999999

Phone:
+919999999999

NO SERVER REQUIRED
------------------
This is plain HTML + CSS + JavaScript.
You can open index.html directly.
