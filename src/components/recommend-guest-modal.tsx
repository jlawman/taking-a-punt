"use client";

import { recommendGuest } from "@/app/actions";
import { useState, useActionState } from "react";

const initial = {
  success: false as boolean | undefined,
  error: undefined as string | undefined,
};

export function RecommendGuestButton() {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initial, formData: FormData) => {
      const result = await recommendGuest(formData);
      if (result.success) return { success: true, error: undefined };
      return { success: false, error: result.error };
    },
    initial,
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-medium text-gray-500 hover:text-gray-900"
      >
        Recommend a Guest
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/25"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold text-gray-900">
              Recommend a Guest
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Know someone who&apos;d be brilliant on the podcast? Let us know.
            </p>

            {state.success ? (
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900">
                  Thanks for the recommendation! We&apos;ll look into it.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 h-10 w-full rounded-full border border-gray-900 bg-gray-900 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            ) : (
              <form action={formAction} className="mt-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="speakerName" className="block text-sm font-medium text-gray-700">
                    Guest name
                  </label>
                  <input
                    id="speakerName"
                    type="text"
                    name="speakerName"
                    required
                    placeholder="e.g. Ada Lovelace"
                    className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                    Why would they be a great guest?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={3}
                    placeholder="What makes them interesting, what would you want to hear them talk about..."
                    className="mt-1 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                {state.error && (
                  <p className="text-sm text-red-600">{state.error}</p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="mt-2 h-10 w-full rounded-full border border-gray-900 bg-gray-900 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900 disabled:opacity-50"
                >
                  {pending ? "Sending..." : "Submit recommendation"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
