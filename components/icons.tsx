export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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

export function Logo() {
  return (

<svg fill="#F08080" width="24px" height="24px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
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
