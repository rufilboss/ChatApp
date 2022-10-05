import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return ( 
    <ChatEngine
        height = "100vh"

        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    
    );
}

export default App;