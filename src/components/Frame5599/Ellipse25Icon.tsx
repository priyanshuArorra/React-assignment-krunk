import { memo, SVGProps } from 'react';

const Ellipse25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4.5} cy={4} r={4} fill='#3FE225' />
  </svg>
);

const Memo = memo(Ellipse25Icon);
export { Memo as Ellipse25Icon };
