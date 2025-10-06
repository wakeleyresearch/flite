# Claude Code Instructions: Professional Slidev Presentation with D3.js Visualizations

## Project Overview
This is a professional academic presentation built with Slidev, targeting PhD students. The presentation combines theoretical content with interactive data visualizations for business decision-making insights. Quality, performance, and pedagogical clarity are paramount.

## Technology Stack

### Core Framework
- **Slidev**: Markdown-based presentation framework built on Vue 3 and Vite
- **Vite**: Fast build tool and dev server with HMR
- **Vue 3 SFCs**: Single File Components with Composition API
- **TypeScript**: Type-safe code throughout

### Styling & UI
- **Tailwind CSS**: Utility-first styling framework
- **daisyUI**: Component library for Tailwind with theme management
- **SCSS/PostCSS**: For custom styles when Tailwind is insufficient
- Use Tailwind's JIT mode for optimal bundle size
- Prefer Tailwind utilities over custom CSS (90/10 rule)
- Use daisyUI semantic color classes (primary, secondary, accent, etc.) for consistent theming

### Data Visualization
- **D3.js v7+**: Low-level visualization primitives for maximum control
- **VueUse**: Reactivity and lifecycle helpers (@vueuse/core)
- **Faker.js**: Realistic mock data generation

### Data Management
- **Reactive data patterns**: Leverage Vue's reactivity system
- **Computed properties**: For derived visualizations
- **Watch/watchEffect**: For D3 updates tied to reactive state

## Architecture Principles

### Component Structure
```
slides/
├── slides.md              # Main presentation file
├── components/           
│   ├── charts/           # D3 visualization components
│   │   ├── BarChart.vue
│   │   ├── LineChart.vue
│   │   ├── ScatterPlot.vue
│   │   └── ForceGraph.vue
│   ├── interactive/      # Interactive demos
│   └── layouts/          # Custom slide layouts
├── composables/          # Reusable composition functions
│   ├── useD3.ts         # D3 integration helpers
│   ├── useChartResize.ts
│   └── useDataGenerator.ts
├── utils/
│   ├── dataTransforms.ts
│   └── scales.ts
├── styles/
│   └── custom.scss
└── public/
    └── data/             # Static datasets if needed
```

### Integration Pattern: D3 + Vue
**CRITICAL**: D3 and Vue must cooperate, not conflict. Follow these rules:

1. **Vue Owns the Reactivity**: Use Vue's reactive data for chart state
2. **D3 Owns the Rendering**: Use D3 for SVG manipulation and calculations
3. **Separation of Concerns**: 
   - Vue template defines container structure
   - D3 populates and updates SVG elements
   - Avoid mixing Vue directives with D3-managed elements

#### Preferred Pattern (Composition API)
```vue
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as d3 from 'd3'
import { useElementSize } from '@vueuse/core'

interface DataPoint { x: number; y: number }
const props = defineProps<{ data: DataPoint[] }>()

const chartRef = ref<SVGSVGElement | null>(null)
const { width, height } = useElementSize(chartRef)

function renderChart() {
  if (!chartRef.value || !props.data.length) return
  
  const svg = d3.select(chartRef.value)
  svg.selectAll('*').remove() // Clean slate for re-render
  
  // D3 rendering logic here
  const xScale = d3.scaleLinear()
    .domain(d3.extent(props.data, d => d.x) as [number, number])
    .range([margin.left, width.value - margin.right])
  
  // ... rest of D3 code
}

// React to data or size changes
watch([() => props.data, width, height], renderChart, { deep: true })
onMounted(renderChart)
</script>

<template>
  <svg ref="chartRef" class="w-full h-full" />
</template>
```

## Best Practices

### D3.js Integration
1. **Avoid Direct DOM Manipulation**: Let D3 select and manipulate, but within Vue's lifecycle
2. **Use D3 for Math, Not DOM**: Prefer D3's scales, shapes, and forces; minimize DOM operations
3. **Cleanup**: Always remove event listeners and clear selections in `onUnmounted`
4. **Performance**: 
   - Use `d3.select` once, cache selections when possible
   - Leverage D3's data joins (enter/update/exit) for efficient updates
   - For large datasets (>1000 points), consider Canvas instead of SVG
