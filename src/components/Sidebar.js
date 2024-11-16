import React, { useState } from 'react';
import AboutModal from './AboutMe';

const logoBase64 = "data:image/png;base64,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CsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQIw0ImIiBSAgU5ERKQADHQiIiIFYKATEREpAAOdiIhIARjoRERECsBAJyIiUgAGOhERkQL8P36faBMFeeCUAAAAAElFTkSuQmCC";

function Sidebar({ onNewChat, onLogout, onViewHistory }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logoBase64} alt="AI Doctor Logo" className="logo-image" />
        <div className="logo-text">AI Medical Chatbot</div>
      </div>
      <button className="new-chat-btn" onClick={onNewChat}>+ New Chat</button>
      <button className="view-history-btn" onClick={onViewHistory}>View Chat History</button>
      <div className="sidebar-footer">
        <button className="about-btn" onClick={() => setIsAboutOpen(true)}>About Me</button>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

export default Sidebar;