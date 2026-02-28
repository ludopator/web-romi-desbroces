declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(eventName: string, params: Record<string, unknown>) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...params });
    }
  } catch {
    // silently ignore
  }
}

export function trackPhone() {
  track("click_phone", {
    event_category: "contact",
    event_label: "phone",
    value: 1,
  });
}

export function trackEmail() {
  track("click_email", {
    event_category: "contact",
    event_label: "email",
    value: 1,
  });
}

export function trackWhatsApp() {
  track("click_whatsapp", {
    event_category: "contact",
    event_label: "whatsapp",
    value: 1,
  });
}

export function trackFormSubmit() {
  track("lead_form_submit", {
    event_category: "contact",
    event_label: "form",
    value: 1,
  });
}
