import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { Text } from "../../components/text.component";
import { nasaApodStore } from "../../store/nasa-apod.store";
import { PodCard } from "./components/pod-card.component";
import { particleOptions } from "./utils/particle.config";

export const Home = () => {

  const fetchPods = nasaApodStore(state => state.fetch);
  const pods = nasaApodStore(state => state.apodData);
  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  

  useEffect(() => {
    if(!pods.length) {
      fetchPods();
    }
  }, [])
  
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center py-5">
      <Text variant="heading">Nasa Apod</Text>
      </div>
    <div className="row pr-0 pl-0">
    {pods.map(pod => {
        return  <PodCard pod={pod} key={pod.title}  />
      })}
    </div>
      
    <Particles options={particleOptions} init={customInit} />

    </div>
  );
};
