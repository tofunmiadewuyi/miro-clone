import Image from "next/image";

export const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={60}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
