import { memo, SVGProps } from 'react';

const SlidersHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M18 3.33333H12.1667' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.83333 3.33333H3' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18 10H10.5' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.16667 10H3' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18 16.6667H13.8333' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.6667H3' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.1667 1.66667V5' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.16667 8.33333V11.6667' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.8333 15V18.3333' stroke='#666666' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(SlidersHorizontalIcon);
export { Memo as SlidersHorizontalIcon };
