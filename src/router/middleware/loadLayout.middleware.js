export async function loadLayoutMiddleware(route) {
    const layout = route.meta.layout || 'DefaultLayout';

    const component = await import(`../../layouts/${layout}.vue`);
    route.meta.layoutComponent = component.default;
}
