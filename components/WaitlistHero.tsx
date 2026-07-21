"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp, Animate, opacity } from "@/Animation";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import axios from "axios";
import Antigravity from "./ui/Antigravity";
import { useTheme } from "next-themes";
import { Card } from "./ui/card";
import { T, useGT } from "gt-next";

export default function WaitlistHero() {
    const { resolvedTheme } = useTheme();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [loadingWaitList, setLoadingwaitList] = useState(true)
    const [errorWaitList, setErrorwaitList] = useState(false)
    const [waitlistCount, setWaitlistCount] = useState(0)

    const t = useGT()

    const [name, setName] = useState("");

    const getWaitlistCount = async () => {
        try {
            const response = await axios.get("/api/waitlist");
            setWaitlistCount(response.data.count);
        } catch (error) {
            console.error("Error fetching waitlist count:", error);
            setErrorwaitList(true);
        } finally {
            setLoadingwaitList(false);
        }
    };

    useEffect(() => {
        getWaitlistCount();
    }, [submitted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (name) {
            setSubmitted(true);
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            toast.error(t("Only @gmail.com addresses are allowed"));
            return;
        }

        setLoading(true);

        try {
            await axios.post("/api/waitlist", { email });

            setSubmitted(true);
            toast.success(t("You've been added to the waitlist!"));
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.error || t("Something went wrong."));
            } else {
                toast.error(t("An error occurred. Please try again."));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative flex flex-col justify-center items-center h-screen w-full overflow-hidden px-4">
            <div className="absolute top-0 left-0 w-full h-full -z-10 ">
                <Antigravity
                    color={resolvedTheme === "dark" ? "white" : resolvedTheme == "light" ? "black" : "#f070be"}
                    autoAnimate

                />
            </div>
            <Card className="relative flex flex-col justify-center items-center gap-5 w-full max-w-2xl bg-transparent p-5">
                <div className="absolute top-0 left-0 w-full h-full bg-background/10 backdrop-blur-sm rounded-xl" />
                <T>
                    <Badge animated>Coming Soon</Badge>

                    <motion.h1
                        {...FadeUp}
                        {...Animate}
                        transition={{ duration: 0.4 }}
                        className="text-5xl lg:text-7xl text-center px-5 font-bold"
                    >
                        Join the <span className="mark">Waitlist</span>
                    </motion.h1>

                    <motion.p
                        {...FadeUp}
                        {...Animate}
                        transition={{ delay: 0.25 }}
                        className="text-center max-w-2xl px-5 text-muted-foreground text-lg"
                    >
                        Be the first to experience the future of book sharing.
                        <br />
                        Sign up for early access and updates.
                    </motion.p>
                </T>

                <motion.div
                    {...FadeUp}
                    {...Animate}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-md flex flex-col items-center gap-3"
                >
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <T>
                                <motion.div
                                    key="submitted"
                                    {...opacity}
                                    {...Animate}
                                    className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20 backdrop-blur-sm w-full max-w-md"
                                >
                                    <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
                                    <p className="text-muted-foreground">We'll notify you as soon as we launch.</p>
                                </motion.div>
                            </T>
                        ) : (
                            <motion.form
                                {...opacity}
                                {...Animate}
                                key="form"
                                onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-1 w-full">

                                <input
                                    key="honeypot"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ position: "absolute", opacity: 0, zIndex: -1, width: 0, height: 0 }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <Input
                                    key="email"
                                    type="email"
                                    placeholder={t("Enter your email")}
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                                    className="h-12 bg-background/50 backdrop-blur-sm w-full sm:w-4/6"
                                    disabled={loading}
                                />

                                <Button
                                    key="submit"
                                    type="submit"
                                    size="xl"
                                    GlareHoverClassName="w-full sm:w-2/6"
                                    className="w-full"
                                    disabled={loading}
                                >
                                    {loading ? t("Joining...") : t("Join Waitlist")}
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                    <T>
                        <p className="text-xs text-muted-foreground mt-2">
                            Join book lovers waiting for launch.
                        </p>
                    </T>
                </motion.div>
            </Card>
            <p className="absolute bottom-4 right-4 text-xs text-muted-foreground mt-2">
                {loadingWaitList ? t("Loading...") : errorWaitList ? t("Error") : `${waitlistCount} ${t("person have joined.")}`}
            </p>
        </section>
    );
}
