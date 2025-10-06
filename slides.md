---
# Slidev Configuration
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Professional Academic Presentation
  Template with D3.js interactive charts
drawings:
  persist: false
transition: slide-left
title: Research Presentation Title
mdc: true
htmlAttrs:
  data-theme: retro
---

<style src="./style.css"></style>

::title::

# Research Presentation Title

::subtitle::

A comprehensive analysis of [Topic Area]

::author::

**Your Name**
Institution Name
Date


---
layout: section
---

# Introduction

Overview of the research domain


---
layout: default
---

# Slide Title Here

## Key Points

- First major point with supporting evidence
- Second critical finding or methodology
- Third insight from the research
- Additional context and implications

<div class="callout mt-8">
💡 <strong>Key Insight:</strong> Important takeaway or emphasis point that deserves special attention
</div>


---
layout: two-cols
---

::title::

# Comparative Analysis

::left::

## Traditional Approach

- Conventional methodology
- Established baseline metrics
- Historical performance data
- Known limitations

::right::

## Proposed Method

- Novel technique or innovation
- Improved metrics
- Enhanced performance
- Addressed limitations


---
layout: image-right
---

# Visual Evidence

## Research Findings

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Key findings demonstrate significant improvements across multiple metrics.

- Statistical significance: p < 0.05
- Effect size: Cohen's d = 0.8
- Sample size: n = 500

::image::

<BarChart
  :data="[
    { label: 'Baseline', value: 65 },
    { label: 'Method A', value: 78 },
    { label: 'Method B', value: 85 },
    { label: 'Proposed', value: 92 }
  ]"
  title="Performance Comparison"
  yLabel="Accuracy (%)"
  color="#0ea5e9"
/>


---
layout: center
---

# Interactive Data Visualization

<div class="h-[500px] w-full">
<LineChart
  :data="[
    { x: 0, y: 10 },
    { x: 1, y: 25 },
    { x: 2, y: 35 },
    { x: 3, y: 50 },
    { x: 4, y: 65 },
    { x: 5, y: 75 },
    { x: 6, y: 82 },
    { x: 7, y: 88 }
  ]"
  title="Learning Curve Analysis"
  xLabel="Training Epochs"
  yLabel="Model Accuracy (%)"
  :showPoints="true"
/>
</div>


---
layout: default
---

# Statistical Distribution

<div class="grid grid-cols-2 gap-8 h-[450px]">
  <div>
    <ScatterPlot
      :data="scatterData"
      title="Feature Correlation"
      xLabel="Feature X"
      yLabel="Feature Y"
      :pointSize="5"
    />
  </div>
  <div>
    <PieChart
      :data="[
        { label: 'Category A', value: 30 },
        { label: 'Category B', value: 25 },
        { label: 'Category C', value: 20 },
        { label: 'Category D', value: 15 },
        { label: 'Category E', value: 10 }
      ]"
      title="Distribution Analysis"
    />
  </div>
</div>

<script setup>
import { faker } from '@faker-js/faker'
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import ScatterPlot from './components/ScatterPlot.vue'
import PieChart from './components/PieChart.vue'

const scatterData = Array.from({ length: 50 }, (_, i) => ({
  x: faker.number.float({ min: 0, max: 100 }),
  y: faker.number.float({ min: 0, max: 100 }),
  label: `Point ${i + 1}`
}))
</script>


---
layout: default
---

# Methodology

## Experimental Design

1. **Data Collection**
   - Sample size and demographics
   - Inclusion/exclusion criteria
   - Data sources and validation

2. **Analysis Framework**
   - Statistical methods employed
   - Tools and software utilized
   - Quality control measures

3. **Validation Procedures**
   - Cross-validation strategy
   - Robustness checks
   - Sensitivity analysis


---
layout: default
---

# Results Summary

<div class="grid grid-cols-3 gap-6 my-12">

<div class="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
<div class="text-5xl font-bold text-primary-600 mb-2">92%</div>
<div class="text-lg text-gray-700">Primary Metric</div>
</div>

<div class="bg-green-50 p-6 rounded-lg border-2 border-green-200">
<div class="text-5xl font-bold text-green-600 mb-2">+18%</div>
<div class="text-lg text-gray-700">Improvement</div>
</div>

<div class="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
<div class="text-5xl font-bold text-purple-600 mb-2">500</div>
<div class="text-lg text-gray-700">Sample Size</div>
</div>

</div>

## Key Findings

- Significant improvement over baseline methods
- Robust across different experimental conditions
- Scalable to larger datasets


---
layout: two-cols
---

::title::

# Discussion

::left::

## Strengths

- Novel approach to problem
- Strong empirical validation
- Reproducible methodology
- Clear practical applications

::right::

## Limitations

- Scope constraints
- Potential confounding factors
- Generalizability considerations
- Future work needed


---
layout: default
---

# Future Research Directions

## Short-term Goals

- Expand dataset size and diversity
- Test additional edge cases
- Optimize computational efficiency

## Long-term Vision

- Apply to related problem domains
- Develop production-ready implementation
- Establish industry partnerships

## Open Questions

- How does this scale to real-world scenarios?
- What are the theoretical bounds?
- Can this integrate with existing systems?


---
layout: section
---

# Conclusions

Synthesizing the key contributions


---
layout: default
---

# Key Takeaways

<div class="text-2xl space-y-6 my-12">

1. **Primary Contribution**: Brief description of the main research contribution

2. **Empirical Evidence**: Strong validation through comprehensive experiments

3. **Practical Impact**: Real-world applicability and benefits

4. **Future Potential**: Promising directions for continued research

</div>


---
layout: center
class: text-center
---

# Thank You

## Questions & Discussion

**Contact Information**
email@institution.edu
https://research-website.edu

<div class="mt-8 text-gray-500">
Presentation created with Slidev + D3.js
</div>
