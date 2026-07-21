"use client";

import Link from "next/link";
import { AnimatedImage } from "../ui/AnimatedImage";
import { motion } from "framer-motion";
import { opacityWithBlur } from "@/Animation";
import { T, useGT } from "gt-next";

const Book_Shelf = () => {
  const t = useGT();
  const books = [
    {
      title: t("Atomic Habits"),
      src: "/Book/atomic_Habbits.jpg",
      description: "",
    },
    {
      title: t("The art of indifference"),
      src: "/Book/Mark_Manson_book.jpg",
      description: "",
    },
    {
      title: t("The obstacle is the way "),
      src: "/Book/The_Obstacle_Is_the_Way.jpg",
      description: "",
    },
  ];
  return (
    <section className="relative h-170  flex justify-center items-end my-20">
      <T>
         <h1 className="text-5xl md:text-9xl absolute top-20 left-2/4 -translate-x-2/4 text-center lg:w-4xl opacity-20 select-none -z-10">
          Over 2 thousand Books
        </h1>
      </T>
      <section className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-7xl w-full px-5 2xl:px-10">
        {books.map((item, i) => (
          <div
            key={item.title}
            className="relative h-full w-full mt-auto flex justify-center items-center"
          >
            <motion.div
              {...opacityWithBlur}
              viewport={{ margin: "-150px" }}
              className={`relative w-fit h-fit ${
                i == 1 && "md:-translate-y-10 2xl:-translate-y-20"
              }
              ${i == 2 && "hidden lg:inline"}
              `}
            >
              <AnimatedImage
                src={item.src}
                alt={item.title}
                className="w-52 select-none"
              />
              <div className="w-full absolute bottom-0 -left-20 bg-background/20 rounded-2xl z-10">
                <h1 className="max-w-50">{item.title}</h1>
                <T>
                  <Link href={"/books"} className="hover:ml-4 duration-200">
                    --See More
                  </Link>
                </T>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Book_Shelf;
