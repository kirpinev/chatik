import { Route } from './Route';

export class Router {
  private static __instance: Router;

  private routes: Route[];

  private history: History;

  private currentRoute: {
    leave: () => void;
  };

  private readonly rootQuery: string;

  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block): this {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = event => {
      this.onRoute(event.currentTarget.location.pathname);
    };

    this.onRoute(window.location.pathname);
  }

  onRoute(pathname: string): void {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);

    this.onRoute(pathname);
  }

  back(): void {
    this.history.go(-1);
  }

  forward(): void {
    this.history.go(1);
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}
