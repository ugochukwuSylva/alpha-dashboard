import Image from "next/image";
import Button from "./Button";

type Props = {
  setClickEvents: () => void;
};

export default function EventModal({ setClickEvents }: Props) {
  return (
    <div className="h-[100vh] absolute right-0 left-0 w-full bg-black/60 backdrop-blur-sm z-20 flex justify-center items-center">
      <div className=" bg-white h-96 w-[60%] flex flex-col justify-between shadow-md rounded-sm relative">
        <div
          onClick={setClickEvents}
          className="flex items-center justify-center rounded-full text-stone-700 text-3xl cursor-pointer border-stone-300 w-1 h-1 p-5 border-2 absolute top-5 right-5"
        >
          &times;
        </div>

        <div className="w-full  p-5">
          <div className="flex flex-col gap-8">
            <div className="">
              <p className="text-2xl">Event Name</p>
              <span className="text-stone-500">Event Date</span>
            </div>

            <p className="text-stone-700">Event Description</p>
          </div>
        </div>

        <div className="px-5 flex flex-col gap-3">
          <Image
            src="/avatarGroup.png"
            width={100}
            height={100}
            alt="avatar images"
          />
          <p>3 Guest speakers: Ugochukwu, Sylvanus, Nwaba</p>
          <p>300 Attendees</p>
        </div>
        {/*  */}
        <div className="w-full  p-5 bg-stone-200 flex justify-between items-center">
          <div className="mr-auto">
            <Button bgColor="bg-white">Edit</Button>
          </div>

          <Button bgColor="bg-red-500">Delete</Button>
          <Button bgColor="bg-violet-500">Mark as completed</Button>
        </div>
      </div>
    </div>
  );
}
