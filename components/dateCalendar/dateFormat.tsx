import { format } from "date-fns";

export function FormatDate(dateString: string) {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
}