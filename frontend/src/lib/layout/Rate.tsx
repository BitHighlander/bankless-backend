import { Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";

const Onramp = () => {
  const [status, setStatus] = React.useState({
    rate: "...",
    sessionId: "...",
  });

  const onStart = async function () {
    try {
      const status = await axios.get(
        "http://localhost:4000/api/v1/" + "status"
      );
      setStatus(status.data);
      //setStatus(status.data.sessionId);
      // eslint-disable-next-line no-console
      console.log("status: ", status.data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return (
    <Grid textAlign="center" gap={2}>
      <h2>{Number(status.rate).toFixed(2)} LUSD/USD | {(1 / Number(status.rate)).toFixed(2)} USD/LUSD</h2>
    </Grid>
  );
};

export default Onramp;
