/**
 * ShopHub Logo
 * Shopping bag icon with integrated brand text
 */

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 'h-6 w-6', text: 'text-lg', gap: 'gap-1.5' },
    md: { icon: 'h-7 w-7', text: 'text-xl sm:text-2xl', gap: 'gap-2' },
    lg: { icon: 'h-9 w-9', text: 'text-2xl sm:text-3xl', gap: 'gap-2.5' },
  };

  const s = sizes[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      <svg
        className={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Bag body */}
        <path
          d="M6 10h20l-2 18H8L6 10z"
          fill="currentColor"
          className="text-brand"
        />
        {/* Bag handle */}
        <path
          d="M11 10V8a5 5 0 0 1 10 0v2"
          stroke="currentColor"
          className="text-brand-dark"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Letter S on bag */}
        <path
          d="M18.5 15.2c0-1.3-1.1-2-2.5-2s-2.5.7-2.5 2c0 2.6 5 1.3 5 3.8 0 1.3-1.1 2.2-2.5 2.2s-2.5-.9-2.5-2.2"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <span className={`font-serif ${s.text} font-bold text-foreground tracking-wide`}>
          Shop<span className="text-brand">Hub</span>
        </span>
      )}
    </span>
  );
}
