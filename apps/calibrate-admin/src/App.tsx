import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PositionList } from "./position/PositionList";
import { PositionCreate } from "./position/PositionCreate";
import { PositionEdit } from "./position/PositionEdit";
import { PositionShow } from "./position/PositionShow";
import { RouteList } from "./route/RouteList";
import { RouteCreate } from "./route/RouteCreate";
import { RouteEdit } from "./route/RouteEdit";
import { RouteShow } from "./route/RouteShow";
import { SensorDataList } from "./sensorData/SensorDataList";
import { SensorDataCreate } from "./sensorData/SensorDataCreate";
import { SensorDataEdit } from "./sensorData/SensorDataEdit";
import { SensorDataShow } from "./sensorData/SensorDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Calibrate"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Position"
          list={PositionList}
          edit={PositionEdit}
          create={PositionCreate}
          show={PositionShow}
        />
        <Resource
          name="Route"
          list={RouteList}
          edit={RouteEdit}
          create={RouteCreate}
          show={RouteShow}
        />
        <Resource
          name="SensorData"
          list={SensorDataList}
          edit={SensorDataEdit}
          create={SensorDataCreate}
          show={SensorDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
