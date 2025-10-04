import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import "./styles/brutalist.css";

export const buttonVariants = cva("", {
    variants: {
        font: {
            normal: "",
            brutalist: "brutalist",
        },
        variant: {
            default: "bg-secondary text-secondary-foreground brutalist-border brutalist-shadow",
            destructive: "bg-destructive text-destructive-foreground brutalist-border brutalist-shadow",
            outline: "bg-background text-foreground brutalist-border brutalist-shadow hover:bg-foreground hover:text-background",
            ghost: "brutalist-border border-transparent hover:bg-accent hover:text-accent-foreground hover:border-current",
            link: "text-primary underline-offset-4 hover:underline font-bold",
        },
        size: {
            default: "h-12 px-6 py-3",
            sm: "h-10 px-4 py-2 text-sm",
            lg: "h-14 px-8 py-4 text-lg",
            icon: "size-12",
        },
        intensity: {
            normal: "",
            heavy: "brutalist-border-thick shadow-[6px_6px_0px_0px_currentColor] hover:shadow-[3px_3px_0px_0px_currentColor] active:shadow-[0px_0px_0px_0px_currentColor]",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        font: "brutalist",
        intensity: "normal",
    },
});

export interface BrutalistButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

function Button({
    children,
    className,
    variant,
    size,
    font,
    intensity,
    asChild,
    ...props
}: BrutalistButtonProps) {
    return (
        <ShadcnButton
            {...props}
            className={cn(
                "rounded-none font-bold transition-all duration-100 ease-out",
                buttonVariants({ variant, size, font, intensity }),
                intensity === "heavy" && "hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]",
                className
            )}
            size={size}
            variant="ghost"
            asChild={asChild}
        >
            {children}
        </ShadcnButton>
    );
}

export { Button };