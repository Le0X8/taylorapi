## Cover art

All cover art is copyright to their respective creators.

### Retrieving generated cover art

Everything should already be uploaded to `https://cdn.taylor.leox.dev/covers/`.

### Generating cover art

1. Download the cover art in very high quality from [here](https://bendodson.com/projects/itunes-artwork-finder/).
2. Create smaller versions of the cover art using [ImageMagick](https://imagemagick.org/) with the following commands:
   ```bash
   magick convert "cover.jpg" -resize 192x192 "cover-small.jpg"
   magick convert "cover.jpg" -resize 96x96 "cover-tiny.jpg"
   ```
