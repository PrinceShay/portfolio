"use client";

import { useState, useEffect, useRef } from "react";
import { getLocalStorage, setLocalStorage } from "@/app/lib/storage-helper";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false); // Neue State-Variable für die Banneranzeige
  const cookieContainer = useRef(null);

  // Retrieve cookie consent status from local storage on component mount
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);

    // Wenn keine Zustimmung vorliegt, Banner nach 2-3 Sekunden anzeigen
    if (storedCookieConsent === null) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 4000); // 2500 Millisekunden = 2,5 Sekunden

      // Timer bereinigen, falls die Komponente unmontiert wird
      return () => clearTimeout(timer);
    }
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
  }, [cookieConsent]); // Abhängigkeiten hinzugefügt

  // Do not render the banner if loading, consent is already given, oder showBanner ist false
  if (isLoading || cookieConsent !== null || !showBanner) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-24 md:bottom-12 w-full page_padding mx-auto z-50 ${
        cookieConsent == null ? "visible" : "hidden"
      }`}
    >
      <div className="border border-primary-600 border-opacity-50 bg-primary-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 max-w-7xl mx-auto relative ">
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
