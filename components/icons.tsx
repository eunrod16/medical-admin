export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8zm12.828-4.243a1 1 0 0 1 1.415 0 6 6 0 0 1 0 8.486 1 1 0 1 1-1.415-1.415 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.415zm.702 13a1 1 0 0 1 1.212-.727c1.328.332 2.169 1.18 2.652 2.148.468.935.606 1.98.606 2.822a1 1 0 1 1-2 0c0-.657-.112-1.363-.394-1.928-.267-.533-.677-.934-1.349-1.102a1 1 0 0 1-.727-1.212zM6.5 18C5.24 18 4 19.213 4 21a1 1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3h-7z" fill="#0D0D0D"/>
    </svg>

  );
}

export function WaitingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      stroke="currentColor"
    >
      <path d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"/>
    </svg>
  );
}

export function RegisterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4" />
    <path d="M14 2v6h6" />
    <path d="M2 15h10" />
    <path d="M9 18l3-3-3-3" />
  </svg>
  );
}


export function DoctorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      stroke="currentColor"
    >
<path d="M16,1H8A5.006,5.006,0,0,0,3,6v8a9,9,0,0,0,18,0V6A5.006,5.006,0,0,0,16,1ZM5,6A3,3,0,0,1,8,3h8a3,3,0,0,1,3,3v5H5Zm14,8A7,7,0,0,1,5,14V13H19ZM13,6h2V8H13v2H11V8H9V6h2V4h2Z"/>
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}
interface LogoProps {
  className?: string;
}
export function Logo: React.FC<LogoProps> = ({ className }) => {
  return (

<svg fill="#F08080" width="45px" height="45px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" className={className}>
  <path d="M72,132H32a4,4,0,0,1,0-8H69.85938l14.8125-22.21875a3.99979,3.99979,0,0,1,6.65624,0L120,144.78906l12.67188-19.00781A3.99971,3.99971,0,0,1,136,124h24a4,4,0,0,1,0,8H138.14062l-14.8125,22.21875a3.99979,3.99979,0,0,1-6.65624,0L88,111.21094,75.32812,130.21875A3.99971,3.99971,0,0,1,72,132ZM176,36a55.86592,55.86592,0,0,0-48,27.12158A56.01307,56.01307,0,0,0,24,92c0,1.397.04053,2.81738.12061,4.22119a4.00014,4.00014,0,0,0,7.9873-.45557C32.03613,94.5127,32,93.24561,32,92a48.00863,48.00863,0,0,1,92.30908-18.49268A3.99982,3.99982,0,0,0,128,75.96484h0a3.99914,3.99914,0,0,0,3.69043-2.45752A48.00892,48.00892,0,0,1,224,92c0,59.70508-82.18555,111.148-96.00195,119.36963-8.31934-4.938-41.40723-25.49121-66.3291-54.001a3.99993,3.99993,0,0,0-6.023,5.26514c29.51318,33.76172,68.74414,55.9292,70.39941,56.85644a4.00209,4.00209,0,0,0,3.90918,0,312.8706,312.8706,0,0,0,50.72119-37.01709C214.73193,151.82275,232,121.38281,232,92A56.06353,56.06353,0,0,0,176,36Z"/>
</svg>
    
  );
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel logomark"
      height="64"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
