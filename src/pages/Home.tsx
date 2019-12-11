import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonRow,
  IonCol,
  IonBadge,
  IonAvatar,
  IonItem,
  IonLabel
} from "@ionic/react";

import { chatboxes, call } from "ionicons/icons";

import React from "react";
import "./Home.css";

type MapProps = {
  lat: number;
  lng: number;
  zoom: number;
};

/* const LeafletMap: React.FC = () => {
  return (
    <Map center={[state.lat, state.lng]} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}; */
const HomePage: React.FC = () => {
  /* useEffect(() => {
    // Update the document title using the browser API
    ReactDOM.render(<LeafletMap />, document.getElementById("teste"));
  }); */
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonAvatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonTitle>Fernando</IonTitle> */}

          <IonItem>
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>
              <h2>Fernando</h2>
            </IonLabel>
          </IonItem>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="../../Capturar.JPG" />
        {/* <Map center={[state.lat, state.lng]} zoom={state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </Map> */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonRow>
            <IonCol>
              <IonFabButton>
                <IonIcon icon={call} />
              </IonFabButton>
            </IonCol>
            <IonCol>
              <IonFabButton>
                <IonIcon icon={chatboxes}></IonIcon>
                <IonBadge color="danger">5</IonBadge>
              </IonFabButton>
            </IonCol>
          </IonRow>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
