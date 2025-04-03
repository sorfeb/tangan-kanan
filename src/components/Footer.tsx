export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-background border-t border-border shadow-sm">
      {/* Left-most: Tangan Kanan with description */}
      <div className="text-center md:text-left">
        <div className="text-xl font-bold text-primary">Tangan Kanan</div>
        <p className="text-sm text-muted-foreground">
          Your AI-powered business assistant
        </p>
      </div>

      {/* Right-most: Developed by */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <span className="text-sm text-muted-foreground">Developed by</span>
        <a
          href="https://github.com/sorfeb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          Soros
        </a>
      </div>
    </footer>
  );
}