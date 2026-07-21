"use client";

import { Check, Rose, Moon, Sun, SettingsIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { T } from "gt-next";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          {theme == "light" && (
            <div className="flex justify-center items-center gap-2">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all " />
              <T>Light</T>
            </div>
          )}
          {theme == "dark" && (
            <div className="flex justify-center items-center gap-2">
              <Moon className="h-[1.2rem] w-[1.2rem] transition-all " />
              <T>Dark</T>
            </div>
          )}
          {theme == "system" && (
            <div className="flex justify-center items-center gap-2">
              <SettingsIcon className="h-[1.2rem] w-[1.2rem] transition-all " />
              <T>System</T>
            </div>
          )}
          {theme == "just-girl" && (
            <div className="flex justify-center items-center gap-2">
              <Rose className="  h-[1.2rem] w-[1.2rem] transition-all " />
              <T>Just Girl</T>
            </div>
          )}

          <span className="sr-only">
            <T>Toggle theme</T>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>
          <T>Theme Options</T>
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="flex justify-between items-center gap-2"
          onClick={() => setTheme("light")}
        >
          <div className="flex items-center gap-2">
            <Sun />
            <T>Light</T>
          </div>
          {theme == "light" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between items-center gap-2"
          onClick={() => setTheme("dark")}
        >
          <div className="flex items-center gap-2">
            <Moon />
            <T>Dark</T>
          </div>
          {theme == "dark" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between items-center gap-2"
          onClick={() => setTheme("system")}
        >
          <div className="flex items-center gap-2">
            <SettingsIcon />
            <T>System</T>
          </div>
          {theme == "system" && <Check />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <T>Custom Themes</T>
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="flex justify-between items-center gap-2"
          onClick={() => setTheme("just-girl")}
        >
          <div className="flex items-center gap-2">
            <Rose />
            <T>just girl</T>
          </div>
          {theme == "just-girl" && <Check />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
