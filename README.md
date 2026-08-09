# Robin Yajie Wang — Academic Website

Bilingual academic website for Robin Yajie Wang, Assistant Professor of International Political Economy at The Chinese University of Hong Kong, Shenzhen.

## Local development

```bash
npm install
npm run dev
```

The English site is available at `/`; the Chinese site is available at `/zh/`.

## Quality checks

```bash
npm run check
npm run build
```

`npm run build` creates the static export in `out/` and then generates `sitemap.xml` and `robots.txt` for the production domain without external dependencies.

## Content and assets

- English profile content: `src/data/data.tsx`
- Chinese profile content: `src/data/zhData.tsx`
- Research, teaching, and data sections: `src/components/Sections/AcademicSections.tsx`
- CVs and syllabi: `public/`
- Portrait source and optimized derivative: `src/images/`
- Metadata and social sharing: `src/components/Layout/Page.tsx`

To regenerate optimized image and icon assets after replacing `src/images/profilepic.jpg`, run:

```powershell
& "C:\Users\Robin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" scripts\generate_assets.py
```

## Deployment

The site uses Next.js static export and the custom domain `robin-yajiewang.com`. Deploy the contents of `out/` to the static host.
