interface CursorArrowProps {
  className?: string;
}

export default function CursorArrow({ className = "" }: CursorArrowProps) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g filter="url(#filter0_d_842_3445)">
        <path d="M8.75418 20.0002L5.62291 4.04113L20 11.9184L12.9181 13.973L8.75418 20.0002Z" fill="black"/>
        <path d="M8.75418 20.0002L5.62291 4.04113L20 11.9184L12.9181 13.973L8.75418 20.0002Z" stroke="white"/>
      </g>
      <defs>
        <filter 
          id="filter0_d_842_3445" 
          x="2.9248" 
          y="2.09082" 
          width="20.3721" 
          height="22.1738" 
          filterUnits="userSpaceOnUse" 
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix 
            in="SourceAlpha" 
            type="matrix" 
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
            result="hardAlpha"
          />
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_842_3445"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_842_3445" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
} 