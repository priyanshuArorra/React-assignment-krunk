import { memo, SVGProps } from 'react';

const CheckSquare2Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.19872 9.91346L8.95513 2.15705'
      stroke='#737373'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1.19872 2.15705L8.95513 9.91346'
      stroke='#737373'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckSquare2Icon4);
export { Memo as CheckSquare2Icon4 };
