import { ArchiveIcon } from "../components/ArchiveIcon/ArchiveIcon";
import { MailIcon } from "../components/MainIcon/MainIcon";
import { loremIpsum } from "lorem-ipsum";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MailBox = () => {
  const [mails, setMails] = useState([]);

  const CreateNewMail = () => {
    return {
      title: loremIpsum({
        count: 1,
        format: "plain",
        sentenceLowerBound: 5,
        sentenceUpperBound: 6,
      }),
      paragraph: loremIpsum({
        count: 1,
        format: "plain",
        sentenceLowerBound: 5,
        sentenceUpperBound: 6,
      }),
      select: false,
    };
  };

  useEffect(() => {
    const Newmails = [];
    for (let index = 0; index < 4; index++) {
      Newmails.push(CreateNewMail());
    }
    setMails(Newmails);
  }, []);

  const HandleClickMails = (index) => {
    const newMails = mails;
    newMails[index]["select"] = !newMails[index].select;
    setMails([...newMails]);
  };
  const handleClickNewMails = () => {
    const newMail = CreateNewMail();
    setMails([...mails, newMail]);
  };
  const HandleClickDeleteMails = () => {
    const newMails = mails.filter((item) => !item.select);
    setMails([...newMails]);
  };
  const variants = {};
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-zinc-300">
      <div className="flex h-[470px] w-[550px] flex-col rounded-3xl bg-gray-50 shadow-md">
        <div className="flex h-1/6 w-full items-center  justify-between border-b-[1px] border-zinc-900/10 px-5">
          <button onClick={handleClickNewMails}>
            <MailIcon className="h-6 w-6  font-bold text-zinc-500" />
          </button>
          <button onClick={HandleClickDeleteMails}>
            <ArchiveIcon className="h-6 w-6  font-bold text-zinc-500" />
          </button>
        </div>
        <div className=" w-full overflow-hidden">
          <AnimatePresence>
            <ul className="list-none">
              {mails.map((item, index) => {
                return (
                  <motion.li
                    onClick={() => HandleClickMails(index)}
                    key={index}
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    custom={index}
                    className={`flex h-20 w-full cursor-pointer flex-col justify-center gap-y-1 px-5  ${
                      item.select ? "bg-blue-400" : "hover:bg-gray-200"
                    }`}
                  >
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-md font-medium  ${
                        item.select ? "text-gray-50" : "text-zinc-500 "
                      }`}
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-sm font-normal ${
                        item.select ? "text-gray-100" : "text-zinc-400"
                      } `}
                    >
                      {item.paragraph}
                    </motion.p>
                  </motion.li>
                );
              })}
            </ul>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default MailBox;
