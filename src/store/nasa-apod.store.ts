import { create, StateCreator } from "zustand";
import { Fetcher } from "../libs/ky-api-instance.lib";
import { persist, PersistOptions } from "zustand/middleware";

export type SingleApodType = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

interface NasaApodStoreTypes {
  apodData: SingleApodType[];
  error: string;
  fetch: () => void;
  getDetail: (title: string | undefined) => SingleApodType | undefined;
}

type PersistType = (
  config: StateCreator<NasaApodStoreTypes>,                                            
  options: PersistOptions<NasaApodStoreTypes>                                          
) => StateCreator<NasaApodStoreTypes> 

export const nasaApodStore = create<NasaApodStoreTypes>(
  (persist as PersistType)(
    (set, get) => ({
      apodData: [],
      error: "",
      getDetail: (title) => {
        if (!title) return;
        return get().apodData.find((pod) => pod.title === title);
      },
      fetch: async () => {
        try {
          const response = await Fetcher.get("nasa-pictures.json");

          set({ apodData: await response.json() });
        } catch (error) {
          set({ error: "Error fetching details" });
        }
      },
    }),
    {
      name: 'pods',
    }
  )
);
