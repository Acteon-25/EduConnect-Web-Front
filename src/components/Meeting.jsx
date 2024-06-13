import { JitsiMeeting } from '@jitsi/react-sdk';



const Meeting = ({nameUser}) => {
  return (
    <div style={{ height: '100vh', display: 'grid', flexDirection: "column" }}>

      <JitsiMeeting
        domain={"meet.jit.si"}
        roomName="Iniciar reunion de asesoria"
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
        }}
        userInfo={{
          displayName: `${nameUser}`
        }}
        onApiReady={(externalApi) => {
          // here you can attach custom event listeners to the Jitsi Meet External API
          // you can also store it locally to execute commands
        }}
      />
    </div>
  )
}
export default Meeting