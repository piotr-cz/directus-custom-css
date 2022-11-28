# Directus Custom CSS generator

See *Directus Docs > [Branding & Style](https://docs.directus.io/configuration/project-settings.html#branding-style)* for more info.

## Requirements

- Directus 9

## Usage

1. Create Custom CSS snippet (You may use your *Project Color*)
1. In your Directus installation, go to *Project Settings > Branding & Style*
1. Paste snippet into the *Custom CSS* field

### Browser

1. Serve project
   ```console
   npm start
   ```
1. Open <http://localhost:3000/>

### Node

1. Install dependecies
   ```console
   npm install
   ```

1. Generate snippet
   ```console
   node bin/directus-custom-css.js '#ff0000'
   ```

### Similar projects

- [A Theme Builder for Directus](https://themebuilder.thijmenheuvelink.nl/)
