"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Props {
  groups: string[];
  list: "post" | "project";
}

export function ListFilter(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentGroup = searchParams.get(props.list) ?? "Todos";

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const group = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (group) {
      params.set(props.list, group);
    } else {
      params.delete(props.list);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex space-x-3 mt-3">
      {props.groups.map((group) => (
        <div key={group} className="flex items-center me-4">
          <input
            checked={currentGroup === group}
            onChange={onChange}
            value={group}
            id={`inline-${group}-radio`}
            type="radio"
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor={`inline-${group}-radio`}
            className="ms-2 text-sm font-medium text-gray-900"
          >
            {group}
          </label>
        </div>
      ))}
    </div>
  );
}
