import { useEffect, useState } from "react";
import { Character, Data } from "../models/api.model";

export default function useFetch(url: string) {
  const [data, setData] = useState<Character[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData(): Promise<void> {
      setIsLoading(true); // Set loading to true when starting to fetch data
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("An error occurred while fetching data.");
        const data: Data = await res.json();
        setData(data.results);
        setError(null);
      } catch (error) {
        setData(null);
        if (error instanceof Error) setError(error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
      }
    }

    getData();
  }, [url]);

  return { data, error, isLoading };
}
