import CmsNavbar from "../components/CmsNavbar";
import { Provider } from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "Ayden Jahola | Personal Blogs",
  description:
    "I am a full time student at DCU, I am a self-taught developer with a passion for learning and creating. this website is my personal blogs and will be the home of my future projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
