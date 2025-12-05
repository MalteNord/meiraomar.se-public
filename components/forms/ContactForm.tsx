"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { type ContactFormValues, contactSchema } from "@/utils/validations";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success("Thanks! Your submission was received.");
        reset();
      } else {
        const data = await res.json();
        if (res.status === 400 && data.error?.includes("already exists")) {
          toast.error("This email has already been submitted");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (_error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Input
        label="Name"
        {...register("name")}
        error={errors.name?.message}
        placeholder="Your name"
      />
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        placeholder="you@example.com"
      />
      <Textarea
        label="Message (optional)"
        {...register("message")}
        error={errors.message?.message}
        placeholder="Write your message"
      />
      <div className="mt-4 flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="ghost"
          className="hover:cursor-pointer !w-[100px] !h-[42px] disabled:opacity-100 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center min-h-[20px]">
            {isSubmitting ? <Spinner /> : "Submit"}
          </span>
        </Button>
      </div>
    </form>
  );
}
