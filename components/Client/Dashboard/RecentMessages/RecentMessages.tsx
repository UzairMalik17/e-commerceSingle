import React from "react";
import MessagesRow from "./MessagesRow";
const messages = [
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
  {
    img: "/Assets/Dashboard/User.jpg",
    name: "Jhone Mckay",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Serecusandae quis quo. Itaque minus corrupti inventore hic cupidit atenobis quo fuga adipisci enim. Velit ipsa vero impedit dolorem delectus? Exercitationem!",
    time: "12:33",
    date: "28.05.2021",
  },
];
const RecentMessages = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-start justify-start gap-3 bg-background border-[1px] drop-shadow-lg border-lightGray rounded-lg p-4">
      <p className="w-full font-semibold text-sm">Messages</p>
      <div className="w-full flex flex-col gap-3 items-start justify-start overflow-y-scroll ThinScrollbar">
        {messages.map((item, index) => {
          return (
            <MessagesRow
              key={index}
              img={item.img}
              name={item.name}
              msg={item.msg}
              date={item.date}
              time={item.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentMessages;
