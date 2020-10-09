export class Route {
  private readonly pathname: string;

  private readonly blockClass: {
    hide(): void;
    show(): void;
    setInfo(): void;
  };

  private block: null | {
    hide(): void;
    show(): void;
    setInfo(): void;
  };

  private props: {
    rootQuery: string;
  };

  constructor(
    pathname: string,
    view: {
      hide(): void;
      show(): void;
      setInfo(): void;
    },
    props: { rootQuery: string },
  ) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  leave(): void {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string): boolean {
    return pathname === this.pathname;
  }

  render(): void {
    if (!this.block) {
      this.block = this.blockClass;

      this.renderInDOM(this.props.rootQuery, this.block);

      this.setListenersToElement(this.block);

      return;
    }

    this.block.show();

    if (this.block.setInfo) {
      this.block.setInfo();
    }
  }

  renderInDOM(query, block): HTMLElement {
    const root = document.querySelector(query);

    root.appendChild(block.getContent());

    return root;
  }

  setListenersToElement(block): void {
    block.setListeners();
  }
}
