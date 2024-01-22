import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const Onlinemeetings = () => {
  const zoomMeeting = {
    // apiKey: 'YOUR_ZOOM_API_KEY',
    // meetingNumber: 'YOUR_MEETING_NUMBER',
    // userName: 'Your Name',
    // passWord: 'YOUR_MEETING_PASSWORD',
  };

  useEffect(() => {
    ZoomMtg.setZoomJSLib('https://zoom.us/', '/av');

    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    ZoomMtg.init({
      leaveUrl: '/meeting',
      isSupportAV: true,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          ...zoomMeeting,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.error(error);
          },
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }, []);

  return (
    <div>
      <h1>Company Meeting</h1>
      <div id="zmmtg-root"></div>
    </div>
  );
};

export default Onlinemeetings;
