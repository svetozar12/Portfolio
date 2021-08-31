import React from "react";
import Logo from "../../assets/mobile-blob.svg";
import { useGlobalContext } from "../../Context";

function MobileBlob() {
  return <>test</>;
}

function CombinedBlobs() {
  const { show } = useGlobalContext();

  return (
    <>
      {show ? (
        <svg width="500px" height="500px" className="blobs">
          <path fill="#d1d8e0">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="M428,356Q373,462,263,440.5Q153,419,111.5,334.5Q70,250,110,163.5Q150,77,242,91Q334,105,408.5,177.5Q483,250,428,356Z;  

                  M389.7056,333.02336Q345.42803,416.04672,246.15046,422.62928Q146.8729,429.21184,120.18006,339.60592Q93.48723,250,132.97664,182.9025Q172.46605,115.805,273.65671,74.66105Q374.84736,33.51711,404.41526,141.75856Q433.98316,250,389.7056,333.02336Z;

                  M428,356Q373,462,263,440.5Q153,419,111.5,334.5Q70,250,110,163.5Q150,77,242,91Q334,105,408.5,177.5Q483,250,428,356Z;"
            />
          </path>
        </svg>
      ) : (
        <MobileBlob />
      )}
    </>
  );
}

export default CombinedBlobs;

export { MobileBlob };
