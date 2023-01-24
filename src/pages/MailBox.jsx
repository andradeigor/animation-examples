import { ArchiveIcon } from "../components/ArchiveIcon/ArchiveIcon";
import { MailIcon } from "../components/MainIcon/MainIcon";

const MailBox = () => {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-zinc-300">
      <div className="flex h-[470px] w-[550px] flex-col rounded-3xl bg-gray-50 shadow-md">
        <div className="flex h-1/6 w-full items-center  justify-between border-b-[1px] border-zinc-900/10 px-5">
          <button>
            <MailIcon className="h-6 w-6  font-bold text-zinc-500" />
          </button>
          <button>
            <ArchiveIcon className="h-6 w-6  font-bold text-zinc-500" />
          </button>
        </div>
        <div className="w-full ">
          <ul className="list-none">
            <li className="flex h-20 w-full cursor-pointer flex-col justify-center gap-y-1 px-5 hover:bg-gray-200">
              <h1 className="text-md font-medium text-zinc-500 ">
                Your funds have been processe
              </h1>
              <p className="text-sm font-normal text-zinc-400 ">
                See your latest deposit online
              </p>
            </li>
            <li className="flex h-20 w-full cursor-pointer flex-col justify-center gap-y-1 px-5 hover:bg-gray-200">
              <h1 className="text-md font-medium text-zinc-500 ">
                UFRJ has lost your grades!
              </h1>
              <p className="text-sm font-normal text-zinc-400 ">
                but it's okay, you will recive a 5!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MailBox;
