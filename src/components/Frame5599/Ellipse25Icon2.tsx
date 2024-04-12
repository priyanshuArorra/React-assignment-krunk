import { memo, SVGProps } from 'react';

const Ellipse25Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4} cy={4} r={4} fill='#3FE225' />
  </svg>
);

const Memo = memo(Ellipse25Icon2);
export { Memo as Ellipse25Icon2 };
