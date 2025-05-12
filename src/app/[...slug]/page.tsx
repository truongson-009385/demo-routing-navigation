import { notFound } from 'next/navigation';
import ComponentA from '@/components/pages/demo1';
import ComponentB from '@/components/pages/demo2';

const componentMap: { [key: string]: React.FC } = {
  demo1: ComponentA,
  demo2: ComponentB,
};

async function getRouteConfig(slug: string[]) {
  const path = '/' + slug.join('/');
  const res = await fetch('http://localhost:3000/api/components', {
    method: 'GET',
  });
  const routes = await res.json();
  
  return routes.find((r: { url: string, component: string }) => r.url === path);
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const route = await getRouteConfig(slug);

  if (!route) return notFound();

  console.log('component', route.component);

  const Component = componentMap[route.component];

  if (!Component) return notFound();

  return <Component />;
}
