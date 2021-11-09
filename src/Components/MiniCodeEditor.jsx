import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function App() {
    return (
        <CodeMirror
            value="console.log('hello world!');"
            theme={"dark"}
            extensions={[javascript({ jsx: true })]}
            onChange={(value, viewUpdate) => {
                console.log("value:", value);
            }}
        />
    );
}
