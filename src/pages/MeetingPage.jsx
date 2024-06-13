import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const MeetingPage = () => {
    return (
        <div style={{ height: '100vh', display: 'grid', flexDirection: "column" }}>

            <JitsiMeeting
                domain={"meet.jit.si"}
                roomName="PleaseUseAGoodRoomName"
                displayName={"Acteon"}
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
                    displayName: 'YOUR_USERNAME'
                }}
                onApiReady={(externalApi) => {
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                }}
            />
        </div>
    )
}
export default MeetingPage