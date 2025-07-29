import { Spinner } from "@/components/spinner";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Spinner />
    </div>
  );
}
