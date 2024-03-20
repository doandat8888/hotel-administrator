import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Select, SelectItem } from '@nextui-org/react';
import consts from '../../consts';

interface DataItem {
    date: string;
    total_occ: number;
    arr_rooms: number;
    dep_rooms: number;
    room_revenue: number;
    average_rate: number;
    day_use_rooms: number;
    no_show_rooms: number;
    adlandchl: number;
}

interface Props {
    data: DataItem[];
}

const ChartStatistic: React.FC<Props> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [selectedPeriod, setSelectedPeriod] = useState<string>('');
    const [selectedLine, setSelectedLine] = useState<string>('');

    const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        const today = new Date(2020, 1, 1);
        switch (selectedPeriod) {
            case 'thismonth':
                return itemDate.getMonth() === today.getMonth() && itemDate.getFullYear() === today.getFullYear();
            case 'threemonth':
                return itemDate <= new Date(today.getFullYear(), today.getMonth() + 3, 1);
            case 'sixmonth':
                return itemDate <= new Date(today.getFullYear(), today.getMonth() + 6, 1);
            default:
                return true;
        }
    });

    useEffect(() => {
        if (!filteredData.length || !svgRef.current) return;

        const svg = d3.select(svgRef.current);
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        svg.selectAll('*').remove();

        const x = d3
            .scaleTime()
            .domain(d3.extent(filteredData, d => new Date(d.date)) as [Date, Date])
            .range([margin.left, width - margin.right]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(filteredData, d => Math.max(d.total_occ, d.arr_rooms, d.dep_rooms)) as number])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const xAxis = (g: any) =>
            g
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        const yAxis = (g: any) =>
            g
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call((g: any) => g.select('.domain').remove())
                .call((g: any) =>
                    g
                        .append('text')
                        .attr('x', -margin.left)
                        .attr('y', 10)
                        .attr('fill', 'currentColor')
                        .attr('text-anchor', 'start')
                        .text('Value')
                );

        const lineTotalOcc = d3
            .line<DataItem>()
            .defined(d => !isNaN(d.total_occ))
            .x(d => x(new Date(d.date))!)
            .y(d => y(d.total_occ)!);

        const lineArrRooms = d3
            .line<DataItem>()
            .defined(d => !isNaN(d.arr_rooms))
            .x(d => x(new Date(d.date))!)
            .y(d => y(d.arr_rooms)!);

        const lineDepRooms = d3
            .line<DataItem>()
            .defined(d => !isNaN(d.dep_rooms))
            .x(d => x(new Date(d.date))!)
            .y(d => y(d.dep_rooms)!);

        svg.append('g').call(xAxis);

        svg.append('g').call(yAxis);


        let lineToDisplay: any;
        let lineColor: string;

        switch (selectedLine) {
            case 'total_occ':
                lineToDisplay = lineTotalOcc;
                lineColor = 'steelblue';
                break;
            case 'arr_rooms':
                lineToDisplay = lineArrRooms;
                lineColor = 'green';
                break;
            case 'dep_rooms':
                lineToDisplay = lineDepRooms;
                lineColor = 'red';
                break;
            default:
                lineToDisplay = '';
                lineColor = '';
                break;
        }

        if (lineToDisplay !== '') {
            svg
                .append('path')
                .datum(filteredData)
                .attr('fill', 'none')
                .attr('stroke', lineColor)
                .attr('stroke-width', 1.5)
                .attr('d', lineToDisplay)
        } else {
            svg
                .append('path')
                .datum(filteredData)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 1.5)
                .attr('d', lineTotalOcc);

            svg
                .append('path')
                .datum(filteredData)
                .attr('fill', 'none')
                .attr('stroke', 'green')
                .attr('stroke-width', 1.5)
                .attr('d', lineArrRooms);

            svg
                .append('path')
                .datum(filteredData)
                .attr('fill', 'none')
                .attr('stroke', 'red')
                .attr('stroke-width', 1.5)
                .attr('d', lineDepRooms);
        }

        // Legend
        const legend = svg
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height + margin.top + 20})`);

        if (lineColor !== '') {
            const selectedLineTxt = consts.forecastOptions.find((item) => item.name === selectedLine)?.display 
            legend
                .append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 18)
                .attr('height', 18)
                .attr('fill', lineColor);
            legend
                .append('text')
                .attr('x', 24)
                .attr('y', 9)
                .attr('dy', '0.32em')
                .text(selectedLineTxt ? selectedLineTxt : '') // Display selected line's name in legend
                .style('font-size', '14px');
        } else {
            legend
                .append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 18)
                .attr('height', 18)
                .attr('fill', 'steelblue');

            legend
                .append('text')
                .attr('x', 24)
                .attr('y', 9)
                .attr('dy', '0.32em')
                .text('Total Occ')
                .style('font-size', '14px');

            legend
                .append('rect')
                .attr('x', 120)
                .attr('y', 0)
                .attr('width', 18)
                .attr('height', 18)
                .attr('fill', 'green');

            legend
                .append('text')
                .attr('x', 144)
                .attr('y', 9)
                .attr('dy', '0.32em')
                .text('Arr Rooms')
                .style('font-size', '14px');

            legend
                .append('rect')
                .attr('x', 240)
                .attr('y', 0)
                .attr('width', 18)
                .attr('height', 18)
                .attr('fill', 'red');

            legend
                .append('text')
                .attr('x', 264)
                .attr('y', 9)
                .attr('dy', '0.32em')
                .text('Dep Rooms')
                .style('font-size', '14px');
        }
    }, [filteredData, selectedPeriod, selectedLine]);

    return (
        <div className='space-y-10'>
            <div className='grid justify-between lg:grid-cols-2 grid-cols-1 gap-10'>
                <Select
                    color='default'
                    label="Time forecast"
                    placeholder="Select time forecast"
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                >
                    {consts.timeForecasts.map((time) => (
                        <SelectItem key={time.name} value={time.name}>
                            {time.display}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    color='default'
                    label="Select Line"
                    placeholder="Select line"
                    value={selectedLine}
                    onChange={(e) => setSelectedLine(e.target.value)}
                >
                    {consts.forecastOptions.map((forecastOption) => (
                        <SelectItem key={forecastOption.name} value={forecastOption.name}>
                            {forecastOption.display}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            <svg ref={svgRef} width={800} height={500}></svg>
        </div>
    );
};

export default ChartStatistic;
