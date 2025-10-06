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
  x: number
  y: number
  label?: string
}

const props = withDefaults(defineProps<{
  data: DataPoint[]
  title?: string
  xLabel?: string
  yLabel?: string
  color?: string
  pointSize?: number
}>(), {
  color: '#1e40af',  // Darker blue for better visibility
  pointSize: 7
})

const svgRef = ref<SVGSVGElement | null>(null)
const chartContainer = ref<HTMLDivElement | null>(null)
const { width, height } = useElementSize(chartContainer)

const drawChart = () => {
  if (!svgRef.value || width.value === 0 || height.value === 0) return

  const margin = { top: 40, right: 40, bottom: 60, left: 80 }
  const chartWidth = width.value - margin.left - margin.right
  const chartHeight = height.value - margin.top - margin.bottom

  // Clear existing content
  d3.select(svgRef.value).selectAll('*').remove()

  const svg = d3.select(svgRef.value)
    .attr('width', width.value)
    .attr('height', height.value)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // Scales
  const x = d3.scaleLinear()
    .domain(d3.extent(props.data, d => d.x) as [number, number])
    .nice()
    .range([0, chartWidth])

  const y = d3.scaleLinear()
    .domain(d3.extent(props.data, d => d.y) as [number, number])
    .nice()
    .range([chartHeight, 0])

  // X axis
  g.append('g')
    .attr('transform', `translate(0,${chartHeight})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('font-size', '18px')
    .style('font-weight', '600')
    .style('fill', '#1f2937')

  // Y axis
  g.append('g')
    .call(d3.axisLeft(y))
    .selectAll('text')
    .style('font-size', '18px')
    .style('font-weight', '600')
    .style('fill', '#1f2937')

  // Tooltip
  const tooltip = d3.select('body').append('div')
    .attr('class', 'chart-tooltip')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('background-color', 'rgba(0, 0, 0, 0.8)')
    .style('color', 'white')
    .style('padding', '8px 12px')
    .style('border-radius', '4px')
    .style('font-size', '14px')
    .style('pointer-events', 'none')
    .style('z-index', '1000')

  // Points
  g.selectAll('.point')
    .data(props.data)
    .join('circle')
    .attr('class', 'point')
    .attr('cx', d => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', props.pointSize)
    .attr('fill', props.color)
    .attr('opacity', 0.7)
    .style('cursor', 'pointer')
    .on('mouseover', function(event, d) {
      d3.select(this)
        .attr('r', props.pointSize * 1.5)
        .attr('opacity', 1)

      tooltip
        .style('visibility', 'visible')
        .html(`${d.label || ''}<br/>x: ${d.x.toFixed(2)}<br/>y: ${d.y.toFixed(2)}`)
    })
    .on('mousemove', function(event) {
      tooltip
        .style('top', (event.pageY - 10) + 'px')
        .style('left', (event.pageX + 10) + 'px')
    })
    .on('mouseout', function() {
      d3.select(this)
        .attr('r', props.pointSize)
        .attr('opacity', 0.7)

      tooltip.style('visibility', 'hidden')
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

  // Axis labels
  if (props.yLabel) {
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height.value / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .style('font-size', '18px')
      .style('font-weight', '600')
      .style('fill', '#374151')
      .text(props.yLabel)
  }

  if (props.xLabel) {
    svg.append('text')
      .attr('x', width.value / 2)
      .attr('y', height.value - 10)
      .attr('text-anchor', 'middle')
      .style('font-size', '18px')
      .style('font-weight', '600')
      .style('fill', '#374151')
      .text(props.xLabel)
  }
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
