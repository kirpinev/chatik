export class Templator {
  private TEMPLATE_REGEXP: RegExp;

  readonly template: string;

  constructor(template: string) {
    this.template = template;
    this.TEMPLATE_REGEXP = /{{(.*?)}}/gi;
  }

  compile(context: object): string {
    const res = this.template;

    return this.compileTemplate(res, context);
  }

  get(obj = {}, path: string, defaultValue: string): string {
    const result = obj;

    if (result && result[path]) {
      return result[path];
    }
    return defaultValue;
  }

  compileTemplate(template: string, ctx: object): string {
    let tmpl = template;

    let key = null;

    if (ctx) {
      while ((key = this.TEMPLATE_REGEXP.exec(tmpl))) {
        if (key[1]) {
          const data = this.get(ctx, key[1], key[0]);

          tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
        }
      }
    }

    return tmpl;
  }
}
