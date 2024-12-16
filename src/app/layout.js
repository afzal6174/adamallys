import CopyRight from "@/app/_compponents/copyright";
import "@/assets/styles/index.css";
import AddressBook from "./_compponents/address-book";
import NabBar from "./_compponents/nab-bar";
import VerticalIconMenu from "./_compponents/vertical-icon-menu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={
          "bg-background text-foreground min-h-screen font-body antialiased"
        }
      >
        <header className="sticky top-0 container mx-auto bg-white z-50">
          <NabBar />
        </header>
        <VerticalIconMenu />
        {children}
        <footer className="bg-muted container mx-auto">
          <AddressBook />
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
