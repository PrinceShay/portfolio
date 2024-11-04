"use client";

import React, { useState, useRef, useEffect } from "react";
import StepItem from "./StepItem";
import {
  Blocks,
  FileText,
  User,
  Video,
  PenTool,
  Layout,
  ShoppingCart,
  Globe,
  Book,
  Brush,
  PlayCircle,
  Film,
  FileQuestion,
} from "lucide-react";
import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Zod-Schema für die Formularvalidierung
const schema = z.object({
  name: z.string().min(1, "Pflichtfeld"),
  company: z.string().optional(),
  email: z.string().email("Ungültige E-Mail-Adresse").optional(),
  phone: z.string().min(1, "Pflichtfeld"),
  projectType: z.array(z.string()).min(1, "Bitte wähle mindestens eine Option"),

  projectDescription: z.string().min(1, "Bitte beschreibe dein Projekt"),
  currentWebsite: z.string().optional(),
  budget: z.number().min(1000).max(15000),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const previousStepRef = useRef(step); // Neuer Ref zur Speicherung des vorherigen Schritts
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      projectType: [],
      budget: 10000, // Standardwert für Budget
    },
  });

  const steps = [
    {
      title: "Persönliche Informationen",
      description: "Phase 1",
      icon: User,
    },
    {
      title: "Leistungen",
      description: "Phase 2",
      icon: Blocks,
    },
    {
      title: "Projektdetails",
      description: "Phase 3",
      icon: FileText,
    },
  ];

  const stepHeadlines = [
    {
      headline: "Schritt 1",
      text: "Gib deine persönlichen Daten an",
    },
    {
      headline: "Schritt 2",
      text: "Wähle deine Leistungen",
    },
    {
      headline: "Schritt 3",
      text: "Erzähle mir mehr über dein Projekt",
    },
  ];

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await methods.trigger(["name", "phone"]);
    } else if (step === 2) {
      isValid = await methods.trigger(["projectType"]);
    } else if (step === 3) {
      isValid = await methods.trigger(["projectDescription", "budget"]);
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

  // Zustandsvariablen für die Formularübermittlung
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<
    "success" | "error" | null
  >(null);

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

  // GSAP-Animationen
  useGSAP(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.75 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power4.out" }
      );
    }
  }, [step]);

  // useEffect für das Scrollen beim Wechsel von Schritt 2 zu 3
  useEffect(() => {
    if (previousStepRef.current === 2 && step === 3) {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    previousStepRef.current = step;
  }, [step]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
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
    <div className="w-full h-full flex flex-col lg:flex-row gap-4 sm:gap-8">
      {/* Linke Seite mit den Schritten */}
      <div className="h-full sticky sm:static lg:sticky top-6 z-10 w-full basis-2/3 bg-darkBlue-400 backdrop-blur-lg bg-opacity-25 rounded-xl flex flex-col justify-between p-4 sm:p-8">
        <div className="hidden sm:block">
          <h1 className="text-3xl mb-4">{stepHeadlines[step - 1].headline}</h1>
          <p className="text-gray-200 text-xl">
            {stepHeadlines[step - 1].text}
          </p>
        </div>
        <div className="flex lg:flex-col justify-center lg:justify-start gap-2 lg:gap-6 sm:mt-12">
          {steps.map((s, index) => (
            <StepItem
              key={index}
              title={s.title}
              description={s.description}
              icon={s.icon}
              active={step === index + 1}
              finished={step > index + 1}
            />
          ))}
        </div>
      </div>

      {/* Rechte Seite mit dem Formular */}
      <div className="h-full w-full bg-darkBlue-400 rounded-xl p-6 sm:p-8 overflow-auto">
        <FormProvider {...methods}>
          <form ref={formRef} onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}

            {/* Navigationsbuttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="hover:text-primary-400 transition-colors text-white py-3 px-7 rounded-lg"
                >
                  Zurück
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-primary-500 text-white py-3 px-7 hover:bg-primary-400 transition-colors rounded-lg"
                >
                  Weiter
                </button>
              )}
              {step === 3 && (
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
      </div>
    </div>
  );
}

// Schritt 1: Persönliche Informationen
const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">Name*</label>
        <input
          type="text"
          {...register("name")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">
          Unternehmen <span className="text-sm opacity-50">(optional)</span>
        </label>
        <input
          type="text"
          {...register("company")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">Telefon*</label>
        <input
          type="text"
          {...register("phone")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">
          E-Mail <span className="text-sm opacity-50">(optional)</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
    </div>
  );
};

// Schritt 2: Leistungen auswählen
const Step2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const services = [
    {
      category: "Webdesign",
      services: [
        {
          value: "Landingpage",
          icon: Layout,
          title: "Landingpage",
          description: "Einseitige Webseiten zur Lead-Generierung",
        },
        {
          value: "E-Commerce",
          icon: ShoppingCart,
          title: "E-Commerce",
          description: "Online-Shops für deine Produkte",
        },
        {
          value: "Corporate Website",
          icon: Globe,
          title: "Corporate Website",
          description: "Professionelle Webseiten für Unternehmen",
        },
      ],
    },
    {
      category: "Motion Design",
      services: [
        {
          value: "Logo Animation",
          icon: Film,
          title: "Logo Animation",
          description: "Animierte Logos für Markenidentität",
        },
        {
          value: "Reel Animation",
          icon: Video,
          title: "Reel Animation",
          description: "Kurzvideos und Reels für Social Media",
        },
        {
          value: "Explainer Videos",
          icon: PlayCircle,
          title: "Erklärvideos",
          description:
            "Animierte Videos zur Produkt- oder Dienstleistungserklärung",
        },
      ],
    },

    {
      category: "Branding",
      services: [
        {
          value: "Logo Design",
          icon: PenTool,
          title: "Logo Design",
          description: "Einzigartige Logos für deine Marke",
        },
        {
          value: "Visuelle Identität",
          icon: Brush,
          title: "Visuelle Identität",
          description: "Konsistentes Erscheinungsbild für dein Unternehmen",
        },
        {
          value: "Brand Guidelines",
          icon: Book,
          title: "Brand Guidelines",
          description: "Richtlinien für den Einsatz deiner Marke",
        },
      ],
    },
    {
      category: "Anderes",
      services: [
        {
          value: "Something Else",
          icon: FileQuestion,
          title: "Etwas anderes",
          description: "Nichts von hier",
        },
      ],
    },
  ];

  return (
    <div className="">
      <Controller
        control={control}
        name="projectType"
        defaultValue={[]}
        render={({ field }) => {
          const { value, onChange } = field;
          const handleToggle = (serviceValue: string) => {
            if (value.includes(serviceValue)) {
              onChange(value.filter((v: string) => v !== serviceValue));
            } else {
              onChange([...value, serviceValue]);
            }
          };

          return (
            <div className="space-y-8">
              {services.map((group) => (
                <div key={group.category}>
                  <h2 className="text-md mb-4 opacity-80 uppercase">
                    {group.category}
                  </h2>
                  <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    {group.services.map((service) => {
                      const isSelected = value.includes(service.value);
                      return (
                        <div
                          key={service.value}
                          className={`border group hover:border-primary-500 rounded-lg p-4 cursor-pointer transition-colors ${
                            isSelected
                              ? "border-primary-500 bg-gradient-to-b from-primary-800 to-primary-900 bg-opacity-20"
                              : "border-gray-300"
                          }`}
                          onClick={() => handleToggle(service.value)}
                        >
                          <div className="flex flex-col gap-4">
                            <service.icon
                              className={`group-hover:text-primary-500 w-12 h-12 ${
                                isSelected
                                  ? "text-primary-500"
                                  : "text-gray-400"
                              }`}
                            />
                            <div>
                              <h3 className="text-xl">{service.title}</h3>
                              <p className="text-gray-400">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      />
      {errors.projectType && (
        <p className="text-red-500 text-sm mt-1">
          {errors.projectType.message}
        </p>
      )}
    </div>
  );
};

// Schritt 3: Projektdetails und Budget
const Step3 = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();

  const budget = watch("budget", 10000);

  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">
          Erzähl mir etwas mehr über dein Projekt
        </label>
        <textarea
          {...register("projectDescription")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
          rows={5}
        />
        {errors.projectDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">
          Deine aktuelle Webseite{" "}
          <span className="text-sm opacity-50">(optional)</span>
        </label>
        <input
          type="text"
          {...register("currentWebsite")}
          className="w-full text-gray-300 bg-[#2a2a44] outline-none focus:outline-primary-500 px-3 py-2 rounded-lg"
        />
        {errors.currentWebsite && (
          <p className="text-red-500 text-sm mt-1">
            {errors.currentWebsite.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-200 mb-2 text-xl">
          Budget: {budget}€
        </label>
        <input
          type="range"
          {...register("budget", { valueAsNumber: true })}
          min={1000}
          max={15000}
          step={500}
          className="w-full accent-primary-500"
        />
        <div className="flex justify-between text-gray-400 text-sm">
          <span>1.000€</span>
          <span>15.000€</span>
        </div>
        {errors.budget && (
          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
        )}
      </div>
    </div>
  );
};
