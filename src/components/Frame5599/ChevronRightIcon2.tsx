import { memo, SVGProps } from 'react';

const ChevronRightIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.41173 18L15.4117 12L9.41173 6'
      stroke='#949494'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ChevronRightIcon2);
export { Memo as ChevronRightIcon2 };
