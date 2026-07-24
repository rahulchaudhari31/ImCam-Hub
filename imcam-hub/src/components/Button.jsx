import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external,
  withArrow,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg focus-visible:ring-navy",
    blue: "bg-blue text-white hover:bg-blue-light shadow-md hover:shadow-lg focus-visible:ring-blue",
    warm: "bg-amber text-white hover:bg-amber-light shadow-md hover:shadow-lg focus-visible:ring-amber",
    outline:
      "border border-sand-dark text-text-primary bg-transparent hover:bg-sand",
    ghost:
      "text-text-secondary bg-transparent hover:text-text-primary hover:bg-sand",
    gradient:
      "btn-gradient-primary",
    "gradient-warm":
      "btn-gradient-warm",
    "gradient-indigo":
      "btn-gradient-indigo",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
          <span className="relative z-10">{children}</span>
          {withArrow && (
            <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </a>
      );
    }
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${classes} group`} {...props}>
      {content}
    </button>
  );
}
