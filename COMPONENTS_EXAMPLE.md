# daisyUI Components Example Slides

Add these example slides to your `slides.md` to see daisyUI components in action:

## Stats Component Example

```markdown
---
layout: center
---

# Quarterly Performance

<div class="stats stats-vertical lg:stats-horizontal shadow-xl">

  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div class="stat-title">Total Revenue</div>
    <div class="stat-value text-primary">$89.4K</div>
    <div class="stat-desc">21% more than Q2</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div class="stat-title">New Users</div>
    <div class="stat-value text-secondary">4,200</div>
    <div class="stat-desc">↗︎ 400 (10%)</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-accent">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">Conversion Rate</div>
    <div class="stat-value text-accent">86%</div>
    <div class="stat-desc">↗︎ 12% improvement</div>
  </div>

</div>
```

## Cards for Information

```markdown
---
layout: default
---

# Research Methodology

<div class="grid grid-cols-3 gap-6">

<div class="card bg-base-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-primary">Phase 1</h2>
    <p>Data Collection</p>
    <div class="badge badge-primary">Complete</div>
  </div>
</div>

<div class="card bg-base-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-secondary">Phase 2</h2>
    <p>Analysis & Modeling</p>
    <div class="badge badge-secondary">In Progress</div>
  </div>
</div>

<div class="card bg-base-200 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-accent">Phase 3</h2>
    <p>Validation</p>
    <div class="badge badge-ghost">Pending</div>
  </div>
</div>

</div>
```

## Alert for Key Insights

```markdown
---
layout: default
---

# Key Findings

<div class="space-y-4">

<div class="alert alert-info">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>Market growth shows a 23% increase year-over-year</span>
</div>

<div class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Hypothesis validated with 95% confidence interval</span>
</div>

<div class="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Sample size limitations may affect generalizability</span>
</div>

</div>
```

## Timeline Component

```markdown
---
layout: default
---

# Project Timeline

<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start timeline-box font-bold">Jan 2024</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end">Literature Review Complete</div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="timeline-start timeline-box font-bold">Mar 2024</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end">Data Collection (n=500)</div>
    <hr class="bg-secondary" />
  </li>
  <li>
    <hr class="bg-secondary" />
    <div class="timeline-start timeline-box font-bold">Jun 2024</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-secondary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end">Statistical Analysis</div>
    <hr class="bg-accent" />
  </li>
  <li>
    <hr class="bg-accent" />
    <div class="timeline-start timeline-box font-bold">Oct 2024</div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-accent"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end">Publication Submitted</div>
    <hr />
  </li>
</ul>
```

## Progress Indicators

```markdown
---
layout: center
---

# Research Completion Status

<div class="space-y-8">

<div>
  <div class="flex justify-between mb-2">
    <span class="text-xl font-semibold">Literature Review</span>
    <span class="text-xl font-semibold text-primary">100%</span>
  </div>
  <progress class="progress progress-primary w-full h-4" value="100" max="100"></progress>
</div>

<div>
  <div class="flex justify-between mb-2">
    <span class="text-xl font-semibold">Data Collection</span>
    <span class="text-xl font-semibold text-secondary">85%</span>
  </div>
  <progress class="progress progress-secondary w-full h-4" value="85" max="100"></progress>
</div>

<div>
  <div class="flex justify-between mb-2">
    <span class="text-xl font-semibold">Analysis</span>
    <span class="text-xl font-semibold text-accent">60%</span>
  </div>
  <progress class="progress progress-accent w-full h-4" value="60" max="100"></progress>
</div>

<div>
  <div class="flex justify-between mb-2">
    <span class="text-xl font-semibold">Manuscript Draft</span>
    <span class="text-xl font-semibold text-warning">30%</span>
  </div>
  <progress class="progress progress-warning w-full h-4" value="30" max="100"></progress>
</div>

</div>
```

## Radial Progress for Metrics

```markdown
---
layout: center
---

# Model Performance Metrics

<div class="flex justify-around items-center">

<div class="text-center">
  <div class="radial-progress text-primary text-2xl font-bold" style="--value:92; --size:12rem; --thickness:1rem" role="progressbar">92%</div>
  <p class="text-xl mt-4 font-semibold">Accuracy</p>
</div>

<div class="text-center">
  <div class="radial-progress text-secondary text-2xl font-bold" style="--value:88; --size:12rem; --thickness:1rem" role="progressbar">88%</div>
  <p class="text-xl mt-4 font-semibold">Precision</p>
</div>

<div class="text-center">
  <div class="radial-progress text-accent text-2xl font-bold" style="--value:85; --size:12rem; --thickness:1rem" role="progressbar">85%</div>
  <p class="text-xl mt-4 font-semibold">Recall</p>
</div>

</div>
```

## Badge Usage

```markdown
---
layout: default
---

# Feature Status

<div class="space-y-4 text-2xl">

<p>
  <span class="font-semibold">Machine Learning Model</span>
  <span class="badge badge-primary badge-lg ml-3">Production</span>
  <span class="badge badge-success badge-lg ml-2">Validated</span>
</p>

<p>
  <span class="font-semibold">Data Pipeline</span>
  <span class="badge badge-secondary badge-lg ml-3">Beta</span>
  <span class="badge badge-warning badge-lg ml-2">Testing</span>
</p>

<p>
  <span class="font-semibold">Dashboard UI</span>
  <span class="badge badge-accent badge-lg ml-3">Development</span>
  <span class="badge badge-ghost badge-lg ml-2">V2.0</span>
</p>

<p>
  <span class="font-semibold">API Integration</span>
  <span class="badge badge-info badge-lg ml-3">Planned</span>
  <span class="badge badge-outline badge-lg ml-2">Q1 2025</span>
</p>

</div>
```
