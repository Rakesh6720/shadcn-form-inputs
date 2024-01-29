"use client";

import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import {
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React, { useState } from "react";
import {
  Check,
  ChevronsUpDown,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const colors = [
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
];

function ShadCnDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-[200px] justify-between"
          >
            {value
              ? colors.find(
                  (color) =>
                    color.value === value
                )?.label
              : "Select Color..."}
            <ChevronsUpDown className="opacity-50 h-4 w-4 shrink-0 ml-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search Colors..." />
            <CommandEmpty>
              No Color Found.
            </CommandEmpty>
            <CommandGroup>
              {colors.map((color) => (
                <CommandItem
                  key={color.value}
                  value={color.value}
                  onSelect={(
                    currentValue
                  ) => {
                    setValue(
                      currentValue === value
                        ? ""
                        : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === color.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {color.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <section className="flex gap-x-2 mt-4 items-center">
        <h3>Chosen Color:</h3>
        <div
          style={{
            backgroundColor: value,
            width: "6rem",
            height: "2rem",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        />
      </section>
    </>
  );
}

export default ShadCnDropdown;
