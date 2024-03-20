import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface IDataItem {
    id: number;
    property_id: number;
    total_room: number;
    room_revenue: number;
    f_and_b_revenue: number;
    other_revenue: number;
    total_revenue: number;
}

interface PieChartProps {
    data: IDataItem[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;
        const margin = { top: 100, right: 100, bottom: 100, left: 0 };
        const legendRectSize = 18;
        const legendSpacing = 4;
        const numColumns = 3;

        const totalRoomRevenue = data.reduce((acc, item) => acc + item.room_revenue, 0);
        const totalFAndBRevenue = data.reduce((acc, item) => acc + item.f_and_b_revenue, 0);
        const totalOtherRevenue = data.reduce((acc, item) => acc + item.other_revenue, 0);
        const totalRevenue = data.reduce((acc, item) => acc + item.total_revenue, 0);

        const roomRevenuePercentage = (totalRoomRevenue / totalRevenue) * 100;
        const fAndBRevenuePercentage = (totalFAndBRevenue / totalRevenue) * 100;
        const otherRevenuePercentage = (totalOtherRevenue / totalRevenue) * 100;

        const dataForPieChart = [
            { label: 'Room Revenue', value: roomRevenuePercentage },
            { label: 'F&B Revenue', value: fAndBRevenuePercentage },
            { label: 'Other Revenue', value: otherRevenuePercentage }
        ];

        const colorEquivalent: Record<string, string> = {
            'Room Revenue': '#1f77b4',
            'F&B Revenue': '#ff7f0e',
            'Other Revenue': '#2ca02c'
        };

        const colorScale = d3.scaleOrdinal<string>()
            .domain(dataForPieChart.map(d => d.label))
            .range(Object.values(colorEquivalent));

        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${width / 2 + margin.left}, ${height / 2 + margin.top})`);

        const arcGenerator = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
            .innerRadius(0)
            .outerRadius(radius);

        const pie = d3.pie<{ label: string; value: number }>().value(d => d.value);
        const data_ready = pie(dataForPieChart);

        svg.selectAll('path')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d => arcGenerator(d) || '')
            .attr('fill', d => colorScale(d.data.label));

        // Tạo chú thích (legend)
        const legend = svg.append('g')
        .attr('transform', `translate(${-width / 3 + margin.left}, 250)`);

        const legends = legend.selectAll('.legend')
            .data(dataForPieChart)
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', (_, i) => `translate(${i % numColumns * 140}, ${Math.floor(i / numColumns) * 40})`);

        legends.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .attr('fill', d => colorScale(d.label));

        legends.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .text(d => d.label)
            .style('font-size', '14px');

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default PieChart;
