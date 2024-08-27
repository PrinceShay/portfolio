"use client";
// components/ContactForm.tsx
import React, { useState, useRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const schema = z.object({
  name: z.string().min(1, "Pflichtfeld"),
  company: z.string().min(1, "Pflichtfeld"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  projectDescription: z.string().min(1, "Bitte beschreibe dein Projekt"),
  projectType: z.enum(["Motion Design", "Webdesign", "Branding"]),
  budget: z.enum([
    "Less than 500€",
    "500€ - 1000€",
    "1000€ - 2000€",
    "3000€ - 6000€",
    "More than 6000€",
    "I don't know yet",
  ]),
});

type FormData = z.infer<typeof schema>;

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="step">
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">Unternehmen</label>
        <input
          type="text"
          {...register("company")}
          className="text-gray-900 w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>
    </div>
  );
};

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="step">
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">E-Mail</label>
        <input
          type="email"
          {...register("email")}
          className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">
          Telefon <span className="text-sm opacity-50">(optional)</span>
        </label>
        <input
          type="text"
          {...register("phone")}
          className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
};

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="step">
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">
          Beschreibe dein Projekt
        </label>
        <textarea
          {...register("projectDescription")}
          className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
        />
        {errors.projectDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectDescription.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">Projektart</label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register("projectType")}
              value="Motion Design"
              className="form-radio"
            />
            <span className="ml-2">Motion Design</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register("projectType")}
              value="Webdesign"
              className="form-radio"
            />
            <span className="ml-2">Webdesign</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register("projectType")}
              value="Branding"
              className="form-radio"
            />
            <span className="ml-2">Branding</span>
          </label>
        </div>
        {errors.projectType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectType.message}
          </p>
        )}
      </div>
    </div>
  );
};

const Step4 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="step">
      <div className="mb-4">
        <label className="block text-gray-200 mb-2 text-xl">Budget</label>
        <select
          {...register("budget")}
          className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Less than 500€">weniger als 500€</option>
          <option value="500€ - 1000€">500€ - 1000€</option>
          <option value="1000€ - 2000€">1000€ - 3000€</option>
          <option value="3000€ - 6000€">3000€ - 6000€</option>
          <option value="More than 6000€">Mehr als 6000€</option>
          <option value="I don't know yet">
            Ich bin mir noch nicht sicher
          </option>
        </select>
        {errors.budget && (
          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
        )}
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<
    "success" | "error" | null
  >(null);
  const formRef = useRef<HTMLFormElement>(null);

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await methods.trigger(["name", "company"]);
    } else if (step === 2) {
      isValid = await methods.trigger(["email", "phone"]);
    } else if (step === 3) {
      isValid = await methods.trigger(["projectDescription", "projectType"]);
    } else if (step === 4) {
      isValid = await methods.trigger(["budget"]);
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSubmissionResult(response.ok ? "success" : "error");
    } catch (error) {
      setSubmissionResult("error");
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.75 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power4.out" }
      );
    }
  }, [step]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        {/* Replace this with your preferred loading spinner/animation */}
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        {submissionResult === "success" ? (
          <p className="text-green-500 text-xl">E-Mail erfolgreich gesendet!</p>
        ) : (
          <p className="text-red-500 text-xl">
            E-Mail konnte nicht gesendet werden.
          </p>
        )}
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto border w-full sm:w-auto border-primary-600 border-opacity-50 bg-primary-900 bg-opacity-50 backdrop-blur-md p-8 sm:p-16 rounded-2xl shadow-2xl"
      >
        <div className="max-w-lg sm:min-w-72 mx-auto min-h-36">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>

        <div className="flex justify-center gap-2 mt-8 max-w-lg mx-auto  ">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className=" hover:text-primary-400 transition-colors text-white py-3 px-7 rounded-lg"
            >
              Zurück
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-primary-500 text-white py-3 px-7 hover:bg-primary-400 transition-colors rounded-lg"
            >
              Weiter
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 transition-colors text-white py-3 px-7 rounded-lg"
            >
              Absenden
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
