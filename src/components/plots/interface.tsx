export interface Plot<Data, Options extends BaseOptions> {
  render(data: Data, options: Options): JSX.Element;
}

export interface BaseOptions {
  width: number;
  height: number;
}
