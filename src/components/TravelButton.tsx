import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const travelButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-hero text-travel-dark-olive shadow-travel hover:shadow-xl hover:scale-105 font-semibold",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        cream: "bg-travel-cream text-travel-dark-olive hover:bg-primary hover:text-primary-foreground border border-primary/20 font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface TravelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof travelButtonVariants> {}

const TravelButton = ({ className, variant, size, ...props }: TravelButtonProps) => {
  return (
    <button
      className={cn(travelButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default TravelButton;