import "dayjs/locale/ja";

import locale from "antd/es/date-picker/locale/ja_JP";
import generatePicker from "antd/lib/date-picker/generatePicker";
import clsx from "clsx";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";

dayjs.locale("ja");
dayjs.extend(weekday);
dayjs.extend(localeData);

export const RawDatePicker = generatePicker<dayjs.Dayjs>(dayjsGenerateConfig);

type Props = {
  className?: string;
  value: any;
  onChange: any;
  placeholder?: string;
  suffixIcon?: JSX.Element;
};

export const DatePickerSSR: React.FC<Props> = ({
  className,
  value,
  onChange,
  placeholder,
  suffixIcon = <></>,
}) => {
  return (
    <RawDatePicker
      value={value}
      onChange={onChange}
      format='YYYY/MM/DD'
      className={clsx("s-picker", className)}
      placeholder={placeholder}
      suffixIcon={suffixIcon}
      locale={locale}
    />
  );
};

export const WeekPickerSSR: React.FC<Props> = ({
  className,
  value,
  onChange,
  placeholder,
  suffixIcon = <></>,
}) => {
  return (
    <RawDatePicker.WeekPicker
      value={value}
      onChange={onChange}
      format='YYYY/MM/DD'
      className={clsx("s-picker", className)}
      placeholder={placeholder}
      suffixIcon={suffixIcon}
      locale={locale}
    />
  );
};

export const MonthPickerSSR: React.FC<Props> = ({
  className,
  value,
  onChange,
  placeholder,
  suffixIcon = <></>,
}) => {
  return (
    <RawDatePicker.MonthPicker
      value={value}
      onChange={onChange}
      format='YYYY/MM'
      className={clsx("s-picker", className)}
      placeholder={placeholder}
      suffixIcon={suffixIcon}
      locale={locale}
    />
  );
};

export const YearPickerSSR: React.FC<Props> = ({
  className,
  value,
  onChange,
  placeholder,
  suffixIcon = <></>,
}) => {
  return (
    <RawDatePicker.YearPicker
      value={value}
      onChange={onChange}
      format='YYYY'
      className={clsx("s-picker", className)}
      placeholder={placeholder}
      suffixIcon={suffixIcon}
      locale={locale}
    />
  );
};
