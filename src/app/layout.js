export const metadata = {
  title: "ProHome",
  description: "Encuentra tu hogar ideal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
