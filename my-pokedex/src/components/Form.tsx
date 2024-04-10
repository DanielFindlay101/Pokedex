import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";

interface FormProps {
  child: string;
}

export default function Form({ child }: FormProps) {
  return (
    <div className="flex flex-col gap-4 h-screen items-center bg-blue-300 p-6">
      <h1>Login to your account now</h1>
      <label className="input w-full flex items-center gap-2 max-w-xs bg-slate-50 border-blue-300">
        <EnvelopeIcon className="w-5 h-5" />
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <label className="input w-full flex items-center gap-2 max-w-xs bg-slate-50 border-blue-300">
        <LockClosedIcon className="w-5 h-5" />
        <input type="text" className="grow" placeholder="Password" />
      </label>
      <button className="bg-yellow-100 p-4 rounded-md hover:bg-yellow-200">
        {child}
      </button>
    </div>
  );
}
