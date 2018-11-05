import React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate/';
import EditorHeader from '../components/editor/EditorHeader/EditorHeader';

const EditorPage = () => {
    return (
        <EditorTemplate 
            header={<EditorHeader />}
            editor="Editor"
            preview="Preview"
        />
    )
}

export default EditorPage;