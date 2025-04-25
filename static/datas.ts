export interface Product {
    id: number;
    name: string;
    description: string; // includes HTML
}
  
const products: Product[] = [
    {
      id: 1,
      name: 'Product A',
      description: 'This is a <b>bold</b> description.',
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Includes <i>italic</i> and <a href="#">a link</a>.',
    },
];
  
export default products;
  