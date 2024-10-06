import { ReactNode } from "react";
import { BentoBox } from "./about-floris-grid";

/**
 * Show 'hello' in all the country languages I've been to
 */
export function TravelBox() {
  return (
    <BentoBox gridArea="travel">
      <div className="size-full flex justify-center gap-2">
        <TravelLabel>Hallo</TravelLabel>
        <TravelLabel>Hello</TravelLabel>
        <TravelLabel>Hola</TravelLabel>
        <TravelLabel>Bonjour</TravelLabel>
        <TravelLabel>Ciao</TravelLabel>
        <TravelLabel>Olá</TravelLabel>
        <TravelLabel>Привет</TravelLabel>
        <TravelLabel>こんにちは</TravelLabel>
        <TravelLabel>你好</TravelLabel>
      </div>
    </BentoBox>
  );
}

function TravelLabel({ children }: { children: ReactNode }) {
  return <span className="text-center text-lg font-bold">{children}</span>;
}
