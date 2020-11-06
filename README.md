# Generation Profile Template

1. Click the `use this template` button to create a new repo in your account
2. Clone this repo onto your machine and open it in vscode
3. Install vscode extensions
   1. Live Server (this will allow you to view the page in chrome while you edit)
   2. Live Sass (this will build the css files as you edit)
4. Run `npm install` to install packages
5. Open `index.html`
6. Select `live server` from the bottom toolbar
7. If not already running, also select `Watch Sass` from the bottom toolbar
8. Open chrome with the address `localhost:5500` **port may be different**
9. Make your changes, commit, and push!
10. Give it a couple of minutes and your site should update.
    
## Features

- Colours are defined using `sass` variables. You can find these in `/sass/styles.sccs`. It's not wise to edit the `*.css` files directly as these are generated when the `*.scss` files are compiled.
- Typography is provided via `fonts.google.com`, if you wish to use a different typeface, visit this site and follow their instructions to replace the code snippit in the head of `/sass/styles.scss`. You'll also need to update the styles which reference these fonts, i.e `h1, h2, h3, and p`.
- Content blocks are clearly marked out in `index.html`, just replace the parts you need. Feel free to move the sections around for a different flow, or duplicate / remove parts.
- Social links will require updating to your actual links.
- The image slider supports an unlimited number of slides. Just duplicate a `slide` as many times as you'd like. Maybe you'll use this to feature one project, or one slide per project.
- Site may not look great on mobile as of now.