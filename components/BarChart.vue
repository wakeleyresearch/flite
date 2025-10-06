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
  xLabel?: string
  yLabel?: string
  color?: string
}>(), {
  color: '#1e40af'  // Darker blue for better visibility
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
  const x = d3.scaleBand()
    .domain(props.data.map(d => d.label))
    .range([0, chartWidth])
    .padding(0.2)

  const y = d3.scaleLinear()
    .domain([0, d3.max(props.data, d => d.value) || 0])
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

  // Bars
  g.selectAll('.bar')
    .data(props.data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.label) || 0)
    .attr('y', d => y(d.value))
    .attr('width', x.bandwidth())
    .attr('height', d => chartHeight - y(d.value))
    .attr('fill', props.color)
    .attr('rx', 4)
    .style('cursor', 'pointer')
    .on('mouseover', function() {
      d3.select(this).attr('opacity', 0.7)
    })
    .on('mouseout', function() {
      d3.select(this).attr('opacity', 1)
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