5. **Responsive Design**: Use VueUse's `useElementSize` for responsive charts
6. **Transitions**: Use D3 transitions sparingly in presentations (can be jarring)

### Vue Composition API
1. **Prefer `<script setup>`**: More concise, better TypeScript inference
2. **Extract Reusable Logic**: Create composables for common chart patterns
3. **Type Everything**: Define interfaces for all data structures
4. **Reactive Best Practices**:
   - Use `ref` for primitives, `reactive` for objects
   - Destructure reactive objects with `toRefs`
   - Use `computed` for expensive derivations
   - Use `watchEffect` for automatic dependency tracking

### Slidev-Specific
1. **Slide Layouts**: Create custom layouts in `./layouts/` for consistent chart slides
2. **Transitions**: Use Slidev's built-in transitions (`slide-left`, `fade`, etc.)
3. **Code Highlighting**: Use Shiki's syntax highlighting for code blocks
4. **Progressive Disclosure**: Use `v-click` for step-by-step reveals
5. **Presenter Notes**: Add `<!--notes-->` sections for speaker notes
6. **Two-Column Layouts**: Use Slidev's grid system for side-by-side content

### Data Visualization Principles (from references)

#### Design
1. **Clarity Over Cleverness**: Simple, well-labeled charts beat complex 3D visualizations
2. **Appropriate Chart Types**:
   - Bar: Comparisons, categorical data
   - Line: Trends over time, continuous data
   - Scatter: Correlations, distributions
   - Pie (use sparingly): Parts of whole, max 5-6 categories
   - Force-directed: Networks, relationships
3. **Color**: 
   - Use colorblind-friendly palettes (D3 schemes: `schemeTableau10`, `schemeSet2`)
   - Limit to 5-7 distinct colors per chart
   - Use sequential scales for continuous data
   - Use diverging scales for data with meaningful midpoint
4. **Typography**: 
   - Minimum 14pt for axis labels
   - 18pt+ for titles
   - Sans-serif fonts for screens
5. **White Space**: Don't overcrowd; let data breathe
6. **Interactivity**: Add tooltips, hover states, click handlers for deeper exploration

#### Business Decision-Making Focus
1. **Tell a Story**: Each visualization should answer a specific business question
2. **Context is Key**: Always include:
   - Clear titles explaining what's shown
   - Axis labels with units
   - Legends when needed
   - Data sources and timestamps
3. **Highlight Insights**: Use annotations, color, or size to draw attention to key findings
4. **Show, Don't Just Tell**: Visualize trends, outliers, and patterns
5. **Enable Comparison**: Use consistent scales and colors across related charts
6. **Support Decision-Making**: Include:
   - Benchmarks or targets (reference lines)
   - Confidence intervals or uncertainty
   - Historical context (where appropriate)

### Code Quality
1. **TypeScript Strict Mode**: Enable all strict checks
2. **ESLint + Prettier**: Enforce consistent style
3. **Comments**: Document complex D3 calculations and business logic
4. **DRY Principle**: Extract repeated D3 patterns into utility functions
5. **Naming Conventions**:
   - Components: PascalCase (e.g., `BarChart.vue`)
   - Composables: camelCase with `use` prefix (e.g., `useD3Chart.ts`)
   - Files: kebab-case for utilities (e.g., `data-transforms.ts`)
6. **File Size**: Keep components under 300 lines; split if larger

