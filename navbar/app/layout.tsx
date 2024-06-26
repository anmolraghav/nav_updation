import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-[100px] bg-white">
         <Navigation />
        </header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, tempor sed rhoncus vel, porttitor eu diam. Suspendisse nisl eros, cursus in felis eu, dapibus tincidunt neque. Nulla quis urna ac nulla dignissim faucibus vitae eu purus. Proin eget nulla a diam consequat ornare maximus quis turpis. Suspendisse feugiat maximus neque, eu scelerisque libero posuere a. In purus lectus, gravida sit amet nunc eget, pharetra eleifend lorem. Mauris congue eget metus vitae lacinia. Aliquam sollicitudin sollicitudin nibh, sed volutpat turpis auctor in. Aliquam vitae vestibulum enim, id fermentum sem. Morbi risus ipsum, suscipit eu felis quis, aliquet molestie dui. Donec vitae pharetra ipsum. Maecenas vitae urna non mi consectetur vestibulum in sit amet dolor. Vivamus vel ipsum non neque gravida pharetra nec id augue. Vestibulum suscipit turpis ut nisl porta, vitae pharetra massa euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum suscipit erat, ut dictum lorem tincidunt at.

Sed a rhoncus eros. Sed fringilla sed nibh imperdiet interdum. Aenean non sem porttitor, interdum mi et, lacinia felis. Proin lectus dolor, scelerisque quis viverra convallis, blandit vel eros. Sed viverra mauris sed magna imperdiet tristique. Vestibulum in maximus dui. Praesent ut tempus lacus, ac varius nisi. Ut eu risus posuere, accumsan eros nec, elementum neque. Quisque rhoncus, est vel faucibus mattis, felis nisi congue orci, eu elementum leo est id erat. Sed id justo ut neque consectetur consectetur. Suspendisse luctus efficitur ullamcorper. Morbi pretium eu augue eu laoreet.

Praesent gravida dolor vel lacus blandit suscipit. Sed feugiat faucibus nulla id feugiat. Sed vel tincidunt nibh, sit amet sagittis dolor. In hac habitasse platea dictumst. Nulla vitae augue sed augue ultricies eleifend. Morbi sed nisl lectus. Vivamus suscipit metus sed lorem imperdiet, et vulputate ante interdum. Donec suscipit nulla sit amet velit tincidunt, non varius ipsum faucibus. Curabitur pulvinar commodo condimentum. Morbi in libero vitae sem malesuada maximus nec scelerisque ipsum. Quisque dictum tellus quis erat semper, sit amet bibendum nisi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nulla sed quam eu orci aliquet facilisis in eu urna. Nam arcu nunc, sagittis eget sodales et, elementum at nisl. Mauris quis imperdiet metus. Aliquam ullamcorper eros sed ligula pharetra, a sollicitudin elit cursus. Integer a mauris laoreet neque pulvinar placerat. Cras rutrum blandit sagittis. Sed luctus lacinia leo, eget pharetra tortor commodo quis. Fusce porttitor risus at auctor sagittis. Aenean vel est auctor, posuere erat non, pulvinar lacus. Vestibulum porttitor auctor libero malesuada volutpat.

Aenean quis laoreet orci. Quisque leo eros, ullamcorper quis eros sit amet, placerat imperdiet ligula. Duis tincidunt dolor ac tempor pellentesque. Aenean vel cursus massa. Proin malesuada faucibus velit vitae pretium. Mauris quis nisl sem. Sed fringilla imperdiet malesuada. Aenean aliquam nisl elit, in finibus turpis rhoncus ut. Donec ullamcorper, nibh vel semper ornare, justo nisi facilisis odio, eget placerat sapien arcu nec ex. Cras blandit ante vitae pulvinar accumsan. Suspendisse in fringilla ante. Mauris nec sodales nibh, a fringilla nibh.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa tortor, tempor sed rhoncus vel, porttitor eu diam. Suspendisse nisl eros, cursus in felis eu, dapibus tincidunt neque. Nulla quis urna ac nulla dignissim faucibus vitae eu purus. Proin eget nulla a diam consequat ornare maximus quis turpis. Suspendisse feugiat maximus neque, eu scelerisque libero posuere a. In purus lectus, gravida sit amet nunc eget, pharetra eleifend lorem. Mauris congue eget metus vitae lacinia. Aliquam sollicitudin sollicitudin nibh, sed volutpat turpis auctor in. Aliquam vitae vestibulum enim, id fermentum sem. Morbi risus ipsum, suscipit eu felis quis, aliquet molestie dui. Donec vitae pharetra ipsum. Maecenas vitae urna non mi consectetur vestibulum in sit amet dolor. Vivamus vel ipsum non neque gravida pharetra nec id augue. Vestibulum suscipit turpis ut nisl porta, vitae pharetra massa euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum suscipit erat, ut dictum lorem tincidunt at.

Sed a rhoncus eros. Sed fringilla sed nibh imperdiet interdum. Aenean non sem porttitor, interdum mi et, lacinia felis. Proin lectus dolor, scelerisque quis viverra convallis, blandit vel eros. Sed viverra mauris sed magna imperdiet tristique. Vestibulum in maximus dui. Praesent ut tempus lacus, ac varius nisi. Ut eu risus posuere, accumsan eros nec, elementum neque. Quisque rhoncus, est vel faucibus mattis, felis nisi congue orci, eu elementum leo est id erat. Sed id justo ut neque consectetur consectetur. Suspendisse luctus efficitur ullamcorper. Morbi pretium eu augue eu laoreet.

Praesent gravida dolor vel lacus blandit suscipit. Sed feugiat faucibus nulla id feugiat. Sed vel tincidunt nibh, sit amet sagittis dolor. In hac habitasse platea dictumst. Nulla vitae augue sed augue ultricies eleifend. Morbi sed nisl lectus. Vivamus suscipit metus sed lorem imperdiet, et vulputate ante interdum. Donec suscipit nulla sit amet velit tincidunt, non varius ipsum faucibus. Curabitur pulvinar commodo condimentum. Morbi in libero vitae sem malesuada maximus nec scelerisque ipsum. Quisque dictum tellus quis erat semper, sit amet bibendum nisi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nulla sed quam eu orci aliquet facilisis in eu urna. Nam arcu nunc, sagittis eget sodales et, elementum at nisl. Mauris quis imperdiet metus. Aliquam ullamcorper eros sed ligula pharetra, a sollicitudin elit cursus. Integer a mauris laoreet neque pulvinar placerat. Cras rutrum blandit sagittis. Sed luctus lacinia leo, eget pharetra tortor commodo quis. Fusce porttitor risus at auctor sagittis. Aenean vel est auctor, posuere erat non, pulvinar lacus. Vestibulum porttitor auctor libero malesuada volutpat.

Aenean quis laoreet orci. Quisque leo eros, ullamcorper quis eros sit amet, placerat imperdiet ligula. Duis tincidunt dolor ac tempor pellentesque. Aenean vel cursus massa. Proin malesuada faucibus velit vitae pretium. Mauris quis nisl sem. Sed fringilla imperdiet malesuada. Aenean aliquam nisl elit, in finibus turpis rhoncus ut. Donec ullamcorper, nibh vel semper ornare, justo nisi facilisis odio, eget placerat sapien arcu nec ex. Cras blandit ante vitae pulvinar accumsan. Suspendisse in fringilla ante. Mauris nec sodales nibh, a fringilla nibh.
        </p>
        <footer className="mt-auto">
        
        </footer>
      </body>
    </html>
  );
}
