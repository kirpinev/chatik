export interface BlockInterface {
  data: Record<string, string | number>;
  _createResources(): void;
  init(): void;
  _componentDidMount(): void;
  _componentDidUpdate(oldProps: string, newProps: string): void;
  _checkProps(oldProps: string, newProps: string): boolean;
  setProps(nextProps: object): void;
  _render(): void;
  getContent(): HTMLElement;
  _makePropsProxy(props: object): ProxyHandler<object>;
  _createDocumentElement(tagName: string): HTMLElement;
  show(): void;
  hide(): void;
}
