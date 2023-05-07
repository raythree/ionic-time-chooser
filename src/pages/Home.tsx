import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TimeDemo from '../components/TimeDemo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TimeDemo />
      </IonContent>
    </IonPage>
  );
};

export default Home;
