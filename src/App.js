import logo from './logo.svg';
import './App.css';
import { AwsRum, AwsRumConfig } from 'aws-rum-web';

function App() {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::456667773660:role/RUM-Monitor-us-east-2-456667773660-5161303349761-Unauth",
      identityPoolId: "us-east-2:f09d0198-b9b1-475a-9817-b6afe6e43d2b",
      endpoint: "https://dataplane.rum.us-east-2.amazonaws.com",
      telemetries: ["performance","errors","http"],
      allowCookies: true,
      enableXRay: false
    };
  
    const APPLICATION_ID: string = '161f7e37-2dee-43d9-9ff6-afa073811e6a';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'us-east-2';
  
    const awsRum: AwsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
