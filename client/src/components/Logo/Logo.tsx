import "./Logo.css";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 860 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Fention logo"
    >
      <g fill="currentColor">
        <path d="M22 92 L145 58 L168 30 H360 L311 68 H199 L184 82 H296 L270 101 H173 L152 123 L93 166 L132 111 H72 L128 93 Z" />

        <text
          x="325"
          y="122"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="108"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-3"
        >
          ention
        </text>

        <text
          x="700"
          y="122"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="42"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="-1"
          opacity="0.9"
        >
          .chat
        </text>
      </g>
    </svg>
  );
};

export default Logo;
