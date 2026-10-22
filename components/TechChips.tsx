import { getSkillIcon } from "@/lib/skill-icons";

export default function TechChips({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 sm:gap-2">
      {stack
        .filter((tech) => tech.trim() !== "")
        .map((tech) => {
          const brand = getSkillIcon(tech);
          return (
            <li
              key={tech}
              className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300"
            >
              {brand && (
                <brand.icon aria-hidden="true" className="h-3.5 w-3.5" style={{ color: brand.color }} />
              )}
              {tech}
            </li>
          );
        })}
    </ul>
  );
}
