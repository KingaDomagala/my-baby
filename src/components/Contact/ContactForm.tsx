"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { sendMail } from "@/server/sendMail";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendMail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Wiadomość została wysłana");
    } else if (state?.errors?.general) {
      toast.error(state.errors.general);
    }
  }, [state]);

  return (
    <form action={formAction} className="w-full flex flex-col gap-6">
      <div className="flex flex-col">
        <Label className="mb-3" htmlFor="name">
          Imię
        </Label>
        <Input name="name" id="name" type="text" placeholder="Wprowadź imię" />
        {state?.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
        )}
      </div>

      <div className="flex flex-col">
        <Label className="mb-3" htmlFor="email">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="Wprowadź email"
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col">
        <Label className="mb-3" htmlFor="message">
          Wiadomość
        </Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Wprowadź wiadomość"
        />
        {state?.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>
        )}
      </div>

      {/* Zgoda */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <Checkbox id="consent" name="consent" />
          <Label
            htmlFor="consent"
            className="text-sm leading-relaxed cursor-pointer"
          >
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez
            <span className="font-medium"> MyBaby </span>
            w celu realizacji zapytania przesłanego za pomocą formularza
            kontaktowego.
          </Label>
        </div>

        {state?.errors?.consent && (
          <p className="text-red-500 text-sm">{state.errors.consent}</p>
        )}
      </div>

      <Button className="w-full md:w-3/4" type="submit" disabled={isPending}>
        Wyślij
      </Button>
    </form>
  );
};

export default ContactForm;