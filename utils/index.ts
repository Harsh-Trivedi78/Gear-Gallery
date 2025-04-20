import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
const { manufacturer, year, model, fuel, limit } = filters;

    const headers = {
        'x-rapidapi-key': '278204d3famsh82e81f7e50d6a52p1e4c1ejsn21813bccae0b',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'      
        }
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  )
        
const result = await response.json();

    return result;
    
    };
    export const calculateCarRent = (city_mpg: any, year: number) => {
        if (!year) return "N/A";
      
        const basePricePerDay = 50;
        const ageFactor = 0.05;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        const rentalRatePerDay = basePricePerDay + ageRate;
      
        return rentalRatePerDay.toFixed(0);
      };
      export const generateCarImageUrl = (car:CarProps,angle?:string) => {
            const url = new URL("https://cdn.imagin.studio/getimage");
            const { make, model,year } = car;
            url.searchParams.append('customer', "img");
            url.searchParams.append('make', make);
            url.searchParams.append("modelFamily", model.split(" ")[0]);
            url.searchParams.append("zoomType", "fullscreen");
            url.searchParams.append("modelYear", `${year}`); // 
            url.searchParams.append("angle", `${angle}`); // top, front, rear, side
            return `${url}`;
        }   
        
export const updateSearchParams = (type: string, value:string) => {
  const searchParams = new URLSearchParams
      (window.location.search);
     
        searchParams.set(type, value);
       
      const newPathname = `${window.location.pathname
      }?${searchParams.toString()}`;
      return newPathname;
}