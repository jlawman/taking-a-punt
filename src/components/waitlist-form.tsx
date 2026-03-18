"use client";

import { joinWaitlist } from "@/app/actions";
import { useActionState } from "react";

const initial = { success: false as boolean | undefined, error: undefined as string | undefined };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initial, formData: FormData) => {
      const result = await joinWaitlist(formData);
      if (result.success) return { success: true, error: undefined };
      return { success: false, error: result.error };
    },
    initial,
  );

  return (
    <div className="min-h-[44px]">
      {state.success ? (
        <p className="flex h-11 items-center text-sm font-medium text-gray-900">
          You&apos;re in! We&apos;ll let you know when Season 1 drops.
        </p>
      ) : (
        <form action={formAction} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="h-11 flex-1 rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={pending}
              className="h-11 whitespace-nowrap rounded-full border border-gray-900 bg-gray-900 px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900 disabled:opacity-50"
            >
              {pending ? "Signing up…" : "Notify me"}
            </button>
          </div>
          {state.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}
        </form>
      )}
    </div>
  );
}
