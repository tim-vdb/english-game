import Image from "next/image";

interface ComponentCardProps {
  name: string;
  src: string;
  width?: number;
  height?: number;
}

export default function ComponentCard({ name }: ComponentCardProps) {
  return (
    <div className="inline-block relative rounded-lg overflow-visible shadow-lg p-2 cursor-pointer">
      <Image
        src="/images/wireframe/body.jpg"
        alt="Wireframe Header"
        width={200}
        height={100}
        className="rounded-lg transition-transform duration-300 ease-out transform hover:scale-105"
      />
      <span className="absolute top-1 left-1 bg-[#ec672a] text-white text-xs px-1 py-0.5 rounded">
        {name}
      </span>
    </div>
  );
}
