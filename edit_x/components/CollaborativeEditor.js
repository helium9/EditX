import { useEffect, useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';

export default function CollaborativeEditor({room, editorRef}) {
  // console.log("curr room", room);
  // const editorRef = useRef(null); //state lifted to parent.
  const [doc, setDoc] = useState(null);
  const [provider, setProvider] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  useEffect(()=>{
    initSocket(room, editorRef);
  }, [room]);

  const initSocket = async (room, editorRef) => {
    if(provider) await provider.disconnect();
    const ydoc = new Y.Doc();
    // console.log("room", room);
    const yprovider = new WebsocketProvider('ws://localhost:1234', room, ydoc);
    setDoc(ydoc);
    setProvider(yprovider);
    const type = ydoc.getText('monaco');
    const editor = editorRef.current;
    if (editor) {
      try {
        new MonacoBinding(type, editor.getModel(), new Set([editor]), yprovider.awareness);
        console.log('MonacoBinding created successfully');
      } catch (error) {
        console.error('Error creating MonacoBinding:', error);
      }
    }
    yprovider.on('status', event => {
      console.log('WebSocket status:', event.status, yprovider.roomname);
      setConnectionStatus(event.status);
    });
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    console.log('Editor mounted');
    if(room) initSocket(room, editorRef);
  }

  return (
    <div>
      <div>WebSocket Status: {connectionStatus}</div>
      <Editor
        height="90vh"
        defaultLanguage="cpp"
        defaultValue="// Start coding"
        onMount={handleEditorDidMount}
      />
      {/* default language is hardcoded */}
    </div>
  );
}