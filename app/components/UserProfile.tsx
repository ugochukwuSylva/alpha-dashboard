import { CgProfile } from "react-icons/cg";

type Props = {
  isCollapsed: boolean;
};

export default function UserProfile({ isCollapsed }: Props) {
  return (
    <div className="flex items-center gap-1 h-full">
      <CgProfile
        className="text-4xl text-stone-300 cursor-pointer"
        strokeWidth="0.0000000009px"
      />

      <div className="flex flex-col justify-center gap-0">
        {isCollapsed && (
          <>
            <p className="text-sm">Rudra Devi</p>
            <span className="text-sm">rudra.devi@gmail.com</span>
          </>
        )}
      </div>
    </div>
  );
}
