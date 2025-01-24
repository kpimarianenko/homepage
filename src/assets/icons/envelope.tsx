import { IconProps } from '@/types/icons';

export const EnvelopeIcon: React.FC<IconProps> = ({ color = 'white', className }) => (
  <svg className={className} fill={color} width='24' height='24' viewBox='0 0 24 24'>
    <path d='M7.28918 4.90761C10.4238 4.63513 13.5762 4.63512 16.7108 4.90761L18.2211 5.03889C19.2264 5.12629 20.0875 5.72596 20.5337 6.58374C20.5907 6.69347 20.5479 6.82633 20.4428 6.89144L14.1768 10.7704C12.833 11.6023 11.1384 11.6197 9.77772 10.8157L3.46989 7.08833C3.36798 7.02811 3.3212 6.90415 3.36713 6.79505C3.77529 5.82548 4.69292 5.1333 5.77895 5.0389L7.28918 4.90761Z' />
    <path d='M3.362 8.76688C3.20603 8.67472 3.00703 8.7739 2.98885 8.95414C2.73512 11.4698 2.79653 14.0092 3.17308 16.5133C3.3716 17.8334 4.44901 18.8455 5.77895 18.9611L7.28918 19.0924C10.4238 19.3649 13.5762 19.3649 16.7108 19.0924L18.2211 18.9611C19.551 18.8455 20.6284 17.8334 20.8269 16.5133C21.2145 13.9363 21.2682 11.3217 20.9882 8.73428C20.9685 8.55276 20.7662 8.45541 20.6109 8.55151L14.9664 12.0458C13.1482 13.1713 10.8556 13.1949 9.01462 12.1071L3.362 8.76688Z' />
  </svg>
);
