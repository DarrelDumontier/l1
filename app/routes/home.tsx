import type { Route } from "./+types/home";

import QR from '../qr/qr'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QR Code — Frontend Mentor Challenge" },
    { name: "description", content: "A QR code card that links to Frontend Mentor for practicing front-end projects." },
  ];
}

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">      
      <QR />
    </main>
    
  );
}
