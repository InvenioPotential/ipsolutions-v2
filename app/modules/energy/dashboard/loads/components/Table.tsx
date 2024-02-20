// TableInterface.ts
interface Table {
  id: number;
  companyName: string;
  supplier: string;
  csvFile: File | null;
  tariff: string;

}

export default Table;
