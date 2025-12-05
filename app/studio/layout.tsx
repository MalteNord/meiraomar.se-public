export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        backgroundColor: "#1a1d24",
      }}
    >
      {children}
    </div>
  );
}
