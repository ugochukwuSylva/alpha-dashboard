import Image from "next/image";

type Props = {
  isCollapsed: boolean;
};

export default function Logo({ isCollapsed }: Props) {
  return (
    <div className=" pb-8">
      <Image
        src="/next.svg"
        width={50}
        height={50}
        className={`${isCollapsed ? "w-full " : "scale-125"}`}
        alt="logo"
      />
    </div>
  );
}
