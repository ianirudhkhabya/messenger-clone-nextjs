import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    <div className="h-full">
      <Sidebar>
        <ConversationList initialItems={conversations} />
        <div className="h-full">{children}</div>
      </Sidebar>
    </div>
  );
}