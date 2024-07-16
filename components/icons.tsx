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
    <?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!-- License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/55261/doctor -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 496.2 496.2" style="enable-background:new 0 0 496.2 496.2;" xml:space="preserve">
    <path style="fill:#48A1AF;" d="M496.2,248.1C496.2,111.1,385.1,0,248.1,0S0,111.1,0,248.1s111.1,248.1,248.1,248.1
      S496.2,385.1,496.2,248.1z"/>
    <path id="SVGCleanerId_0" style="fill:#E2A379;" d="M287,282.1h-77.8c12.1,36.6,1,53.3,1,53.3l26.9,6.1h22l26.9-6.1
      C286,335.4,274.9,318.7,287,282.1z"/>
    <g>
      <path style="fill:#E2A379;" d="M248.2,390.1c44.9,0,37.8-54.7,37.8-54.7s-8.9,17.3-38.1,17.3s-37.5-17.3-37.5-17.3
        S203.3,390.1,248.2,390.1z"/>
      <path style="fill:#E2A379;" d="M247.8,333.4c-77.2,0-139.1,22.1-146.4,49.3c-3.3,12.2-7,35.2-10.1,57.5
        c42.7,34.9,97.4,55.9,156.9,55.9s114.1-21,156.9-55.9c-3.2-22.3-6.9-45.4-10.1-57.5C387.5,355.5,324.9,333.4,247.8,333.4z"/>
    </g>
    <path style="fill:#E9F2F4;" d="M247.8,333.4c-77.2,0-139.1,22.1-146.4,49.3c-3.3,12.2-7,35.2-10.1,57.5
      c42.7,34.9,97.4,55.9,156.9,55.9s114.1-21,156.9-55.9c-3.2-22.3-6.9-45.4-10.1-57.5C387.5,355.5,324.9,333.4,247.8,333.4z"/>
    <rect x="140.3" y="433.6" style="fill:#C9DEE2;" width="63" height="10.5"/>
    <g>
      <rect x="154.8" y="412.6" style="fill:#48A1AF;" width="12.5" height="21"/>
      <path style="fill:#48A1AF;" d="M162.3,409.1c0-0.7-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2v4.2h2.5v-4.2H162.3z"/>
    </g>
    <path style="fill:#78DDF4;" d="M247.7,333.4c-1.4,0-2.9,0-4.3,0c-0.4,0-0.8,0-1.1,0c-1.1,0-2.1,0-3.2,0c-0.2,0-0.5,0-0.7,0
      c-19.7,0.3-37.9,1.8-52.9,4.1c0,0,4,37.9,4,58.6l58.5,69l58.3-68.9c0-42.6-0.1-58.9-0.1-58.9C289.5,334.8,270.3,333.4,247.7,333.4z"
      />
    <g>
      <path style="fill:#30302E;" d="M378.1,279.3c0,0-51.3,32.4-130,32.4V61.6c46.7,0,63,14.7,76.3,40.2
        C338.8,129.1,378.1,279.3,378.1,279.3z"/>
      <path style="fill:#30302E;" d="M118.8,279.3c0,0,51.3,32.4,130,32.4V61.6c-46.7,0-63,14.7-76.3,40.2
        C158.1,129.1,118.8,279.3,118.8,279.3z"/>
    </g>
    <g>
      <path id="SVGCleanerId_0_1_" style="fill:#E2A379;" d="M287,282.1h-77.8c12.1,36.6,1,53.3,1,53.3l26.9,6.1h22l26.9-6.1
        C286,335.4,274.9,318.7,287,282.1z"/>
    </g>
    <g>
      <path style="fill:#263A44;" d="M248.1,340.2l-15.7,4.7c0,0,5.4,25.6,15.7,25.6c10.3,0,15.7-25.6,15.7-25.6L248.1,340.2z"/>
      <path style="fill:#263A44;" d="M248.1,468.9c0,0,16.1-29.4,23.7-45.8l-19.7-65.7H244l-19.5,65.4
        C232.1,439.3,248.1,468.9,248.1,468.9z"/>
    </g>
    <path style="fill:#4ECFF2;" d="M306.5,336.6l-18.6-16.2l-39.8,19.8c0,0,58.1,32.8,58.4,32.6V336.6z"/>
    <polygon style="fill:#C9DEE2;" points="358,351.6 293.3,324.9 248.1,469.1 330,373.1 319,362.1 335.5,362.1 "/>
    <path style="fill:#4ECFF2;" d="M189.7,336.6l18.6-16.2l39.8,19.9c0,0-58.1,32.8-58.3,32.6v-36.3H189.7z"/>
    <polygon style="fill:#C9DEE2;" points="138.1,351.6 203.1,324.9 248.1,469.1 166.1,373.1 177.1,362.1 160.6,362.1 "/>
    <path style="fill:#F4B382;" d="M327.9,175.2c0-92.4-35.7-113.6-79.8-113.6c-44,0-79.8,21.2-79.8,113.6c0,31.3,5.6,55.8,14,74.7
      c18.4,41.6,50.3,56.1,65.8,56.1s47.3-14.5,65.8-56.1C322.3,231,327.9,206.5,327.9,175.2z"/>
    <g>
      <path style="fill:#30302E;" d="M174.8,183.1c-0.4-2.7-0.5-5.2-0.4-7.1c0.1-2.9,0.5-4.7,0.5-4.7l-9.4,3.5c0,1.4,0,2.9,0,4.3
        c0,0,1-0.3,2.8-0.9c-0.1,0-0.2,0.1-0.3,0.1c1.3,2.2,2.9,5.6,4.5,10.5C172.4,188.8,176.1,191.5,174.8,183.1z"/>
      <path style="fill:#30302E;" d="M321.9,176c0.1,2,0,4.4-0.4,7.1c-1.3,8.4,2.3,5.7,2.3,5.7c1.5-5,3.2-8.3,4.4-10.5
        c1.6,0.6,2.5,0.8,2.5,0.8c0-1.5,0-2.9,0-4.3l-9.3-3.5C321.4,171.3,321.8,173.1,321.9,176"/>
      <path style="fill:#30302E;" d="M347.3,175.2c0-92.4-44.4-113.6-99.2-113.6l0,0l0,0l0,0l0,0c-54.8,0-99.2,21.2-99.2,113.6h53.2
        l6-20.1l5,20.1H347.3z"/>
    </g>
    <g>
      <path style="fill:#F4B382;" d="M160.7,207.7c4.3,25.2,9.6,26.3,17.3,25l-8.1-54.8C162.2,179.3,156.4,182.6,160.7,207.7z"/>
      <path style="fill:#F4B382;" d="M326.5,178l-8.1,54.8c7.6,1.3,13,0.1,17.3-25C339.9,182.6,334.1,179.3,326.5,178z"/>
    </g>
    <path style="fill:#CC785E;" d="M274.8,263.8c0,0-14.2,9.6-26.7,9.6s-26.7-9.6-26.7-9.6c0-1.4,11.3-5.3,16.1-6
      c3-0.5,10.6,2.5,10.6,2.5s7.5-2.9,10.4-2.5C263.4,258.5,274.8,263.8,274.8,263.8z"/>
    <path style="fill:#C16952;" d="M274.8,263.8c0,0-14.2,13.5-26.7,13.5s-26.7-13.5-26.7-13.5s6.5,1.5,19.6,0.7c2.2-0.1,5.1,1.6,7,1.6
      c1.7,0,4.2-1.8,6.1-1.7C267.9,265.2,274.8,263.8,274.8,263.8z"/>
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
