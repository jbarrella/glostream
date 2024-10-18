import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white mt-6 container mx-auto">
      <div className="flex items-center gap-4">
        <Image
          src="/logo-cropped.png"
          alt="GloStream Tech"
          width={50}
          height={50}
        />
        <span className="text-2xl font-bold">GloStream Tech</span>
      </div>
    </div>
  );
}
