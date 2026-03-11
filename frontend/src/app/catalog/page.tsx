import { Catalog } from '@/blocks/Catalog/Catalog';

const data = [
  {
    slug: 'stainless-steel-rolled-products',
    name: 'Нержавеющий металлопрокат',
    description:
      'Легированная сталь, которую открыли в начале прошлого века. Нержавейка сразу нашла спрос благодаря своим свойствам. Делится на три группы: короззионностойкие, жаростойкие и жаропрочные.',
  },
];
export default function CatalogPage() {
  return (
    <div>
      <Catalog />
    </div>
  );
}
