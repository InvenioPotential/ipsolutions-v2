// CompanyData.ts
interface CompanyData {
    id: number;
    companyName: string;
    supplier: string;
    csvFile: File | null;
    tariff: string;
  }
  
  export default CompanyData;
  