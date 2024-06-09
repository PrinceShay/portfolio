"use client";
// components/ContactForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectDescription: z.string().min(1, "Please describe your project"),
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
      <div className="mb-4">
        <label className="block text-gray-200">Name</label>
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
        <label className="block text-gray-200">Company</label>
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
        <label className="block text-gray-200">Email</label>
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
        <label className="block text-gray-200">Phone (optional)</label>
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
        <label className="block text-gray-200">Project Description</label>
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
        <label className="block text-gray-200">Project Type</label>
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
        <label className="block text-gray-200">Budget</label>
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
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      alert("Failed to send email.");
    }
  };

  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, [step]);

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            >
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
