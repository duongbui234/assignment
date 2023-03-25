import dynamic from "next/dynamic";

export const DatePickerComponent = dynamic(
  () =>
    import("src/common/components/input/date-picker/ssr").then(
      (mod) => mod.DatePickerSSR
    ),
  {
    ssr: false,
  }
);

export const WeekPickerComponent = dynamic(
  () =>
    import("src/common/components/input/date-picker/ssr").then(
      (mod) => mod.WeekPickerSSR
    ),
  {
    ssr: false,
  }
);

export const MonthPickerComponent = dynamic(
  () =>
    import("src/common/components/input/date-picker/ssr").then(
      (mod) => mod.MonthPickerSSR
    ),
  {
    ssr: false,
  }
);

export const YearPickerComponent = dynamic(
  () =>
    import("src/common/components/input/date-picker/ssr").then(
      (mod) => mod.YearPickerSSR
    ),
  {
    ssr: false,
  }
);
