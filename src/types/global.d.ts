// Global Calendly type definitions
declare namespace Calendly {
  interface InitPopupWidgetOptions {
    url: string;
    text?: string;
    color?: string;
    textColor?: string;
    branding?: boolean;
  }

  interface CalendlyWindow extends Window {
    Calendly: {
      initPopupWidget: (options: InitPopupWidgetOptions) => void;
      closePopupWidget: () => void;
    };
  }
}

declare const window: Calendly.CalendlyWindow;
