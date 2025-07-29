import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <LucideLoaderCircle className="w-10 h-10 animate-spin" />
    </div>
  );
};

export { Spinner };
