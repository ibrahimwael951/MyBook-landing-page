"use client";
import Community from "@/components/Home page/Community";
import { Community_Images } from "@/components/Home page/Community_Images";
import Community_Safe from "@/components/Home page/Community_Safe";
import Features from "@/components/Home page/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Home page/Hero";
import Community_Features from "@/components/Home page/Community_Features";
import Book_Shelf from "@/components/Home page/Book_Shelf";

export default function Home() {
  return (
    <main>
      <Hero />
      <Community_Images />
      <Features />
      <Book_Shelf />
      <Community />
      <Community_Features />
      <Community_Safe />
      <Footer />
    </main>
  );
}
