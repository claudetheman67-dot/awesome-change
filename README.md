# awesome change - Website

A clean, minimal portfolio website for your paintings.

## Folder structure
```
awesome-change-site/
  index.html        - Home page
  gallery.html      - Gallery grid
  about.html        - About page
  contact.html      - Contact page
  painting.html     - Painting detail page (template)
  styles.css        - Styles
  app.js            - Gallery loader
  paintings.json    - Painting data
  images/           - Put your painting photos here
  README.md         - This file
```

## How to add paintings

### 1. Add images to the images folder
Name them something like:
- `painting-1.jpg`
- `painting-2.jpg`
- etc.

### 2. Update paintings.json
Add entries like this:

```json
{
  "id": 1,
  "title": "Through the Door",
  "year": "2025",
  "medium": "Acrylic on canvas",
  "size": "40 × 50 cm",
  "description": "A painting about entering strange worlds.",
  "image": "images/painting-1.jpg"
}
```

### 3. Test locally
Open `index.html` in your browser to see how it looks.

## Hosting on GitHub Pages

1. Create a GitHub account (if you don't have one)
2. Create a new repository (e.g., `awesome-change`)
3. Upload all these files
4. Go to Settings → Pages
5. Enable GitHub Pages (main branch)
6. Get your site URL
7. Create a QR code from that URL

## Next steps
- Add 6-12 of your best painting photos
- Update paintings.json with real data
- Test on phone to make sure it looks good
- Host on GitHub Pages
- Share with QR code
