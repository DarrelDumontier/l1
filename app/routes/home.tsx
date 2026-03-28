import type { Route } from "./+types/home";

import QR from '../qr/qr'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <QR />
    </div>
    
  );
}
