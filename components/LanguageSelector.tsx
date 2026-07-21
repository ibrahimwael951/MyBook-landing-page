import { useLocaleSelector } from "gt-next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
export default function LocaleSelector({
  locales: _locales,
  className,
  ...props
}: {
  locales?: string[];
  className?: string;
  [key: string]: any;
}): React.JSX.Element | null {
  const { locale, locales, setLocale, getLocaleProperties } = useLocaleSelector(
    _locales ? _locales : undefined,
  );

  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    setDir(document.documentElement.dir as "ltr" | "rtl");
  }, []);

  const getDisplayName = (locale: string) => {
    return capitalizeLanguageName(
      getLocaleProperties(locale).nativeNameWithRegionCode,
    );
  };

  if (!locales || locales.length === 0 || !setLocale) {
    return null;
  }

  return (
    <Select
      dir={dir}
      value={locale || ""}
      onValueChange={(value) => setLocale(value)}
      {...props}
    >
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder="Select locale…" />
      </SelectTrigger>
      <SelectContent className="z-100">
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {getDisplayName(loc)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function capitalizeLanguageName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
