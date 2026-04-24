# Brand Assets

Drop your FlipWorks logo files into this folder.

## Expected file

Save your logo as **`logo.png`** (or `logo.svg`) in this folder:

```
public/brand/logo.png
```

The navbar (`src/components/Nav.tsx`) is already wired to display
`/brand/logo.png` if it exists. If you use a different filename or
extension (e.g. `logo.svg`), update the `src` in `Nav.tsx` accordingly.

## Recommendations

- **Format:** SVG preferred (sharp at any size). PNG with transparent background also works.
- **Aspect ratio:** Roughly horizontal (e.g. 4:1) works best for the navbar.
- **Size:** At least 256px tall for crisp rendering on retina displays.
- **Variants (optional):**
  - `logo.png` — main full-color logo
  - `logo-mark.png` — icon/mark only (square)
  - `logo-white.png` — light version for dark backgrounds
