import { sleep } from "@/lib/utils";
import Image from "next/image";
import ResponsiveText from "@/components/elements/ResponsiveText";

export default async function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveText>Home</ResponsiveText>
    </div>
  );
}
