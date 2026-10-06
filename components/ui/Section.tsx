import clsx from "clsx";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  muted,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section id={id} className={clsx("relative py-24 sm:py-32", muted && "bg-muted/60", className)}>
      <Container>{children}</Container>
    </section>
  );
}
