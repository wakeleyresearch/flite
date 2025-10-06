# daisyUI Themes Guide for Professional Presentations

## Recommended Themes for Academic/Professional Presentations

### Best for Large Audiences (High Contrast)

1. **retro** (Current) - Warm vintage look with excellent readability
   ```yaml
   htmlAttrs:
     data-theme: retro
   ```

2. **corporate** - Clean, minimalist with neutral colors
   ```yaml
   htmlAttrs:
     data-theme: corporate
   ```

3. **business** - Professional dark theme
   ```yaml
   htmlAttrs:
     data-theme: business
   ```

4. **winter** - Crisp, light with professional blues
   ```yaml
   htmlAttrs:
     data-theme: winter
   ```

5. **nord** - Soft professional with muted tones
   ```yaml
   htmlAttrs:
     data-theme: nord
   ```

### All Available Themes (35 total)
```
light, dark, cupcake, bumblebee, emerald, corporate, synthwave,
retro, cyberpunk, valentine, halloween, garden, forest, aqua,
lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk,
autumn, business, acid, lemonade, night, coffee, winter, dim,
nord, sunset, procyon, fantasy, wireframe
```

## Using Multiple Themes

You can enable multiple themes in `tailwind.config.js`:

```javascript
daisyui: {
  themes: ["retro", "corporate", "business", "winter"],
}
```

Then switch themes on different slides:

```markdown
---
layout: default
htmlAttrs:
  data-theme: retro
---

# Slide with Retro Theme

---
layout: section
htmlAttrs:
  data-theme: corporate
---

# Section with Corporate Theme
```

## daisyUI Components for Presentations

### 1. Stats Component
Perfect for displaying key metrics:

```vue
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Total Revenue</div>
    <div class="stat-value text-primary">$89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
```

### 2. Card Component
Great for grouping related information:

```vue
<div class="card bg-base-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Key Finding</h2>
    <p>Your research insight goes here...</p>
  </div>
</div>
```

### 3. Badge Component
Highlight important labels:

```vue
<div class="badge badge-primary">New Feature</div>
<div class="badge badge-secondary">Beta</div>
<div class="badge badge-accent">Updated</div>
```

### 4. Alert Component
Draw attention to important points:

```vue
<div class="alert alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>Important insight about the data...</span>
</div>
```

### 5. Progress Component
Show completion or stages:

```vue
<progress class="progress progress-primary w-full" value="70" max="100"></progress>

<div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
```

### 6. Hero Component
Perfect for title slides:

```vue
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Research Title</h1>
      <p class="py-6">Subtitle and description</p>
    </div>
  </div>
</div>
```

### 7. Tooltip Component
Add contextual information:

```vue
<div class="tooltip" data-tip="Additional context">
  <button class="btn">Hover me</button>
</div>
```

### 8. Timeline Component
Show project progression:

```vue
<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start">Phase 1</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="timeline-end timeline-box">Data Collection</div>
    <hr class="bg-primary" />
  </li>
  <!-- More timeline items... -->
</ul>
```

## Color Utilities

Use daisyUI semantic colors consistently:

```html
<!-- Backgrounds -->
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-accent">Accent background</div>
<div class="bg-neutral">Neutral background</div>
<div class="bg-base-100">Base background (lightest)</div>
<div class="bg-base-200">Base background (medium)</div>
<div class="bg-base-300">Base background (darkest)</div>

<!-- Text -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-accent">Accent text</p>
<p class="text-neutral">Neutral text</p>
<p class="text-base-content">Base content (auto contrast)</p>
<p class="text-primary-content">Text on primary (auto contrast)</p>

<!-- Status Colors -->
<div class="bg-info">Information</div>
<div class="bg-success">Success</div>
<div class="bg-warning">Warning</div>
<div class="bg-error">Error</div>

<!-- Borders -->
<div class="border-2 border-primary">Primary border</div>
```

## Best Practices for Presentations

1. **Stick to One Theme Per Presentation** - Consistency is key
2. **Use Semantic Colors** - Always use `bg-primary` instead of `bg-blue-600`
3. **Leverage Stats Component** - Perfect for metrics and key numbers
4. **Use Cards for Grouping** - Organize related content visually
5. **Alert for Emphasis** - Draw attention to important points
6. **Keep It Simple** - Don't over-complicate with too many components

## Custom Theme Colors

If you want to fine-tune the current theme, edit `tailwind.config.js`:

```javascript
daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#1e40af",      // Your brand color
        "secondary": "#0f766e",
        "accent": "#7c3aed",
        "neutral": "#1f2937",
        "base-100": "#ffffff",
        "info": "#0ea5e9",
        "success": "#15803d",
        "warning": "#ca8a04",
        "error": "#dc2626",
      },
    },
  ],
}
```
