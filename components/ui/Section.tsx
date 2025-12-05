import clsx from "clsx";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={clsx("container-page py-12 sm:py-16 md:py-20", className)}>
      {children}
    </section>
  );
}
