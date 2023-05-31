import clsx from 'clsx';

export default function Check({
  className,
  classNameMark,
  classNameType,
  width = '20',
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
  width?: string;
}) {
  return (
    <svg
      width={width}
      className={className}
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0275 9.15757H5.36375C5.44549 9.15757 5.52338 9.19232 5.57797 9.25316L8.01076 11.964C10.8411 6.9408 15.0448 4.41135 17.2538 3.36393C17.5438 3.22638 17.7607 3.58336 17.5253 3.80159C15.2991 5.86468 10.6672 10.8058 9.48724 17.1263C9.41984 17.4874 8.96264 17.6299 8.71469 17.3589L1.76205 9.76024C1.55082 9.52939 1.71459 9.15757 2.0275 9.15757Z"
        fill="#ECCE00"
      />
    </svg>
  );
}
