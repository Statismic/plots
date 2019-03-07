import { scaleLinear } from "d3";
import { Plot, BaseOptions } from "./interface";

interface Element {
  x: number;
  y: number;
}
type ScatterPlotData = Element[];

const defaultOptions = {
  sizePoint: 5
};

interface ScatterPlotOptions extends BaseOptions {
  sizePoint: number;
}

export class ScatterPlot implements Plot<ScatterPlotData, ScatterPlotOptions> {
  render(data: ScatterPlotData, options: ScatterPlotOptions) {
    options = { ...defaultOptions, ...options };

    const scale = {
      x: scaleLinear()
        .domain([0, Math.max(...data.map(el => el.x))])
        .rangeRound([0, options.width]),
      y: scaleLinear()
        .domain([0, Math.max(...data.map(el => el.y))])
        .rangeRound([options.height, 0])
    };

    const renderPoint = (el: Element) => {
      return (
        <circle
          cx={scale.x(el.x)}
          cy={scale.y(el.y)}
          r={options.sizePoint}
          style="cursor: pointer"
        />
      );
    };

    return <g>{data.map(renderPoint)}</g>;
  }
}
