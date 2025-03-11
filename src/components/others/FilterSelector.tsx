"use client";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Props {
  options: string[];
  list: "post" | "project";
  currentOption: string;
}

export function FilterSelector({ options, list, currentOption }: Props) {
  //
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(list, value);
    } else {
      params.delete(list);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="text-neutral-900 dark:text-gray-200"
        onChange={onChange}
        value={currentOption}
      >
        {options.map((option) => (
          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
