import { Game, stepTwoData } from "./data_step_two";
import data from "../data/dataS1.json";
import { useState, useEffect } from "react";

export const useGames = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      return Math.random() > 0.95
        ? setError(new Error("Can't fetch data"))
        : setGames(data.schedules.map(stepTwoData));
    }, 2000);
  }, []);
  return { loading, error, games };
};
