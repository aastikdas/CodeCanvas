"use client"
import { useRef, useEffect, useCallback } from "react"
import Editor, { type Monaco } from "@monaco-editor/react"
import { configureMonaco, defaultEditorOptions, getEditorLanguage } from "@/features/playground/lib/editor-config"
import type { TemplateFile } from "@/features/playground/lib/path-to-json"

interface PlaygroundEditorProps {
    activeFile: TemplateFile | undefined
    content: string
    onContentChange: (value: string) => void

}

const PlaygroundEditor = ({
    activeFile,
    content,
    onContentChange,
}: PlaygroundEditorProps) => {
    const editorRef = useRef<any>(null)
    const monacoRef = useRef<Monaco | null>(null)

    const handleEditorDidMount = (editor: any, monaco: Monaco) => {
        editorRef.current = editor
        monacoRef.current = monaco

        configureMonaco(monaco)

        updateEditorLanguage()
    }


    const updateEditorLanguage = () => {
        if (!activeFile || !monacoRef.current || !editorRef.current) return
        const model = editorRef.current.getModel()
        if (!model) return

        const language = getEditorLanguage(activeFile.fileExtension || "")
        try {
            monacoRef.current.editor.setModelLanguage(model, language)
        } catch (error) {
            console.warn("Failed to set editor language:", error)
        }
    }

    useEffect(() => {
        updateEditorLanguage()
    }, [activeFile])

    return (
        <div className="h-full relative">
            {/* todo ( ai thingking) */}
            <Editor
                height="100%"
                value={content}
                onChange={(value) => onContentChange(value || "")}
                onMount={handleEditorDidMount}
                language={activeFile ? getEditorLanguage(activeFile.fileExtension || "") : "plaintext"}
                options={defaultEditorOptions}
            />
        </div>
    )
}

export default PlaygroundEditor
