import { CAL_URL } from "@/lib/site";
import { Button } from "./Button";

/** Tous les boutons « Réserver un appel » passent par ici (lien Cal.com). */
export function CalButton({
  size,
  variant = "primary",
  className,
  label = "Réserver un appel",
}: {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
}) {
  return (
    <Button href={CAL_URL} external size={size} variant={variant} className={className}>
      {label}
    </Button>
  );
}