### daisyUI Theme System
1. **Semantic Colors**: Use daisyUI color tokens for consistency
   - `primary`: Main brand color (dark blue #1e40af)
   - `secondary`: Secondary accent (teal #0f766e)
   - `accent`: Highlight color (purple #7c3aed)
   - `neutral`: Text and borders (dark gray #1f2937)
   - `base-100/200/300`: Background colors
   - `success/warning/error/info`: Status colors
2. **Usage in Components**:
   - Use `bg-primary`, `text-primary`, `border-primary` for themed colors
   - Prefer daisyUI classes over arbitrary color values
   - Use `btn`, `card`, `badge`, `alert` components when appropriate
3. **Custom Chart Colors**: Use the `chart.*` color palette for D3 visualizations
   - Maintains high contrast and accessibility
   - Consistent with overall theme
4. **Theme Customization**: Modify `tailwind.config.js` daisyui.themes to adjust colors globally

### Performance
1. **Lazy Loading**: Use dynamic imports for heavy chart components
2. **Memoization**: Use `computed` for expensive calculations
3. **Debounce**: Debounce resize handlers (VueUse's `useDebounceFn`)
4. **Virtual DOM Optimization**:
   - Use `v-once` for static content
   - Use `v-memo` for expensive list renders
5. **Bundle Size**: 
   - Import D3 modules selectively (not entire library)
   - Tree-shake unused Tailwind classes
   - Optimize images (WebP, lazy loading)

### Faker.js Data Generation
1. **Realistic Data**: Use Faker to create plausible business scenarios
2. **Seed for Reproducibility**: Set faker seed for consistent demos
3. **Data Volume**: Generate appropriate dataset sizes (10-100 for detailed charts, 1000+ for aggregations)
4. **Business Domains**: Use faker modules relevant to business:
   - `faker.commerce`: Products, prices
   - `faker.company`: Company names, metrics
   - `faker.finance`: Accounts, transactions
   - `faker.datatype`: Numbers, dates

### Accessibility
1. **Alt Text**: Provide text descriptions of visualizations
2. **Keyboard Navigation**: Ensure interactive charts are keyboard-accessible
3. **Color Contrast**: Maintain WCAG AA standards (4.5:1 for text)
4. **Screen Readers**: Use ARIA labels for chart elements
5. **Motion**: Respect `prefers-reduced-motion` for animations

## Common Patterns

### Responsive Chart Composable
```typescript
import { ref, onMounted, onUnmounted } from 'vue'
import { useElementSize } from '@vueuse/core'
import * as d3 from 'd3'

export function useD3Chart(
  renderFn: (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, 
             width: number, 
             height: number) => void
) {
  const chartRef = ref<SVGSVGElement | null>(null)
  const { width, height } = useElementSize(chartRef)
  
  const margin = { top: 20, right: 30, bottom: 40, left: 50 }
  
  function render() {
    if (!chartRef.value) return
    const svg = d3.select(chartRef.value)
    svg.selectAll('*').remove()
    renderFn(svg, width.value - margin.left - margin.right, 
                  height.value - margin.top - margin.bottom)
  }
  
  watch([width, height], render)
  onMounted(render)
  
  return { chartRef, width, height, margin }
}
```

### Data Transform Utilities
```typescript
// utils/dataTransforms.ts
export function normalizeData<T>(
  data: T[], 
  key: keyof T
): Array<T & { normalized: number }> {
  const values = data.map(d => Number(d[key]))
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  
  return data.map((d, i) => ({
    ...d,
    normalized: (values[i] - min) / range
  }))
}

export function rollupByCategory<T>(
  data: T[],
  categoryKey: keyof T,
  valueKey: keyof T,
  aggregation: 'sum' | 'mean' | 'count' = 'sum'
): Map<string, number> {
  return d3.rollup(
    data,
    v => {
      if (aggregation === 'sum') return d3.sum(v, d => Number(d[valueKey]))
      if (aggregation === 'mean') return d3.mean(v, d => Number(d[valueKey])) ?? 0
      return v.length
    },
    d => String(d[categoryKey])
  )
}
```

## Example Slide Structure

```markdown
---
layout: center
class: text-center
---

# Business Decision-Making with Data Visualization

PhD Lecture Series

---
layout: two-cols
---

# Revenue Trends

Analysis of quarterly performance across product lines

<RevenueLineChart :data="revenueData" />

::right::

## Key Insights

<v-clicks>

- Q3 shows 23% growth YoY
- Product A outperforming expectations
- Seasonal patterns emerge in retail segment

</v-clicks>

<!--notes
Emphasize the inflection point in Q3 - this aligns with our marketing campaign launch.
Ask: What factors might explain Product A's performance?
-->

---
layout: default
---

# Interactive Exploration

<CustomerSegmentScatter 
  :data="customerData"
  @point-click="handlePointClick"
/>

<!-- Component shows customer lifetime value vs acquisition cost -->
```

## Debugging & Development

### Development Workflow
1. **Hot Module Replacement**: Vite provides instant updates
2. **Vue DevTools**: Install browser extension for reactive debugging
3. **D3 Debugging**: 
   - Log scales and data joins
   - Use `selection.nodes()` to inspect DOM
   - Check computed domains and ranges
4. **Console Logging**: Remove before production

### Common Pitfalls
1. **D3 Version Conflicts**: Use D3 v7+ syntax (no `selection.enter().append()` chains)
2. **Vue Reactivity Loss**: Don't destructure reactive objects without `toRefs`
3. **SVG Overflow**: Set `overflow: visible` or adjust viewBox
4. **Scale Domain Errors**: Always validate data extents (handle null/undefined)
5. **Memory Leaks**: Clean up D3 event listeners in `onUnmounted`

## Testing (if applicable)
1. **Vitest**: For unit testing composables and utilities
2. **Visual Regression**: Percy or Chromatic for chart rendering
3. **Snapshot Tests**: For component output consistency
4. **Data Validation**: Test edge cases (empty data, single point, outliers)

## Build & Deployment
1. **Build Command**: `npm run build` creates static SPA
2. **Preview**: `npm run preview` tests production build
3. **Export PDF**: Use Slidev's `--export` flag for PDF output
4. **Hosting**: It will be hosted locally.
5. **Performance Budget**: Target <500KB initial bundle

## Resources
- Slidev Docs: https://sli.dev
- D3.js API: https://d3js.org/api
- VueUse: https://vueuse.org
- Vue 3 Composition API: https://vuejs.org/guide/extras/composition-api-faq.html
- D3 Observable: https://observablehq.com/@d3 (for examples)
- Chart Types Guide: https://datavizproject.com

## Working Approach
When building this presentation, I should:

1. **Start with Data**: Define realistic business scenarios and data structures
2. **Design First**: Sketch the visualization before coding
3. **Iterate**: Build basic charts, then enhance with interactivity
4. **Test Responsiveness**: Check at various screen sizes (projector aspect ratios)
5. **Optimize Last**: Make it work, make it right, make it fast
6. **Document**: Add clear comments explaining business context and calculations

When asked to create or modify components:
- Always use TypeScript with proper types
- Follow the D3 + Vue integration pattern outlined above
- Include responsive sizing with VueUse
- Add clear prop definitions and emits
- Use Tailwind for styling unless custom CSS is necessary
- Provide meaningful variable names that reflect business concepts
- Add comments for complex D3 transformations or business logic

## Advanced Techniques

### Custom Scales for Business Metrics
```typescript
// For displaying currency
const formatCurrency = d3.format('$,.0f')
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.revenue) ?? 0])
  .range([height, 0])
  .nice()

// For percentages
const formatPercent = d3.format('.1%')
```

### Animations & Transitions (Use Sparingly in Academic Context)
```typescript
// Only animate when it clarifies the data story
svg.selectAll('circle')
  .transition()
  .duration(750)
  .delay((d, i) => i * 50)
  .attr('r', d => radiusScale(d.value))
```

### Legends and Annotations
```typescript
// Always include clear legends for multi-series data
const legend = svg.append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${width - 100}, 20)`)

categories.forEach((cat, i) => {
  const legendRow = legend.append('g')
    .attr('transform', `translate(0, ${i * 20})`)
  
  legendRow.append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('fill', colorScale(cat))
  
  legendRow.append('text')
    .attr('x', 18)
    .attr('y', 10)
    .text(cat)
})
```

## Business Visualization Checklist
Before finalizing any chart, verify:
- [ ] Title clearly states what is being shown
- [ ] Axes are labeled with units
- [ ] Data source and date are indicated
- [ ] Color scheme is accessible and consistent
- [ ] Key insights are visually highlighted
- [ ] Chart type is appropriate for data and question
- [ ] Interactive elements have clear affordances
- [ ] Chart is responsive and legible at presentation scale
- [ ] No misleading scales or distortions
- [ ] Professional typography throughout

## Remember
This is an academic presentation for PhD students studying business decision-making. Every visualization should:
1. **Educate**: Clearly demonstrate a concept or insight
2. **Engage**: Use appropriate interactivity to foster exploration
3. **Enlighten**: Reveal patterns or relationships in data
4. **Exemplify**: Serve as a best-practice example of data visualization

Prioritize clarity, accuracy, and pedagogical value over flashy effects.
