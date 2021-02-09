import { formatISO, format } from "date-fns";

export default function Time({ datetime, dateFmt, iso }) {
  let formattedDate;

  if (!dateFmt && !iso) {
    formattedDate = format(datetime, "MMMM d, y");
  } else if (!dateFmt && iso) {
    formattedDate = formatISO(datetime);
  }

  return <time time={formatISO(datetime)}>{formattedDate}</time>;
}
