import "../styles/globals.css";

export const metadata = {
  title: "NHL Arenas I've Been To",
  description: "My way of keeping track of which NHL arenas I've been to",
};

export const viewport = {
  themeColor: "#101727",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body>
        {children}

        <div className="container p-4 mx-auto">
          <div className="mt-4">
            &copy; 2019-{new Date().getFullYear()}{" "}
            <a className="underline" href="https://michaelbonner.dev">
              Michael Bonner
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
