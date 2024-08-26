"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/app/lib/storage-helper";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
  // Specify that cookieConsent can be boolean or null
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve cookie consent status from local storage on component mount
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  // Update local storage and Google Analytics consent status when cookieConsent changes
  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  // Do not render the banner if loading or consent is already given
  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-24 md:bottom-12 w-full px-6 md:px-24 lg:px-48 mx-auto z-50 ${cookieConsent == null ? "visible" : "hidden"}`}
    >
      <div className="border border-primary-600 border-opacity-50 bg-primary-900 bg-opacity-50 backdrop-blur-md rounded-2xl md:rounded-full p-8 max-w-7xl mx-auto ">
        <div className="flex flex-col items-center">
          <div className="text-center overflow-auto">
            <p className="text-2xl mb-4 font-semibold">Cookies</p>
            <p>
              Indem Sie auf Akzeptieren klicken, stimmen Sie der Speicherung von
              Cookies auf Ihrem Gerät zu, um die Seitennavigation zu verbessern,
              die Nutzung der Website zu analysieren und unsere
              Marketingbemühungen zu unterstützen. Weitere Informationen finden
              Sie in unserer
              <a className="underline" href="/datenschutz">
                Datenschutzrichtlinie
              </a>
              .
            </p>
          </div>
          <div className="mt-6 flex gap-6 text-lg">
            <button
              className="bg-primary-800 bg-opacity-50 hover:bg-opacity-100 px-6 py-3 rounded-full"
              onClick={() => setCookieConsent(false)}
            >
              Ablehnen
            </button>
            <button
              className="bg-primary-500 hover:bg-primary-400 px-6 py-3 rounded-full"
              onClick={() => setCookieConsent(true)}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
