import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 items-center justify-center p-8 bg-base-300">
      <div className="max-w-lg p-8 bg-base-100 rounded-xl shadow-xl text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
            <MessageSquare className="w-10 h-10 text-base-content" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-base-content">
          No Conversation Selected
        </h2>

        {/* Subtext */}
        <p className="text-base-content opacity-70">
          Please choose a conversation from the sidebar or start a new chat to
          begin connecting.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
