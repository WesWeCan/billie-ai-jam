# Billie's AI Jam - Interactive MIDI Music Demo with Magenta.js

Welcome to Billie's AI Jam, an interactive MIDI music demo powered by Magenta.js! Explore the fusion of music and artificial intelligence in this demonstration where you can experience the dynamic interaction between human creativity and AI improvisation.

## Overview

Billie's AI Jam provides a demonstration environment where you can engage with music and AI in real-time. This project showcases the capabilities of Magenta.js in accompanying and responding to your musical input, whether through a MIDI keyboard or your computer keyboard.

## Features

- **Real-time Interaction:** Play music and witness the AI model's immediate response.
- **AI Accompaniment:** Experience the AI's ability to follow your lead and provide complementary melodies.
- **Visual Feedback:** Engage with dynamic visual and opacity feedback while playing.

## Getting Started

To experience Billie's AI Jam:

1. Clone or download the repository to your local machine.
2. Start a local web server in the directory of the project. If you have Node.js installed, you can use the command ```npx http-server``` to start a server. Alternatively, you can use a Simple Web Server (https://simplewebserver.org/).
3. Open your web browser and navigate to `localhost:8080` (or the port you specified) to access the `index.html` file.
4. Connect your MIDI keyboard to your computer or use your computer keyboard to play.
5. Click on the "Click here to start" button to initiate the interaction with Billie.

## Prerequisites

- Web browser with MIDI support.
- MIDI keyboard (optional) or computer keyboard.
- Internet connection to load external libraries.

## Limitations

- **Single MIDI Device Support:** The application currently only supports one MIDI device at a time. If multiple MIDI devices are connected, it will default to the first one detected.
- **No Polyphony:** The application currently does not support polyphony (playing multiple notes at the same time). If multiple keys are pressed at the same time on the MIDI device, only one note will be recognized.
- **No Specific Note Lengths as Input:** The application currently does not support specific note lengths as input. All notes are interpreted as having the same duration.
- **No Sustain Pedal Support:** The application currently does not support the use of a sustain pedal. If the sustain pedal is used on the MIDI device, it will not have any effect.
- **No Dynamics:** The application currently does not support dynamics (variation in loudness). All notes are played back at the same volume.
- **Dependent on External Libraries:** The application relies on the WebMIDI and Magenta.js libraries. Any changes or updates to these libraries could potentially break the application.
- **Browser Compatibility:** The application uses WebMIDI, which is not supported by all browsers. For the best experience, a browser that supports WebMIDI (like Google Chrome) should be used.
- **No Offline Support:** The application requires an internet connection to load the necessary JavaScript libraries and AI model. It will not work offline.

## Credits

- **Magenta.js:** Special thanks to the Magenta team for providing the powerful music AI capabilities.
- **Wesley Hartogs - Creative Technologist:** Programmer of this demo. (https://creativetechnologist.nl)
- **Thunderboom Records:** Billie's AI Jam is brought to you by Thunderboom Records (https://www.thunderboomrecords.com/) in the context of Open Culture Tech (https://www.openculturetech.com/)

## License

This project is licensed under the [Creative Commons BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).

---

Embark on a musical journey with Billie's AI Jam and Magenta.js, and witness the harmony between human creativity and artificial intelligence! 🎶🤖
