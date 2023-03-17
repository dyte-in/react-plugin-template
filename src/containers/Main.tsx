import React, { useEffect } from 'react'
import { useDytePlugin } from '../context'


// NOTE: The complete documentation and usage can be found at: https://www.npmjs.com/package/@dytesdk/plugin-sdk/v/latest#usage

const Main = () => {

  const plugin = useDytePlugin();

  useEffect(() => {
    if (!plugin) return;

    const getSelf = async () => {
        const self = await plugin?.room.getPeer();
        console.log(self);
    };

    const sendChatMessage = () => {
        plugin?.room.sendChatMessage({
            type: 'text',
            message: 'This is my awesome plugin!'
        });
    }

    getSelf();
    sendChatMessage();
  }, [plugin])


  return (
    <div>
        <img src="https://dyte-uploads.s3.ap-south-1.amazonaws.com/dyte-logo-dark.svg" alt="Logo" width="180"/>
        <h1>React Plugin Template</h1>
        <h3>
            This template demonstrates how Dyte's Plugin SDK can be used. 🚀
        </h3>
        <p>
            Plugin SDK let's you build custom plugins that work with all of Dyte's client SDKs.
        </p>

        <div className='links'>
            <a 
                href='https://www.npmjs.com/package/@dytesdk/plugin-sdk/v/latest'
                target='__blank'
            >
                Explore Docs
            </a>
            •
            <a
                href='https://github.com/dyte-in/plugin-sdk/issues'
                target='__blank'
            >
                Report Bug
            </a>
            •
            <a
                href='https://github.com/dyte-in/plugin-sdk/issues'
                target='__blank'
            >
                Feature Request
            </a>
        </div>
    </div>
  )
}

export default Main
