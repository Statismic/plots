import { Component, Prop, State, Element, Listen } from "@stencil/core";
import { ScatterPlot } from "./plots";

const _map = {
  scatter: new ScatterPlot().render
};

@Component({
  tag: "stat-plot",
  shadow: true
})
export class PlotComponent {
  @Prop() type: string;
  @Prop() marginTop: number;
  @Prop() marginRight: number;
  @Prop() marginBottom: number;
  @Prop() marginLeft: number;
  @Prop() data: any;
  @Prop() options: any;

  @State() width: number;
  @State() height: number;

  @Element() el: HTMLElement;

  get margin() {
    const safe = num => {
      num = Number(num);
      return Number.isNaN(num) || !Number.isFinite(num) ? 0 : num;
    };

    return {
      top: safe(this.marginTop) + 50,
      left: safe(this.marginLeft) + 60,
      bottom: safe(this.marginBottom) + 50,
      right: safe(this.marginRight) + 20
    };
  }

  componentDidLoad() {
    this.onResize();
  }

  @Listen("window:resize")
  onResize() {
    const { width, height } = this.el.getBoundingClientRect();
    const _margin = this.margin;
    this.width = width - _margin.left - _margin.right;
    this.height = height - _margin.top - _margin.bottom;
  }

  render() {
    const _margin = this.margin;
    return (
      <svg width="100%" height="100%">
        <g transform={`translate(${_margin.left} ${_margin.top})`}>
          {_map[this.type](JSON.parse(this.data), {
            ...JSON.parse(this.options),
            width: this.width,
            height: this.height
          })}
        </g>
      </svg>
    );
  }
}
