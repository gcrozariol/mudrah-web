export default function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-[-5vw] top-[-5vh] h-[110dvh] w-[110vw] bg-cover bg-center bg-no-repeat opacity-30 blur-[50px] -z-10"
        style={{ backgroundImage: "url('/cover.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 h-full w-full bg-repeat mix-blend-overlay opacity-[0.12] -z-10"
        style={{
          backgroundImage: "url('/overlay.svg')",
          backgroundSize: "200px 200px",
        }}
      />
    </>
  );
}
