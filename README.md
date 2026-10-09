# The Last Block Benders

This folder is the master project edited in Cursor. Upload a ZIP of this project
through the Hostinger dashboard and redeploy using the existing build settings.

## Hostinger dashboard deployment

1. Save all changes in Cursor.
2. Compress the project contents into one ZIP. Include `apps/`, `scripts/`,
   `package.json`, and `package-lock.json`, with the package files at the ZIP root.
   Keep the complete `apps/` folder, including its public images and configuration.
   Local `node_modules/` and `dist/` are not needed: Hostinger installs dependencies
   and rebuilds the site. They can be excluded to keep the upload smaller.
3. Upload the ZIP through the same Hostinger deployment screen and redeploy.

Keep the working configuration:

| Setting | Value |
| --- | --- |
| Node | 24 |
| Package manager | npm |
| Build command | `npm run build` |
| Output directory | `dist/apps/web/client` |
| Entry file | None |
| Root directory | `./` |

The build copies `apps/web/public/`, including `images/story/`, into its output.
It then verifies the compiled assets, public files, and referenced story images.
A missing file fails the build rather than silently leaving an incomplete output.

This workflow uploads project source for a static Vite build. Do not use the
File Manager `public_html` upload instructions for this dashboard workflow.
No separate image upload is required.

## Local development

Run `npm install` once, then `npm run dev`. Run `npm run build` after changes.
The generated `dist/` folder is build output; make edits in `apps/web/`.
