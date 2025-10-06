<template>
  <div ref="chartContainer" class="chart-container">
    <svg ref="svgRef" class="chart-svg"></svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as d3 from 'd3'
import { useElementSize } from '@vueuse/core'

interface DataPoint {
  label: string
  value: number
}

const props = withDefaults(defineProps<{
  data: DataPoint[]
  title?: string
  colorScheme?: string
}>(), {
  colorScheme: 'schemeCategory10'
})

const svgRef = ref<SVGSVGElement | null>(null)
const chartContainer = ref<HTMLDivElement | null>(null)
const { width, height } = useElementSize(chartContainer)

const drawChart = () => {
  if (!svgRef.value || width.value === 0 || height.value === 0) return

  const margin = { top: 60, right: 40, bottom: 40, left: 40 }
  const chartWidth = width.value - margin.left - margin.right
  const chartHeight = height.value - margin.top - margin.bottom
  const radius = Math.min(chartWidth, chartHeight) / 2

  // Clear existing content
  d3.select(svgRef.value).selectAll('*').remove()

  const svg = d3.select(svgRef.value)
    .attr('width', width.value)
    .attr('height', height.value)

  const g = svg.append('g')
    .attr('transform', `translate(${width.value / 2},${height.value / 2})`)

  // Color scale
  const color = d3.scaleOrdinal(d3[props.colorScheme as keyof typeof d3] as readonly string[])

  // Pie generator
  const pie = d3.pie<DataPoint>()
    .value(d => d.value)
    .sort(null)

  // Arc generator
  const arc = d3.arc<d3.PieArcDatum<DataPoint>>()
    .innerRadius(0)
    .outerRadius(radius)

  const labelArc = d3.arc<d3.PieArcDatum<DataPoint>>()
    .innerRadius(radius * 0.6)
    .outerRadius(radius * 0.6)

  // Tooltip
  const tooltip = d3.select('body').append('div')
    .attr('class', 'chart-tooltip')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('background-color', 'rgba(0, 0, 0, 0.9)')
    .style('color', 'white')
    .style('padding', '12px 16px')
    .style('border-radius', '6px')
    .style('font-size', '16px')
    .style('font-weight', '600')
    .style('pointer-events', 'none')
    .style('z-index', '1000')

  // Draw slices
  const slices = g.selectAll('.slice')
    .data(pie(props.data))
    .join('g')
    .attr('class', 'slice')

  slices.append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i.toString()))
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 0.7)

      const percentage = ((d.data.value / d3.sum(props.data, p => p.value)) * 100).toFixed(1)
      tooltip
        .style('visibility', 'visible')
        .html(`${d.data.label}<br/>Value: ${d.data.value}<br/>${percentage}%`)
    })
    .on('mousemove', function(event) {
      tooltip
        .style('top', (event.pageY - 10) + 'px')
        .style('left', (event.pageX + 10) + 'px')
    })
    .on('mouseout', function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 1)

      tooltip.style('visibility', 'hidden')
    })

  // Add labels
  slices.append('text')
    .attr('transform', d => `translate(${labelArc.centroid(d)})`)
    .attr('text-anchor', 'middle')
    .style('font-size', '18px')
    .style('font-weight', '700')
    .style('fill', 'white')
    .style('text-shadow', '1px 1px 2px rgba(0,0,0,0.5)')
    .style('pointer-events', 'none')
    .text(d => {
      const percentage = ((d.data.value / d3.sum(props.data, p => p.value)) * 100)
      return percentage > 5 ? `${percentage.toFixed(0)}%` : ''
    })

  // Title
  if (props.title) {
    svg.append('text')
      .attr('x', width.value / 2)
      .attr('y', 25)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('font-weight', '700')
      .style('fill', '#111827')
      .text(props.title)
  }

  // Legend
  const legend = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${height.value - margin.bottom + 10})`)

  const legendItems = legend.selectAll('.legend-item')
    .data(props.data)
    .join('g')
    .attr('class', 'legend-item')
    .attr('transform', (d, i) => `translate(${i * 150}, 0)`)

  legendItems.append('rect')
    .attr('width', 18)
    .attr('height', 18)
    .attr('fill', (d, i) => color(i.toString()))
    .attr('rx', 2)

  legendItems.append('text')
    .attr('x', 24)
    .attr('y', 14)
    .style('font-size', '16px')
    .style('font-weight', '600')
    .style('fill', '#1f2937')
    .text(d => d.label)
}

onMounted(() => {
  drawChart()
})

watch([() => props.data, width, height], () => {
  drawChart()
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
